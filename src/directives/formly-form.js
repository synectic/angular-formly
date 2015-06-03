import angular from 'angular-fix';

export default formlyForm;

/**
 * @ngdoc directive
 * @name formlyForm
 * @restrict E
 */
// @ngInject
function formlyForm(formlyUsability, $parse, formlyConfig) {
  var currentFormId = 1;
  return {
    restrict: 'E',
    template: formlyFormGetTemplate,
    replace: true,
    transclude: true,
    scope: {
      fields: '=',
      model: '=',
      form: '=?',
      options: '=?'
    },
    controller: FormlyFormController,
    link: formlyFormLink
  };

  function formlyFormGetTemplate(el, attrs) {
    /* jshint -W033 */ // this because jshint is broken I guess...
    const rootEl = getRootEl();
    const fieldRootEl = getFieldRootEl();
    const formId = `formly_${currentFormId++}`;
    let parentFormAttributes = '';
    if (attrs.hasOwnProperty('isFieldGroup') && el.parent().parent().hasClass('formly')) {
      parentFormAttributes = copyAttributes(el.parent().parent()[0].attributes);
    }
    var globalUseOneTimeBindings = formlyConfig.extras.field ?
      formlyConfig.extras.field.useOneTimeBindings : null;
    var localUseOneTimeBindings = attrs.useOneTimeBindings ?
        $parse(attrs.useOneTimeBindings)() : null;
    return `
        <${rootEl} class="formly"
                 name="${getFormName()}"
                 role="form" ${parentFormAttributes}>
          <${fieldRootEl} formly-field
               ng-repeat="field in ${getFieldOneTimeBinding('ng-repeat')}fields ${getTrackBy()}"
               ${getHideDirective()}="${getFieldOneTimeBinding(getHideDirective())}!field.hide"
               ${getFieldAttributes()}
               class="formly-field"
               options="${getFieldOneTimeBinding('options')}field"
               model="${getFieldOneTimeBinding('model')}(field.model || model)"
               fields="${getFieldOneTimeBinding('fields')}fields"
               form="${getFieldOneTimeBinding('form')}theFormlyForm"
               form-id="${getFieldOneTimeBinding('form-id')}${getFormName()}"
               form-state="${getFieldOneTimeBinding('form-state')}options.formState"
               form-options="${getFieldOneTimeBinding('form-options')}options"
               index="${getFieldOneTimeBinding('index')}$index">
          </${fieldRootEl}>
          <div ng-transclude></div>
        </${rootEl}>
      `;

    function getRootEl() {
      return attrs.rootEl || 'ng-form';
    }

    function getFieldRootEl() {
      return attrs.fieldRootEl || 'div';
    }

    function getHideDirective() {
      return attrs.hideDirective || formlyConfig.extras.defaultHideDirective || 'ng-if';
    }

    function getTrackBy() {
      if (!attrs.trackBy) {
        return '';
      } else {
        return `track by ${attrs.trackBy}`;
      }
    }

    function getFormName() {
      let formName = formId;
      const bindName = attrs.bindName;
      if (bindName) {
        if (angular.version.minor < 3) {
          throw formlyUsability.getFormlyError('bind-name attribute on formly-form not allowed in < angular 1.3');
        }
        // we can do a one-time binding here because we know we're in 1.3.x territory
        formName = `{{::'formly_' + ${bindName}}}`;
      }
      return formName;
    }

    function copyAttributes(attributes) {
      const excluded = ['model', 'form', 'fields', 'options', 'name', 'role', 'class'];
      const arrayAttrs = [];
      angular.forEach(attributes, ({nodeName, nodeValue}) => {
        if (nodeName !== 'undefined' && excluded.indexOf(nodeName) === -1) {
          arrayAttrs.push(`${toKebabCase(nodeName)}="${nodeValue}"`);
        }
      });
      return arrayAttrs.join(' ');
    }

    function getFieldAttributes() {
      if (attrs.fieldAttributes) {
        return attrs.fieldAttributes;
      }
      if (formlyConfig.extras.field &&
          formlyConfig.extras.field.attributes) {
        return formlyConfig.extras.field.attributes;
      }
      return '';
    }

    function getFieldOneTimeBinding(attributeName) {
      var isOneTimeBinding = false;
      if (localUseOneTimeBindings &&
          localUseOneTimeBindings[attributeName] !== undefined) {
        isOneTimeBinding = localUseOneTimeBindings[attributeName];
      }
      else if (globalUseOneTimeBindings &&
               globalUseOneTimeBindings[attributeName] !== undefined) {
        isOneTimeBinding = globalUseOneTimeBindings[attributeName];
      }
      return isOneTimeBinding ? '::' : '';
    }
  }

  // @ngInject
  function FormlyFormController($scope, formlyApiCheck, formlyUtil) {
    setupOptions();
    $scope.model = $scope.model || {};
    $scope.fields = $scope.fields || [];

    angular.forEach($scope.fields, initModel); // initializes the model property if set to 'formState'
    angular.forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
    angular.forEach($scope.fields, setupWatchers); // setup watchers for all fields

    // watch the model and evaluate watch expressions that depend on it.
    $scope.$watch('model', onModelOrFormStateChange, true);
    if ($scope.options.formState) {
      $scope.$watch('options.formState', onModelOrFormStateChange, true);
    }

    function onModelOrFormStateChange() {
      angular.forEach($scope.fields, function runFieldExpressionProperties(field, index) {
        /*jshint -W030 */
        const model = field.model || $scope.model;
        field.runExpressions && field.runExpressions(model);
        if (field.hideExpression) { // can't use hide with expressionProperties reliably
          const val = model[field.key];
          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
        }
      });
    }

    function setupOptions() {
      formlyApiCheck.throw(
        [formlyApiCheck.formOptionsApi.optional], [$scope.options], {prefix: 'formly-form options check'}
      );
      $scope.options = $scope.options || {};
      $scope.options.formState = $scope.options.formState || {};

      angular.extend($scope.options, {
        updateInitialValue,
        resetModel
      });

    }

    function updateInitialValue() {
      angular.forEach($scope.fields, field => {
        if (isFieldGroup(field)) {
          field.options.updateInitialValue();
        } else {
          field.updateInitialValue();
        }
      });
    }

    function resetModel() {
      angular.forEach($scope.fields, field => {
        if (isFieldGroup(field)) {
          field.options.resetModel();
        } else {
          field.resetModel();
        }
      });
    }

    function initModel(field) {
      if (angular.isString(field.model)) {
        const expression = field.model;
        const index = $scope.fields.indexOf(field);
        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
        if (!field.model) {
          throw formlyUsability.getFieldError(
            'field-model-must-be-initialized',
            'Field model must be initialized. When specifying a model as a string for a field, the result of the' +
            ' expression must have been initialized ahead of time.',
            field);
        }
      }
    }

    function attachKey(field, index) {
      if (!isFieldGroup(field)) {
        field.key = field.key || index || 0;
      }
    }

    function setupWatchers(field, index) {
      if (isFieldGroup(field) || !angular.isDefined(field.watcher)) {
        return;
      }
      var watchers = field.watcher;
      if (!angular.isArray(watchers)) {
        watchers = [watchers];
      }
      angular.forEach(watchers, function setupWatcher(watcher) {
        if (!angular.isDefined(watcher.listener)) {
          throw formlyUsability.getFieldError(
            'all-field-watchers-must-have-a-listener',
            'All field watchers must have a listener', field
          );
        }
        var watchExpression = getWatchExpression(watcher, field, index);
        var watchListener = getWatchListener(watcher, field, index);

        var type = watcher.type || '$watch';
        watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
      });
    }

    function getWatchExpression(watcher, field, index) {
      var watchExpression = watcher.expression || `model['${field.key}']`;
      if (angular.isFunction(watchExpression)) {
        // wrap the field's watch expression so we can call it with the field as the first arg
        // and the stop function as the last arg as a helper
        var originalExpression = watchExpression;
        watchExpression = function formlyWatchExpression() {
          var args = modifyArgs(watcher, index, ...arguments);
          return originalExpression(...args);
        };
        watchExpression.displayName = `Formly Watch Expression for field for ${field.key}`;
      }
      return watchExpression;
    }

    function getWatchListener(watcher, field, index) {
      var watchListener = watcher.listener;
      if (angular.isFunction(watchListener)) {
        // wrap the field's watch listener so we can call it with the field as the first arg
        // and the stop function as the last arg as a helper
        var originalListener = watchListener;
        watchListener = function formlyWatchListener() {
          var args = modifyArgs(watcher, index, ...arguments);
          return originalListener(...args);
        };
        watchListener.displayName = `Formly Watch Listener for field for ${field.key}`;
      }
      return watchListener;
    }

    function modifyArgs(watcher, index, ...originalArgs) {
      return [$scope.fields[index], ...originalArgs, watcher.stopWatching];
    }

    function evalCloseToFormlyExpression(expression, val, field, index) {
      const extraLocals = getFormlyFieldLikeLocals(field, index);
      return formlyUtil.formlyEval($scope, expression, val, val, extraLocals);
    }

    function getFormlyFieldLikeLocals(field, index) {
      // this makes it closer to what a regular formlyExpression would be
      return {
        options: field,
        index: index,
        formState: $scope.options.formState,
        formId: $scope.formId
      };
    }
  }

  function formlyFormLink(scope, el, attrs) {
    setFormController();
    fixChromeAutocomplete();

    function setFormController() {
      const formId = attrs.name;
      scope.formId = formId;
      scope.theFormlyForm = scope[formId];
      if (attrs.form) {
        const getter = $parse(attrs.form);
        const setter = getter.assign;
        const parentForm = getter(scope.$parent);
        if (parentForm) {
          scope.theFormlyForm = parentForm;
          if (scope[formId]) {
            scope.theFormlyForm.$removeControl(scope[formId]);
          }

          // this next line is probably one of the more dangerous things that angular-formly does to improve the
          // API for angular-formly forms. It ensures that the NgModelControllers inside of formly-form will be
          // attached to the form that is passed to formly-form rather than the one that formly-form creates
          // this is necessary because it's confusing to have a step between the form you pass in
          // and the fields in that form. It also is because angular doesn't propagate properties like $submitted down
          // to children forms :-( This line was added to solve this issue:
          // https://github.com/formly-js/angular-formly/issues/287
          // luckily, this is how the formController has been accessed by the NgModelController since angular 1.0.0
          // so I expect it will remain this way for the life of angular 1.x
          el.removeData('$formController');
        } else {
          setter(scope.$parent, scope[formId]);
        }
      }
      if (!scope.theFormlyForm) {
        console.warn(formlyUsability.getErrorMessage(
          'formly-form-has-no-formcontroller',
          'A formly-form does not have a `form` property. Many functions of the form (like validation) may not work'
        ));
      }
    }

    /**
     * chrome autocomplete lameness
     * see https://code.google.com/p/chromium/issues/detail?id=468153#c14
     * ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
     */
    function fixChromeAutocomplete() {
      const global = formlyConfig.extras.removeChromeAutoComplete === true;
      const offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
      const onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
      if ((global && !offInstance) || onInstance) {
        const input = document.createElement('input');
        input.setAttribute('autocomplete', 'address-level4');
        input.setAttribute('hidden', true);
        el[0].appendChild(input);
      }

    }
  }


  // stateless util functions
  function toKebabCase(string) {
    if (string) {
      return string.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
    } else {
      return '';
    }
  }

  function isFieldGroup(field) {
    return field && !!field.fieldGroup;
  }
}
