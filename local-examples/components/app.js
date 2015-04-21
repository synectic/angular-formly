(function() {
  'use strict';

  //var app = angular.module('app', ['formly', 'formlyVanilla'], function(formlyConfig) {
  var app = angular.module('app', ['formly', 'formlyBootstrap'], function config(formlyConfigProvider) {
    //formlyConfigProvider.extras.disableNgModelAttrsManipulator = true;
  }).run(function(formlyConfig, formlyVersion) {
    //apiCheck.disable();
    formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
    var myCheck = window.apiCheck({
      output: {prefix: 'my check'}
    });


    var label = formlyConfig.getWrapper('bootstrapLabel');
    label.validateOptions = function(options) {
    };

    formlyConfig.setType({
      name: 'nullWrappers',
      wrapper: null
    });

    formlyConfig.setType({
      name: 'custom',
      template: formlyConfig.getType('input').template,
      defaultOptions: {
        ngModelAttrs: {
          '/^hello$/': {
            value: 'ng-pattern'
          }
        }
      },
      apiCheck: {
        templateOptions: myCheck.shape({
          description: myCheck.string
        })
      },
      apiCheckInstance: myCheck,
      apiCheckFunction: 'throw',
      controller: function($scope) {
      },
      link: function(scope, el) {
        setTimeout(function() {
          var desc = angular.element(el[0].querySelector('.help-block'));
          var input = el.find('input');
          desc.addClass('ng-hide');
          input.on('focus', function() {
            desc.removeClass('ng-hide');
          });
          input.on('blur', function() {
            desc.addClass('ng-hide');
          });
        });
      }
    });

    formlyConfig.setType({
      name: 'customExtended',
      extends: 'custom',
      controller: function($scope) {
      },
      link: function(scope, el) {
      },
      defaultOptions: {
        validators: {
          //custom: {
          //  expression: '$viewValue === "custom"',
          //  message: '$viewValue + " is not \"custom\""'
          //}
        }
      }
    });
  });

  app.run(function(formlyConfig, $http, $templateCache) {
    formlyConfig.templateManipulators.postWrapper.push(function(template) {
      return $http.get('components/wrapper.html', {
        cache: $templateCache
      }).then(function(response) {
        return response.data.replace('<my-own-transclude></my-own-transclude>', template);
      });
    });
  });

  app.controller('MainCtrl', function MainCtrl($timeout, $q) {
    var vm = this;

    vm.user = {};

    vm.realFields = [];

    vm.fields = [
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      },
      {
        type: 'checkbox',
        key: 'mine',
        templateOptions: {
          label: 'My Label',
          description: 'This is an awesome description for a checkbox!',
          required: true
        }
      },
      {
        type: 'input',
        key: 'maxLength',
        templateOptions: {
          type: 'number',
          label: 'Max Length',
          onChange: function(value, options, scope) {
            scope.formState.maxLength = value;
          }
        }
      },
      {
        type: 'input',
        key: 'myKey',
        templateOptions: {
          placeholder: 'This rocks',
          label: 'My Input',
          required: true,
          description: 'This is an awesome description',
          addonRight: {
            class: 'glyphicon glyphicon-ok'
          }
        },
        expressionProperties: {
          'templateOptions.maxlength': 'formState.maxLength',
          'templateOptions.tabindex': 'model.mine ? 0 : -1'
        }
      },
      {
        type: 'select',
        key: 'mySelect',
        templateOptions: {
          label: 'Choose something!',
          options: [
            {},
            {display: 'item 1', id: 'coolio'},
            {display: 'item 2', id: 'coolio2'},
            {display: 'item 3', id: 'coolio3'}
          ],
          valueProp: 'id',
          labelProp: 'display'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'multipleOptions',
        templateOptions: {
          label: 'Multiple Options',
          options: [
            {label: 'Cool cat', value: {a: 'b'}},
            {label: 'Cool Dog', value: {c: 'd'}},
            {label: 'Cool Frog', value: true},
            {label: 'Cool Log', value: 34}
          ],
          labelProp: 'label'
        }
      }
    ];
  });

})();
