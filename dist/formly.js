// angular-formly version 6.0.1 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["api-check", "angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormly"] = factory(require("api-check"), require("angular"));
	else
		root["ngFormly"] = factory(root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var index = _interopRequire(__webpack_require__(1));
	
	module.exports = index;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	var formlyApiCheck = _interopRequire(__webpack_require__(2));
	
	var formlyErrorAndWarningsUrlPrefix = _interopRequire(__webpack_require__(3));
	
	var formlyUsability = _interopRequire(__webpack_require__(4));
	
	var formlyConfig = _interopRequire(__webpack_require__(5));
	
	var formlyValidationMessages = _interopRequire(__webpack_require__(6));
	
	var formlyUtil = _interopRequire(__webpack_require__(7));
	
	var formlyWarn = _interopRequire(__webpack_require__(8));
	
	var formlyCustomValidation = _interopRequire(__webpack_require__(9));
	
	var formlyField = _interopRequire(__webpack_require__(10));
	
	var formlyFocus = _interopRequire(__webpack_require__(11));
	
	var formlyForm = _interopRequire(__webpack_require__(12));
	
	var formlyNgModelAttrsManipulator = _interopRequire(__webpack_require__(13));
	
	var formlyCustomTags = _interopRequire(__webpack_require__(14));
	
	var ngModuleName = "formly";
	
	module.exports = ngModuleName;
	
	var ngModule = angular.module(ngModuleName, []);
	
	ngModule.constant("formlyApiCheck", formlyApiCheck);
	ngModule.constant("formlyErrorAndWarningsUrlPrefix", formlyErrorAndWarningsUrlPrefix);
	ngModule.constant("formlyVersion", ("6.0.1")); // <-- webpack variable
	
	ngModule.provider("formlyUsability", formlyUsability);
	ngModule.provider("formlyConfig", formlyConfig);
	
	ngModule.factory("formlyValidationMessages", formlyValidationMessages);
	ngModule.factory("formlyUtil", formlyUtil);
	ngModule.factory("formlyWarn", formlyWarn);
	
	ngModule.directive("formlyCustomValidation", formlyCustomValidation);
	ngModule.directive("formlyField", formlyField);
	ngModule.directive("formlyFocus", formlyFocus);
	ngModule.directive("formlyForm", formlyForm);
	
	ngModule.run(formlyNgModelAttrsManipulator);
	ngModule.run(formlyCustomTags);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var apiCheckFactory = _interopRequire(__webpack_require__(16));
	
	var apiCheck = apiCheckFactory({
	  output: {
	    prefix: "angular-formly:",
	    docsBaseUrl: __webpack_require__(3)
	  }
	});
	
	function shapeRequiredIfNot(otherProps, propChecker) {
	  if (!angular.isArray(otherProps)) {
	    otherProps = [otherProps];
	  }
	  var type = "specified if these are not specified: `" + otherProps.join(", ") + "` (otherwise it's optional)";
	  function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
	    var propExists = obj && obj.hasOwnProperty(propName);
	    var otherPropsExist = otherProps.some(function (otherProp) {
	      return obj && obj.hasOwnProperty(otherProp);
	    });
	    if (!otherPropsExist && !propExists) {
	      return apiCheck.utils.getError(propName, location, type);
	    } else if (propExists) {
	      return propChecker(prop, propName, location, obj);
	    }
	  }
	  shapeRequiredIfNotDefinition.type = type;
	  return apiCheck.utils.checkerHelpers.setupChecker(shapeRequiredIfNotDefinition);
	}
	
	var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
	var specifyWrapperType = apiCheck.oneOfType([apiCheck.oneOf([null]), apiCheck.typeOrArrayOf(apiCheck.string)]);
	
	var apiCheckProperty = apiCheck.objectOf(apiCheck.func);
	
	var apiCheckInstanceProperty = apiCheck.shape.onlyIf("apiCheck", apiCheck.func.withProperties({
	  warn: apiCheck.func,
	  "throw": apiCheck.func,
	  shape: apiCheck.func
	}));
	
	var apiCheckFunctionProperty = apiCheck.shape.onlyIf("apiCheck", apiCheck.oneOf(["throw", "warn"]));
	
	var formlyWrapperType = apiCheck.shape({
	  name: shapeRequiredIfNot("types", apiCheck.string).optional,
	  template: apiCheck.shape.ifNot("templateUrl", apiCheck.string).optional,
	  templateUrl: apiCheck.shape.ifNot("template", apiCheck.string).optional,
	  types: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  overwriteOk: apiCheck.bool.optional,
	  validateOptions: apiCheck.func.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional
	}).strict;
	
	var fieldOptionsApiShape = {
	  type: apiCheck.shape.ifNot(["template", "templateUrl"], apiCheck.string).optional,
	  template: apiCheck.shape.ifNot(["type", "templateUrl"], apiCheck.string).optional,
	  templateUrl: apiCheck.shape.ifNot(["type", "template"], apiCheck.string).optional,
	  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]),
	  model: apiCheck.object.optional,
	  expressionProperties: apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	    expression: formlyExpression,
	    message: formlyExpression.optional
	  }).strict])).optional,
	  data: apiCheck.object.optional,
	  templateOptions: apiCheck.object.optional,
	  wrapper: specifyWrapperType.optional,
	  modelOptions: apiCheck.shape({
	    updateOn: apiCheck.string.optional,
	    debounce: apiCheck.oneOfType([apiCheck.object, apiCheck.string]).optional,
	    allowInvalid: apiCheck.bool.optional,
	    getterSetter: apiCheck.bool.optional,
	    timezone: apiCheck.string.optional
	  }).optional,
	  watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
	    expression: formlyExpression.optional,
	    listener: formlyExpression
	  })).optional,
	  validators: apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
	    expression: formlyExpression,
	    message: formlyExpression.optional
	  }).strict])).optional,
	  noFormControl: apiCheck.bool.optional,
	  hide: apiCheck.bool.optional,
	  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
	    expression: apiCheck.shape.ifNot(["value", "attribute", "bound"], apiCheck.any).optional,
	    value: apiCheck.shape.ifNot("expression", apiCheck.any).optional,
	    attribute: apiCheck.shape.ifNot("expression", apiCheck.any).optional,
	    bound: apiCheck.shape.ifNot("expression", apiCheck.any).optional
	  }).strict).optional,
	  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
	  link: apiCheck.func.optional,
	  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
	  validation: apiCheck.shape({
	    show: apiCheck.oneOfType([apiCheck.bool, apiCheck.oneOf([null])]).optional,
	    messages: apiCheck.objectOf(formlyExpression).optional,
	    errorExistsAndShouldBeVisible: apiCheck.bool.optional
	  }).optional,
	  formControl: apiCheck.object.optional,
	  value: apiCheck.func.optional,
	  runExpressions: apiCheck.func.optional,
	  resetModel: apiCheck.func.optional,
	  updateInitialValue: apiCheck.func.optional,
	  initialValue: apiCheck.any.optional
	};
	
	var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;
	
	var typeOptionsDefaultOptions = angular.copy(fieldOptionsApiShape);
	typeOptionsDefaultOptions.key = apiCheck.string.optional;
	
	var formlyTypeOptions = apiCheck.shape({
	  name: apiCheck.string,
	  template: apiCheck.shape.ifNot("templateUrl", apiCheck.string).optional,
	  templateUrl: apiCheck.shape.ifNot("template", apiCheck.string).optional,
	  controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
	  link: apiCheck.func.optional,
	  defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
	  "extends": apiCheck.string.optional,
	  wrapper: specifyWrapperType.optional,
	  data: apiCheck.object.optional,
	  validateOptions: apiCheck.func.optional,
	  apiCheck: apiCheckProperty.optional,
	  apiCheckInstance: apiCheckInstanceProperty.optional,
	  apiCheckFunction: apiCheckFunctionProperty.optional,
	  apiCheckOptions: apiCheck.object.optional,
	  overwriteOk: apiCheck.bool.optional
	}).strict;
	
	angular.extend(apiCheck, {
	  formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression, formlyWrapperType: formlyWrapperType
	});
	
	module.exports = apiCheck;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = "https://github.com/formly-js/angular-formly/blob/" + ("6.0.1") + "/other/ERRORS_AND_WARNINGS.md#";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	module.exports = formlyUsability;
	
	// @ngInject
	function formlyUsability(formlyApiCheck, formlyErrorAndWarningsUrlPrefix) {
	  var _this = this;
	
	  angular.extend(this, {
	    getFormlyError: getFormlyError,
	    getFieldError: getFieldError,
	    checkWrapper: checkWrapper,
	    checkWrapperTemplate: checkWrapperTemplate,
	    $get: function () {
	      return _this;
	    }
	  });
	
	  function getFieldError(errorInfoSlug, message, field) {
	    if (arguments.length < 3) {
	      field = message;
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message) + (" Field definition: " + angular.toJson(field)));
	  }
	
	  function getFormlyError(errorInfoSlug, message) {
	    if (!message) {
	      message = errorInfoSlug;
	      errorInfoSlug = null;
	    }
	    return new Error(getErrorMessage(errorInfoSlug, message));
	  }
	
	  function getErrorMessage(errorInfoSlug, message) {
	    var url = "";
	    if (errorInfoSlug !== null) {
	      url = "" + formlyErrorAndWarningsUrlPrefix + "" + errorInfoSlug;
	    }
	    return "Formly Error: " + message + ". " + url;
	  }
	
	  function checkWrapper(wrapper) {
	    formlyApiCheck["throw"](formlyApiCheck.formlyWrapperType, wrapper, {
	      prefix: "formlyConfig.setWrapper",
	      urlSuffix: "setwrapper-validation-failed"
	    });
	  }
	
	  function checkWrapperTemplate(template, additionalInfo) {
	    var formlyTransclude = "<formly-transclude></formly-transclude>";
	    if (template.indexOf(formlyTransclude) === -1) {
	      throw getFormlyError("Template wrapper templates must use \"" + formlyTransclude + "\" somewhere in them. " + ("This one does not have \"<formly-transclude></formly-transclude>\" in it: " + template) + "\n" + ("Additional information: " + JSON.stringify(additionalInfo)));
	    }
	  }
	}
	formlyUsability.$inject = ["formlyApiCheck", "formlyErrorAndWarningsUrlPrefix"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	var utils = _interopRequire(__webpack_require__(18));
	
	module.exports = formlyConfig;
	
	// @ngInject
	function formlyConfig(formlyUsabilityProvider, formlyApiCheck) {
	  var _this2 = this;
	
	  var typeMap = {};
	  var templateWrappersMap = {};
	  var defaultWrapperName = "default";
	  var _this = this;
	  var getError = formlyUsabilityProvider.getFormlyError;
	
	  angular.extend(this, {
	    setType: setType,
	    getType: getType,
	    setWrapper: setWrapper,
	    getWrapper: getWrapper,
	    getWrapperByType: getWrapperByType,
	    removeWrapperByName: removeWrapperByName,
	    removeWrappersForType: removeWrappersForType,
	    disableWarnings: false,
	    extras: {
	      disableNgModelAttrsManipulator: false,
	      ngModelAttrsManipulatorPreferUnbound: false,
	      removeChromeAutoComplete: false
	    },
	    templateManipulators: {
	      preWrapper: [],
	      postWrapper: []
	    },
	    $get: function () {
	      return _this2;
	    }
	  });
	
	  function setType(options) {
	    if (angular.isArray(options)) {
	      angular.forEach(options, setType);
	    } else if (angular.isObject(options)) {
	      checkType(options);
	      if (options["extends"]) {
	        extendTypeOptions(options);
	      }
	      typeMap[options.name] = options;
	    } else {
	      throw getError("You must provide an object or array for setType. You provided: " + JSON.stringify(arguments));
	    }
	  }
	
	  function checkType(options) {
	    formlyApiCheck["throw"](formlyApiCheck.formlyTypeOptions, options, {
	      prefix: "formlyConfig.setType",
	      url: "settype-validation-failed"
	    });
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, typeMap, options, "types");
	    } else {
	      options.overwriteOk = undefined;
	    }
	  }
	
	  function extendTypeOptions(options) {
	    var extendsType = getType(options["extends"], true, options);
	    extendTypeControllerFunction(options, extendsType);
	    extendTypeLinkFunction(options, extendsType);
	    extendTypeValidateOptionsFunction(options, extendsType);
	    extendTypeDefaultOptions(options, extendsType);
	    utils.reverseDeepMerge(options, extendsType);
	  }
	
	  function extendTypeControllerFunction(options, extendsType) {
	    var extendsCtrl = extendsType.controller;
	    if (!angular.isDefined(extendsCtrl)) {
	      return;
	    }
	    var optionsCtrl = options.controller;
	    if (angular.isDefined(optionsCtrl)) {
	      options.controller = function ($scope, $controller) {
	        $controller(extendsCtrl, { $scope: $scope });
	        $controller(optionsCtrl, { $scope: $scope });
	      };
	      options.controller.$inject = ["$scope", "$controller"];
	    } else {
	      options.controller = extendsCtrl;
	    }
	  }
	
	  function extendTypeLinkFunction(options, extendsType) {
	    var extendsFn = extendsType.link;
	    if (!angular.isDefined(extendsFn)) {
	      return;
	    }
	    var optionsFn = options.link;
	    if (angular.isDefined(optionsFn)) {
	      options.link = function () {
	        extendsFn.apply(undefined, arguments);
	        optionsFn.apply(undefined, arguments);
	      };
	    } else {
	      options.link = extendsFn;
	    }
	  }
	
	  function extendTypeValidateOptionsFunction(options, extendsType) {
	    var extendsFn = extendsType.validateOptions;
	    if (!angular.isDefined(extendsFn)) {
	      return;
	    }
	    var optionsFn = options.validateOptions;
	    var originalDefaultOptions = options.defaultOptions;
	    if (angular.isDefined(optionsFn)) {
	      options.validateOptions = function (options) {
	        optionsFn(options);
	        var mergedOptions = angular.copy(options);
	        var defaultOptions = originalDefaultOptions;
	        if (defaultOptions) {
	          if (angular.isFunction(defaultOptions)) {
	            defaultOptions = defaultOptions(mergedOptions);
	          }
	          utils.reverseDeepMerge(mergedOptions, defaultOptions);
	        }
	        extendsFn(mergedOptions);
	      };
	    } else {
	      options.validateOptions = extendsFn;
	    }
	  }
	
	  function extendTypeDefaultOptions(options, extendsType) {
	    var extendsDO = extendsType.defaultOptions;
	    if (!angular.isDefined(extendsDO)) {
	      return;
	    }
	    var optionsDO = options.defaultOptions;
	    var optionsDOIsFn = angular.isFunction(optionsDO);
	    var extendsDOIsFn = angular.isFunction(extendsDO);
	    if (extendsDOIsFn) {
	      options.defaultOptions = function defaultOptions(options) {
	        var extendsDefaultOptions = extendsDO(options);
	        var mergedDefaultOptions = {};
	        utils.reverseDeepMerge(mergedDefaultOptions, options, extendsDefaultOptions);
	        var extenderOptionsDefaultOptions = optionsDO;
	        if (optionsDOIsFn) {
	          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions);
	        }
	        utils.reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
	        return extendsDefaultOptions;
	      };
	    } else if (optionsDOIsFn) {
	      options.defaultOptions = function defaultOptions(options) {
	        var newDefaultOptions = {};
	        utils.reverseDeepMerge(newDefaultOptions, options, extendsDO);
	        return optionsDO(newDefaultOptions);
	      };
	    }
	  }
	
	  function getType(name, throwError, errorContext) {
	    if (!name) {
	      return undefined;
	    }
	    var type = typeMap[name];
	    if (!type && throwError === true) {
	      throw getError("There is no type by the name of \"" + name + "\": " + JSON.stringify(errorContext));
	    } else {
	      return type;
	    }
	  }
	
	  function setWrapper(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	      _again = false;
	      var options = _x,
	          name = _x2;
	
	      if (angular.isArray(options)) {
	        return options.map(function (wrapperOptions) {
	          return setWrapper(wrapperOptions);
	        });
	      } else if (angular.isObject(options)) {
	        options.types = getOptionsTypes(options);
	        options.name = getOptionsName(options, name);
	        checkWrapperAPI(options);
	        templateWrappersMap[options.name] = options;
	        return options;
	      } else if (angular.isString(options)) {
	        _x = {
	          template: options,
	          name: name
	        };
	        _again = true;
	        continue _function;
	      }
	    }
	  }
	
	  function getOptionsTypes(options) {
	    if (angular.isString(options.types)) {
	      return [options.types];
	    }
	    if (!angular.isDefined(options.types)) {
	      return [];
	    } else {
	      return options.types;
	    }
	  }
	
	  function getOptionsName(options, name) {
	    return options.name || name || options.types.join(" ") || defaultWrapperName;
	  }
	
	  function checkWrapperAPI(options) {
	    formlyUsabilityProvider.checkWrapper(options);
	    if (options.template) {
	      formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
	    }
	    if (!options.overwriteOk) {
	      checkOverwrite(options.name, templateWrappersMap, options, "templateWrappers");
	    } else {
	      delete options.overwriteOk;
	    }
	    checkWrapperTypes(options);
	  }
	
	  function checkWrapperTypes(options) {
	    var shouldThrow = !angular.isArray(options.types) || !options.types.every(angular.isString);
	    if (shouldThrow) {
	      throw getError("Attempted to create a template wrapper with types that is not a string or an array of strings");
	    }
	  }
	
	  function checkOverwrite(property, object, newValue, objectName) {
	    if (object.hasOwnProperty(property)) {
	      warn(["Attempting to overwrite " + property + " on " + objectName + " which is currently", "" + JSON.stringify(object[property]) + " with " + JSON.stringify(newValue), "To supress this warning, specify the property \"overwriteOk: true\""].join(" "));
	    }
	  }
	
	  function getWrapper(name) {
	    return templateWrappersMap[name || defaultWrapperName];
	  }
	
	  function getWrapperByType(type) {
	    /* jshint maxcomplexity:6 */
	    var wrappers = [];
	    for (var name in templateWrappersMap) {
	      if (templateWrappersMap.hasOwnProperty(name)) {
	        if (templateWrappersMap[name].types && templateWrappersMap[name].types.indexOf(type) !== -1) {
	          wrappers.push(templateWrappersMap[name]);
	        }
	      }
	    }
	    return wrappers;
	  }
	
	  function removeWrapperByName(name) {
	    var wrapper = templateWrappersMap[name];
	    delete templateWrappersMap[name];
	    return wrapper;
	  }
	
	  function removeWrappersForType(type) {
	    var wrappers = getWrapperByType(type);
	    if (!wrappers) {
	      return;
	    }
	    if (!angular.isArray(wrappers)) {
	      return removeWrapperByName(wrappers.name);
	    } else {
	      wrappers.forEach(function (wrapper) {
	        return removeWrapperByName(wrapper.name);
	      });
	      return wrappers;
	    }
	  }
	
	  function warn() {
	    if (!_this.disableWarnings) {
	      console.warn.apply(console, arguments);
	    }
	  }
	}
	formlyConfig.$inject = ["formlyUsabilityProvider", "formlyApiCheck"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = formlyValidationMessages;
	
	// @ngInject
	function formlyValidationMessages() {
	
	  var validationMessages = {
	    addTemplateOptionValueMessage: addTemplateOptionValueMessage,
	    addStringMessage: addStringMessage,
	    messages: {}
	  };
	
	  return validationMessages;
	
	  function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
	    validationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
	  }
	
	  function addStringMessage(name, string) {
	    validationMessages.messages[name] = function () {
	      return string;
	    };
	  }
	
	  function templateOptionValue(prop, prefix, suffix, alternate) {
	    return function getValidationMessage(viewValue, modelValue, scope) {
	      if (scope.options.templateOptions[prop]) {
	        return "" + prefix + " " + scope.options.templateOptions[prop] + " " + suffix;
	      } else {
	        return alternate;
	      }
	    };
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var utils = _interopRequire(__webpack_require__(18));
	
	module.exports = formlyUtil;
	
	// @ngInject
	function formlyUtil() {
	  return utils;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };
	
	module.exports = formlyWarn;
	
	// @ngInject
	function formlyWarn(formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
	  return function warn() {
	    if (!formlyConfig.disableWarnings) {
	      var args = Array.prototype.slice.call(arguments);
	      var warnInfoSlug = args.shift();
	      args.unshift("Formly Warning:");
	      args.push("" + formlyErrorAndWarningsUrlPrefix + "" + warnInfoSlug);
	      $log.warn.apply($log, _toConsumableArray(args));
	    }
	  };
	}
	formlyWarn.$inject = ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = formlyCustomValidation;
	
	// @ngInject
	function formlyCustomValidation(formlyUtil, $q) {
	  return {
	    restrict: "A",
	    require: "ngModel",
	    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
	      var opts = scope.options;
	      if (opts.validators) {
	        checkValidators(opts.validators);
	      }
	      opts.validation.messages = opts.validation.messages || {};
	      angular.forEach(opts.validation.messages, function (message, key) {
	        opts.validation.messages[key] = function () {
	          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	        };
	      });
	
	      var useNewValidatorsApi = ctrl.hasOwnProperty("$validators") && !attrs.hasOwnProperty("useParsers");
	      angular.forEach(opts.validators, function addValidatorToPipeline(validator, name) {
	        var message = validator.message;
	        if (message) {
	          opts.validation.messages[name] = function () {
	            return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
	          };
	        }
	        validator = angular.isObject(validator) ? validator.expression : validator;
	        var isPossiblyAsync = !angular.isString(validator);
	        if (useNewValidatorsApi) {
	          setupWithValidators();
	        } else {
	          setupWithParsers();
	        }
	
	        function setupWithValidators() {
	          var validatorCollection = isPossiblyAsync ? "$asyncValidators" : "$validators";
	          ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
	            var value = formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
	            if (isPossiblyAsync) {
	              return isPromiseLike(value) ? value : value ? $q.when(value) : $q.reject(value);
	            } else {
	              return value;
	            }
	          };
	        }
	
	        function setupWithParsers() {
	          var inFlightValidator = undefined;
	          ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
	            var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
	            if (isPromiseLike(isValid)) {
	              ctrl.$pending = ctrl.$pending || {};
	              ctrl.$pending[name] = true;
	              inFlightValidator = isValid;
	              isValid.then(function () {
	                if (inFlightValidator === isValid) {
	                  ctrl.$setValidity(name, true);
	                }
	              })["catch"](function () {
	                if (inFlightValidator === isValid) {
	                  ctrl.$setValidity(name, false);
	                }
	              })["finally"](function () {
	                if (Object.keys(ctrl.$pending).length === 1) {
	                  delete ctrl.$pending;
	                } else {
	                  delete ctrl.$pending[name];
	                }
	              });
	            } else {
	              ctrl.$setValidity(name, isValid);
	            }
	            return viewValue;
	          });
	        }
	      });
	    }
	  };
	
	  function isPromiseLike(obj) {
	    return obj && angular.isFunction(obj.then);
	  }
	
	  function checkValidators(validators) {
	    var allowedProperties = ["expression", "message"];
	    var validatorsWithExtraProps = {};
	    angular.forEach(validators, function (validator, name) {
	      if (angular.isString(validator)) {
	        return;
	      }
	      var extraProps = [];
	      angular.forEach(validator, function (v, key) {
	        if (allowedProperties.indexOf(key) === -1) {
	          extraProps.push(key);
	        }
	      });
	      if (extraProps.length) {
	        validatorsWithExtraProps[name] = extraProps;
	      }
	    });
	    if (Object.keys(validatorsWithExtraProps).length) {
	      throw new Error(["Validators are only allowed to be functions or objects that have " + allowedProperties.join(", ") + ".", "You provided some extra properties: " + JSON.stringify(validatorsWithExtraProps)].join(" "));
	    }
	  }
	}
	formlyCustomValidation.$inject = ["formlyUtil", "$q"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	module.exports = formlyField;
	
	/**
	 * @ngdoc directive
	 * @name formlyField
	 * @restrict AE
	 */
	// @ngInject
	function formlyField($http, $q, $compile, $templateCache, formlyConfig, formlyValidationMessages, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
	  var allTimes = {};
	  var iteration = 0;
	  return {
	    restrict: "AE",
	    transclude: true,
	    scope: {
	      options: "=",
	      model: "=",
	      formId: "@",
	      index: "=?",
	      fields: "=?",
	      formState: "=?",
	      form: "=?"
	    },
	    controller: /* @ngInject */["$scope", "$timeout", "$parse", "$controller", function FormlyFieldController($scope, $timeout, $parse, $controller) {
	      var opts = $scope.options;
	      var fieldType = opts.type && formlyConfig.getType(opts.type);
	      simplifyLife(opts);
	      mergeFieldOptionsWithTypeDefaults(opts, fieldType);
	      extendOptionsWithDefaults(opts, $scope.index);
	      checkApi(opts);
	      // set field id to link labels and fields
	      $scope.id = formlyUtil.getFieldId($scope.formId, opts, $scope.index);
	
	      // initalization
	      runExpressions();
	      setFormControl($scope, opts);
	      addModelWatcher($scope, opts);
	      addValidationMessages(opts);
	      // simplify things
	      // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
	      $scope.to = $scope.options.templateOptions;
	      invokeControllers($scope, opts, fieldType);
	
	      // function definitions
	      function runExpressions() {
	        // must run on next tick to make sure that the current value is correct.
	        $timeout(function runExpressionsOnNextTick() {
	          var field = $scope.options;
	          var currentValue = valueGetterSetter();
	          angular.forEach(field.expressionProperties, function runExpression(expression, prop) {
	            var setter = $parse(prop).assign;
	            var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue));
	            promise.then(function setFieldValue(value) {
	              setter(field, value);
	            });
	          });
	        });
	      }
	
	      function valueGetterSetter(newVal) {
	        if (!$scope.model || !$scope.options.key) {
	          return;
	        }
	        if (angular.isDefined(newVal)) {
	          $scope.model[$scope.options.key] = newVal;
	        }
	        return $scope.model[$scope.options.key];
	      }
	
	      function simplifyLife(options) {
	        // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
	        formlyUtil.reverseDeepMerge(options, {
	          data: {},
	          templateOptions: {},
	          validation: {}
	        });
	      }
	
	      function mergeFieldOptionsWithTypeDefaults(options, type) {
	        if (type) {
	          mergeOptions(options, type.defaultOptions);
	        }
	        var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
	        angular.forEach(properOrder, function (typeName) {
	          mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
	        });
	      }
	
	      function mergeOptions(options, extraOptions) {
	        if (extraOptions) {
	          if (angular.isFunction(extraOptions)) {
	            extraOptions = extraOptions(options);
	          }
	          formlyUtil.reverseDeepMerge(options, extraOptions);
	        }
	      }
	
	      function extendOptionsWithDefaults(options, index) {
	        var key = options.key || index || 0;
	        var initialValue = $scope.model && $scope.model[key];
	        angular.extend(options, {
	          // attach the key in case the formly-field directive is used directly
	          key: key,
	          value: valueGetterSetter,
	          runExpressions: runExpressions,
	          resetModel: resetModel,
	          updateInitialValue: updateInitialValue,
	          initialValue: initialValue
	        });
	      }
	
	      // initialization functions
	      function setFormControl(scope, options) {
	        if (options.noFormControl) {
	          return;
	        }
	        scope.$watch("form[\"" + scope.id + "\"]", function onFormControlChange(formControl) {
	          if (formControl) {
	            scope.fc = formControl; // shortcut for template authors
	            scope.options.formControl = formControl;
	            addShowMessagesWatcher(scope, options);
	          }
	        });
	      }
	
	      function addModelWatcher(scope, options) {
	        if (options.model) {
	          scope.$watch("options.model", runExpressions, true);
	        }
	      }
	
	      function addShowMessagesWatcher(scope, options) {
	        scope.$watch(function watchShowValidationChange() {
	          if (typeof scope.options.validation.show === "boolean") {
	            return scope.fc.$invalid && scope.options.validation.show;
	          } else {
	            var noTouchedButDirty = angular.isUndefined(scope.fc.$touched) && scope.fc.$dirty;
	            return scope.fc.$invalid && (scope.fc.$touched || noTouchedButDirty);
	          }
	        }, function onShowValidationChange(show) {
	          options.validation.errorExistsAndShouldBeVisible = show;
	          scope.showError = show; // shortcut for template authors
	        });
	      }
	
	      function resetModel() {
	        $scope.model[$scope.options.key] = $scope.options.initialValue;
	        if ($scope.options.formControl) {
	          $scope.options.formControl.$setViewValue($scope.model[$scope.options.key]);
	          $scope.options.formControl.$render();
	        }
	      }
	
	      function updateInitialValue() {
	        $scope.options.initialValue = $scope.model[$scope.options.key];
	      }
	
	      function addValidationMessages(options) {
	        options.validation.messages = options.validation.messages || {};
	        angular.forEach(formlyValidationMessages.messages, function createFunctionForMessage(expression, name) {
	          if (!options.validation.messages[name]) {
	            options.validation.messages[name] = function evaluateMessage(viewValue, modelValue, scope) {
	              return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
	            };
	          }
	        });
	      }
	
	      function invokeControllers(scope) {
	        var options = arguments[1] === undefined ? {} : arguments[1];
	        var type = arguments[2] === undefined ? {} : arguments[2];
	
	        angular.forEach([type.controller, options.controller], function (controller) {
	          if (controller) {
	            $controller(controller, { $scope: scope });
	          }
	        });
	      }
	    }],
	    link: function fieldLink(scope, el) {
	      if (!allTimes[scope.formId + iteration]) {
	        console.log("creating", scope.formId + iteration);
	      }
	      var times = allTimes[scope.formId + iteration] = allTimes[scope.formId + iteration] || {
	        fieldTimes: [],
	        start: now()
	      };
	      var time = {
	        start: now()
	      };
	      var type = scope.options.type && formlyConfig.getType(scope.options.type);
	      var args = arguments;
	      var thusly = this;
	      getFieldTemplate(scope.options).then(runManipulators(formlyConfig.templateManipulators.preWrapper)).then(transcludeInWrappers(scope.options)).then(runManipulators(formlyConfig.templateManipulators.postWrapper)).then(setElementTemplate).then(function () {
	        time.end = now();
	        time.time = time.end - time.start;
	        console.log(scope.index, "took", time.time);
	        times.fieldTimes.push(time);
	        if (times.fieldTimes.length === scope.fields.length) {
	          times.end = now();
	          console.log("all time", times.end - times.start);
	          iteration++;
	        }
	      })["catch"](function (error) {
	        formlyWarn("there-was-a-problem-setting-the-template-for-this-field", "There was a problem setting the template for this field ", scope.options, error);
	      });
	
	      function setElementTemplate(templateEl) {
	        el.html(asHtml(templateEl));
	        $compile(el.contents())(scope);
	        if (type && type.link) {
	          type.link.apply(thusly, args);
	        }
	        if (scope.options.link) {
	          scope.options.link.apply(thusly, args);
	        }
	      }
	
	      function runManipulators(manipulators) {
	        return function runManipulatorsOnTemplate(template) {
	          var chain = $q.when(template);
	          angular.forEach(manipulators, function (manipulator) {
	            chain = chain.then(function (template) {
	              return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
	                return angular.isString(newTemplate) ? newTemplate : asHtml(newTemplate);
	              });
	            });
	          });
	          return chain;
	        };
	      }
	    }
	  };
	
	  function asHtml(el) {
	    var wrapper = angular.element("<a></a>");
	    return wrapper.append(el).html();
	  }
	
	  function getFieldTemplate(options) {
	    var type = formlyConfig.getType(options.type, true, options);
	    var template = options.template || type && type.template;
	    var templateUrl = options.templateUrl || type && type.templateUrl;
	    if (!template && !templateUrl) {
	      throw formlyUsability.getFieldError("type-type-has-no-template", "Type '" + options.type + "' has not template. On element:", options);
	    }
	    return getTemplate(template || templateUrl, !template);
	  }
	
	  function getTemplate(template, isUrl) {
	    if (!isUrl) {
	      return $q.when(template);
	    } else {
	      var httpOptions = { cache: $templateCache };
	      return $http.get(template, httpOptions).then(function (response) {
	        return response.data;
	      })["catch"](function handleErrorGettingATemplate(error) {
	        formlyWarn("problem-loading-template-for-templateurl", "Problem loading template for " + template, error);
	      });
	    }
	  }
	
	  function transcludeInWrappers(options) {
	    var wrapper = getWrapperOption(options);
	
	    return function transcludeTemplate(template) {
	      if (!wrapper.length) {
	        return $q.when(template);
	      }
	
	      wrapper.forEach(function (wrapper) {
	        formlyUsability.checkWrapper(wrapper, options);
	        wrapper.validateOptions && wrapper.validateOptions(options);
	        runApiCheck(wrapper, options);
	      });
	      var promises = wrapper.map(function (w) {
	        return getTemplate(w.template || w.templateUrl, !w.template);
	      });
	      return $q.all(promises).then(function (wrappersTemplates) {
	        wrappersTemplates.forEach(function (wrapperTemplate, index) {
	          formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
	        });
	        wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
	        var totalWrapper = wrappersTemplates.shift();
	        wrappersTemplates.forEach(function (wrapperTemplate) {
	          totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
	        });
	        return doTransclusion(totalWrapper, template);
	      });
	    };
	  }
	
	  function doTransclusion(wrapper, template) {
	    var superWrapper = angular.element("<a></a>"); // this allows people not have to have a single root in wrappers
	    superWrapper.append(wrapper);
	    var transcludeEl = superWrapper.find("formly-transclude");
	    if (!transcludeEl.length) {
	      //try it using our custom find function
	      transcludeEl = formlyUtil.findByNodeName(superWrapper, "formly-transclude");
	    }
	    transcludeEl.replaceWith(template);
	    return superWrapper.html();
	  }
	
	  function getWrapperOption(options) {
	    var wrapper = options.wrapper;
	    // explicit null means no wrapper
	    if (wrapper === null) {
	      return [];
	    }
	
	    // nothing specified means use the default wrapper for the type
	    if (!wrapper) {
	      // get all wrappers that specify they apply to this type
	      wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
	    } else {
	      wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
	    }
	
	    // get all wrappers for that this type specified that it uses.
	    var type = formlyConfig.getType(options.type, true, options);
	    if (type && type.wrapper) {
	      var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
	      wrapper = wrapper.concat(typeWrappers);
	    }
	
	    // add the default wrapper last
	    var defaultWrapper = formlyConfig.getWrapper();
	    if (defaultWrapper) {
	      wrapper.push(defaultWrapper);
	    }
	    return wrapper;
	  }
	
	  function checkApi(options) {
	    formlyApiCheck["throw"](formlyApiCheck.formlyFieldOptions, options, {
	      prefix: "formly-field directive",
	      url: "formly-field-directive-validation-failed"
	    });
	    // validate with the type
	    var type = options.type && formlyConfig.getType(options.type);
	    if (type) {
	      if (type.validateOptions) {
	        type.validateOptions(options);
	      }
	      runApiCheck(type, options);
	    }
	  }
	
	  function runApiCheck(_ref, options) {
	    var apiCheck = _ref.apiCheck;
	    var apiCheckInstance = _ref.apiCheckInstance;
	    var apiCheckFunction = _ref.apiCheckFunction;
	    var apiCheckOptions = _ref.apiCheckOptions;
	
	    if (!apiCheck) {
	      return;
	    }
	    var instance = apiCheckInstance || formlyApiCheck;
	    var fn = apiCheckFunction || "warn";
	    var shape = instance.shape(apiCheck);
	    instance[fn](shape, options, apiCheckOptions || {
	      prefix: "formly-field " + name,
	      url: formlyApiCheck.config.output.docsBaseUrl + "formly-field-type-apicheck-failed"
	    });
	  }
	}
	formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "formlyConfig", "formlyValidationMessages", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];
	
	function arrayify(obj) {
	  if (obj && !angular.isArray(obj)) {
	    obj = [obj];
	  } else if (!obj) {
	    obj = [];
	  }
	  return obj;
	}
	
	function now() {
	  return window.performance.now();
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = formlyFocus;
	
	// @ngInject
	function formlyFocus($timeout, $document) {
	  /* jshint -W052 */
	  return {
	    restrict: "A",
	    link: function formlyFocusLink(scope, element, attrs) {
	      var previousEl = null;
	      var el = element[0];
	      var doc = $document[0];
	      attrs.$observe("formlyFocus", function respondToFocusExpressionChange(value) {
	        if (value === "true") {
	          $timeout(function setElementFocus() {
	            previousEl = doc.activeElement;
	            el.focus();
	          }, ~ ~attrs.focusWait);
	        } else if (value === "false") {
	          if (doc.activeElement === el) {
	            el.blur();
	            if (attrs.hasOwnProperty("refocus") && previousEl) {
	              previousEl.focus();
	            }
	          }
	        }
	      });
	    }
	  };
	}
	formlyFocus.$inject = ["$timeout", "$document"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };
	
	var _slice = Array.prototype.slice;
	
	var angular = _interopRequire(__webpack_require__(15));
	
	module.exports = formlyForm;
	
	/**
	 * @ngdoc directive
	 * @name formlyForm
	 * @restrict E
	 */
	// @ngInject
	function formlyForm(formlyUsability, $parse, formlyApiCheck, formlyConfig) {
	  var currentFormId = 1;
	  var optionsApi = [formlyApiCheck.shape({
	    formState: formlyApiCheck.object.optional,
	    resetModel: formlyApiCheck.func.optional,
	    updateInitialValue: formlyApiCheck.func.optional,
	    removeChromeAutoComplete: formlyApiCheck.bool.optional
	  }).strict.optional];
	  return {
	    restrict: "E",
	    template: function formlyFormGetTemplate(el, attrs) {
	      /* jshint -W033 */ // this because jshint is broken I guess...
	      var rootEl = attrs.rootEl || "ng-form";
	      var formId = "formly_" + currentFormId++;
	      var formName = formId;
	      var bindName = attrs.bindName;
	      if (bindName) {
	        if (angular.version.minor < 3) {
	          throw formlyUsability.getFormlyError("bind-name attribute on formly-form not allowed in > angular 1.3");
	        }
	        formName = "{{::'formly_' + " + bindName + "}}";
	      }
	      return "\n        <" + rootEl + " class=\"formly\"\n                 name=\"" + formName + "\"\n                 role=\"form\">\n          <div formly-field\n               ng-repeat=\"field in fields track by $index\"\n               ng-if=\"!field.hide\"\n               class=\"formly-field {{field.type ? 'formly-field-' + field.type : ''}}\"\n               options=\"field\"\n               model=\"field.model || model\"\n               fields=\"fields\"\n               form=\"" + formId + "\"\n               form-id=\"" + formId + "\"\n               form-state=\"options.formState\"\n               index=\"$index\">\n          </div>\n          <div ng-transclude></div>\n        </" + rootEl + ">\n      ";
	    },
	    replace: true,
	    transclude: true,
	    scope: {
	      fields: "=",
	      model: "=",
	      form: "=?",
	      options: "=?"
	    },
	    controller: /* @ngInject */["$scope", function FormlyFormController($scope) {
	      setupOptions();
	      $scope.model = $scope.model || {};
	      $scope.fields = $scope.fields || [];
	
	      angular.forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
	      angular.forEach($scope.fields, setupWatchers); // setup watchers for all fields
	
	      // watch the model and evaluate watch expressions that depend on it.
	      $scope.$watch("model", function onResultUpdate(newResult) {
	        angular.forEach($scope.fields, function runFieldExpressionProperties(field) {
	          /*jshint -W030 */
	          field.runExpressions && field.runExpressions(newResult);
	        });
	      }, true);
	
	      function setupOptions() {
	        formlyApiCheck["throw"](optionsApi, [$scope.options], { prefix: "formly-form options check" });
	        $scope.options = $scope.options || {};
	        $scope.options.formState = $scope.options.formState || {};
	
	        angular.extend($scope.options, {
	          updateInitialValue: updateInitialValue,
	          resetModel: resetModel
	        });
	      }
	
	      function updateInitialValue() {
	        angular.forEach($scope.fields, function (field) {
	          return field.updateInitialValue();
	        });
	      }
	
	      function resetModel() {
	        angular.forEach($scope.fields, function (field) {
	          return field.resetModel();
	        });
	      }
	
	      function attachKey(field, index) {
	        field.key = field.key || index || 0;
	      }
	
	      function setupWatchers(field, index) {
	        if (!angular.isDefined(field.watcher)) {
	          return;
	        }
	        var watchers = field.watcher;
	        if (!angular.isArray(watchers)) {
	          watchers = [watchers];
	        }
	        angular.forEach(watchers, function setupWatcher(watcher) {
	          if (!angular.isDefined(watcher.listener)) {
	            throw formlyUsability.getFieldError("all-field-watchers-must-have-a-listener", "All field watchers must have a listener", field);
	          }
	          var watchExpression = getWatchExpression(watcher, field, index);
	          var watchListener = getWatchListener(watcher, field, index);
	
	          var type = watcher.type || "$watch";
	          watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
	        });
	      }
	
	      function getWatchExpression(watcher, field, index) {
	        var watchExpression = watcher.expression || "model['" + field.key + "']";
	        if (angular.isFunction(watchExpression)) {
	          // wrap the field's watch expression so we can call it with the field as the first arg
	          // and the stop function as the last arg as a helper
	          var originalExpression = watchExpression;
	          watchExpression = function formlyWatchExpression() {
	            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	            return originalExpression.apply(undefined, _toConsumableArray(args));
	          };
	          watchExpression.displayName = "Formly Watch Expression for field for " + field.key;
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
	            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
	            return originalListener.apply(undefined, _toConsumableArray(args));
	          };
	          watchListener.displayName = "Formly Watch Listener for field for " + field.key;
	        }
	        return watchListener;
	      }
	
	      function modifyArgs(watcher, index) {
	        for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          originalArgs[_key - 2] = arguments[_key];
	        }
	
	        return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
	      }
	    }],
	    link: function link(scope, el, attrs) {
	      if (attrs.form) {
	        var formId = attrs.name;
	        $parse(attrs.form).assign(scope.$parent, scope[formId]);
	      }
	
	      // chrome autocomplete lameness
	      // see https://code.google.com/p/chromium/issues/detail?id=468153#c14
	      // ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
	      var global = formlyConfig.extras.removeChromeAutoComplete === true;
	      var offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
	      var onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
	      if (global && !offInstance || onInstance) {
	        var input = document.createElement("input");
	        input.setAttribute("autocomplete", "address-level4");
	        input.setAttribute("hidden", true);
	        el[0].appendChild(input);
	      }
	    }
	  };
	}
	formlyForm.$inject = ["formlyUsability", "$parse", "formlyApiCheck", "formlyConfig"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	module.exports = addFormlyNgModelAttrsManipulator;
	
	// @ngInject
	function addFormlyNgModelAttrsManipulator(formlyConfig) {
	  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
	    return;
	  }
	  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);
	
	  function ngModelAttrsManipulator(template, options, scope) {
	    /* jshint maxcomplexity:6 */
	    var el = document.createElement("div");
	    var data = options.data;
	    if (data.skipNgModelAttrsManipulator === true) {
	      return template;
	    }
	    el.innerHTML = template;
	    var modelNodes = el.querySelectorAll("[ng-model]");
	    if (!modelNodes || !modelNodes.length) {
	      return template;
	    }
	
	    addIfNotPresent(modelNodes, "id", scope.id);
	    addIfNotPresent(modelNodes, "name", scope.id);
	
	    addValidation();
	    addModelOptions();
	    addTemplateOptionsAttrs();
	
	    return el.innerHTML;
	
	    function addValidation() {
	      if (angular.isDefined(options.validators) || angular.isDefined(options.validation.messages)) {
	        addIfNotPresent(modelNodes, "formly-custom-validation", "");
	      }
	    }
	
	    function addModelOptions() {
	      if (angular.isDefined(options.modelOptions)) {
	        addIfNotPresent(modelNodes, "ng-model-options", "options.modelOptions");
	        if (options.modelOptions.getterSetter) {
	          angular.forEach(modelNodes, function (node) {
	            node.setAttribute("ng-model", "options.value");
	          });
	        }
	      }
	    }
	
	    function addTemplateOptionsAttrs() {
	      if (!options.templateOptions && !options.expressionProperties) {
	        // no need to run these if there are no templateOptions or expressionProperties
	        return;
	      }
	      var to = options.templateOptions || {};
	      var ep = options.expressionProperties || {};
	
	      var ngModelAttributes = getBuiltInAttributes();
	
	      // extend with the user's specifications winning
	      angular.extend(ngModelAttributes, options.ngModelAttrs);
	
	      // Feel free to make this more simple :-)
	      angular.forEach(ngModelAttributes, function (val, name) {
	        /* jshint maxcomplexity:14 */
	        var attrVal = undefined;
	        var attrName = undefined;
	        var ref = "options.templateOptions['" + name + "']";
	        var toVal = to[name];
	        var epVal = getEpValue(ep, name);
	
	        var inTo = angular.isDefined(toVal);
	        var inEp = angular.isDefined(epVal);
	        if (val.value) {
	          // I realize this looks backwards, but it's right, trust me...
	          attrName = val.value;
	          attrVal = name;
	        } else if (val.expression && inTo) {
	          attrName = val.expression;
	          if (angular.isString(to[name])) {
	            attrVal = "$eval(" + ref + ")";
	          } else if (angular.isFunction(to[name])) {
	            attrVal = "" + ref + "(model[options.key], options, this, $event)";
	          } else {
	            throw new Error("options.templateOptions." + name + " must be a string or function: " + JSON.stringify(options));
	          }
	        } else if (val.bound && inEp) {
	          attrName = val.bound;
	          attrVal = ref;
	        } else if ((val.attribute || val.boolean) && inEp) {
	          attrName = val.attribute || val.boolean;
	          attrVal = "{{" + ref + "}}";
	        } else if (val.attribute && inTo) {
	          attrName = val.attribute;
	          attrVal = toVal;
	        } else if (val.boolean) {
	          if (inTo && !inEp && toVal) {
	            attrName = val.boolean;
	            attrVal = true;
	          } else {}
	        } else if (val.bound && inTo) {
	          attrName = val.bound;
	          attrVal = ref;
	        }
	
	        if (angular.isDefined(attrName) && angular.isDefined(attrVal)) {
	          addIfNotPresent(modelNodes, attrName, attrVal);
	        }
	      });
	    }
	  }
	
	  // Utility functions
	  function getBuiltInAttributes() {
	    var ngModelAttributes = {
	      focus: {
	        attribute: "formly-focus"
	      }
	    };
	    var boundOnly = [];
	    var bothBooleanAndBound = ["required", "disabled"];
	    var bothAttributeAndBound = ["pattern", "minlength"];
	    var expressionOnly = ["change", "keydown", "keyup", "keypress", "click", "focus", "blur"];
	    var attributeOnly = ["placeholder", "min", "max", "tabindex", "type"];
	    if (formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound) {
	      bothAttributeAndBound.push("maxlength");
	    } else {
	      boundOnly.push("maxlength");
	    }
	
	    angular.forEach(boundOnly, function (item) {
	      ngModelAttributes[item] = { bound: "ng-" + item };
	    });
	
	    angular.forEach(bothBooleanAndBound, function (item) {
	      ngModelAttributes[item] = { boolean: item, bound: "ng-" + item };
	    });
	
	    angular.forEach(bothAttributeAndBound, function (item) {
	      ngModelAttributes[item] = { attribute: item, bound: "ng-" + item };
	    });
	
	    angular.forEach(expressionOnly, function (item) {
	      var propName = "on" + item.substr(0, 1).toUpperCase() + item.substr(1);
	      ngModelAttributes[propName] = { expression: "ng-" + item };
	    });
	
	    angular.forEach(attributeOnly, function (item) {
	      ngModelAttributes[item] = { attribute: item };
	    });
	    return ngModelAttributes;
	  }
	
	  function getEpValue(ep, name) {
	    return ep["templateOptions." + name] || ep["templateOptions['" + name + "']"] || ep["templateOptions[\"" + name + "\"]"];
	  }
	
	  function addIfNotPresent(nodes, attr, val) {
	    angular.forEach(nodes, function (node) {
	      if (!node.getAttribute(attr)) {
	        node.setAttribute(attr, val);
	      }
	    });
	  }
	}
	addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig"];

	// jshint -W035
	// empty to illustrate that a boolean will not be added via val.bound
	// if you want it added via val.bound, then put it in expressionProperties

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = addCustomTags;
	
	// @ngInject
	function addCustomTags($document) {
	  if ($document && $document.get) {
	    (function () {
	      //IE8 check ->
	      // http://stackoverflow.com/questions/10964966/detect-ie-version-prior-to-v9-in-javascript/10965203#10965203
	      var document = $document.get(0);
	      var div = document.createElement("div");
	      div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
	      var isIeLessThan9 = div.getElementsByTagName("i").length === 1;
	
	      if (isIeLessThan9) {
	        //add the custom elements that we need for formly
	        var customElements = ["formly-field", "formly-form", "formly-custom-validation", "formly-focus", "formly-transpose"];
	        angular.forEach(customElements, function (el) {
	          document.createElement(el);
	        });
	      }
	    })();
	  }
	}
	addCustomTags.$inject = ["$document"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	
	var angular = _interopRequire(__webpack_require__(17));
	
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var angular = _interopRequire(__webpack_require__(15));
	
	module.exports = { formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName };
	
	function formlyEval(scope, expression, $modelValue, $viewValue) {
	  if (angular.isFunction(expression)) {
	    return expression($viewValue, $modelValue, scope);
	  } else {
	    return scope.$eval(expression, { $viewValue: $viewValue, $modelValue: $modelValue });
	  }
	}
	
	function getFieldId(formId, options, index) {
	  var type = options.type;
	  if (!type && options.template) {
	    type = "template";
	  } else if (!type && options.templateUrl) {
	    type = "templateUrl";
	  }
	
	  return [formId, type, options.key, index].join("_");
	}
	
	function reverseDeepMerge(dest) {
	  angular.forEach(arguments, function (src, index) {
	    if (!index) {
	      return;
	    }
	    angular.forEach(src, function (val, prop) {
	      if (!angular.isDefined(dest[prop])) {
	        dest[prop] = angular.copy(val);
	      } else if (objAndSameType(dest[prop], val)) {
	        reverseDeepMerge(dest[prop], val);
	      }
	    });
	  });
	}
	
	function objAndSameType(obj1, obj2) {
	  return angular.isObject(obj1) && angular.isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
	}
	
	//recurse down a node tree to find a node with matching nodeName, for custom tags jQuery.find doesn't work in IE8
	function findByNodeName(el, nodeName) {
	  if (!el.prop) {
	    // not a jQuery or jqLite object -> wrap it
	    el = angular.element(el);
	  }
	
	  if (el.prop("nodeName") === nodeName.toUpperCase()) {
	    return el;
	  }
	
	  var c = el.children();
	  for (var i = 0; c && i < c.length; i++) {
	    var node = findByNodeName(c[i], nodeName);
	    if (node) {
	      return node;
	    }
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYTQ5ZTc0YTNlMWI0ZGVlMTIzMyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL2Zvcm1seUFwaUNoZWNrLmpzIiwid2VicGFjazovLy8uL290aGVyL2RvY3NCYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3Byb3ZpZGVycy9mb3JtbHlVc2FiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL2Zvcm1seUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2Zvcm1seVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZm9ybWx5V2Fybi5qcyIsIndlYnBhY2s6Ly8vLi9kaXJlY3RpdmVzL2Zvcm1seS1jdXN0b20tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kaXJlY3RpdmVzL2Zvcm1seS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXJlY3RpdmVzL2Zvcm1seS1mb2N1cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXJlY3RpdmVzL2Zvcm1seS1mb3JtLmpzIiwid2VicGFjazovLy8uL3J1bi9mb3JtbHlOZ01vZGVsQXR0cnNNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vZm9ybWx5Q3VzdG9tVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vLy4vb3RoZXIvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0tDdENPLEtBQUssdUNBQU0sQ0FBZ0I7O2tCQUNuQixLQUFLLEM7Ozs7Ozs7Ozs7S0NEYixPQUFPLHVDQUFNLEVBQWE7O0tBRTFCLGNBQWMsdUNBQU0sQ0FBNEI7O0tBQ2hELCtCQUErQix1Q0FBTSxDQUFxQjs7S0FDMUQsZUFBZSx1Q0FBTSxDQUE2Qjs7S0FDbEQsWUFBWSx1Q0FBTSxDQUEwQjs7S0FDNUMsd0JBQXdCLHVDQUFNLENBQXNDOztLQUNwRSxVQUFVLHVDQUFNLENBQXVCOztLQUN2QyxVQUFVLHVDQUFNLENBQXVCOztLQUV2QyxzQkFBc0IsdUNBQU0sQ0FBdUM7O0tBQ25FLFdBQVcsdUNBQU0sRUFBMkI7O0tBQzVDLFdBQVcsdUNBQU0sRUFBMkI7O0tBQzVDLFVBQVUsdUNBQU0sRUFBMEI7O0tBRTFDLDZCQUE2Qix1Q0FBTSxFQUFxQzs7S0FDeEUsZ0JBQWdCLHVDQUFNLEVBQXdCOztBQUVyRCxLQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7O2tCQUVmLFlBQVk7O0FBRTNCLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVsRCxTQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3BELFNBQVEsQ0FBQyxRQUFRLENBQUMs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QztBQUMxQyxTQUFJLElBQUksRUFBRTtBQUNSLGNBQU8sSUFBSSxDQUFDO01BQ2I7SUFDRiIsImZpbGUiOiJmb3JtbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFwaS1jaGVja1wiLCBcImFuZ3VsYXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmdGb3JtbHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVwiXSA9IGZhY3Rvcnkocm9vdFtcImFwaUNoZWNrXCJdLCByb290W1wiYW5ndWxhclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYmE0OWU3NGEzZTFiNGRlZTEyMzNcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5jb21tb24nO1xuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXItZml4JztcblxuaW1wb3J0IGZvcm1seUFwaUNoZWNrIGZyb20gJy4vcHJvdmlkZXJzL2Zvcm1seUFwaUNoZWNrJztcbmltcG9ydCBmb3JtbHlFcnJvckFuZFdhcm5pbmdzVXJsUHJlZml4IGZyb20gJy4vb3RoZXIvZG9jc0Jhc2VVcmwnO1xuaW1wb3J0IGZvcm1seVVzYWJpbGl0eSBmcm9tICcuL3Byb3ZpZGVycy9mb3JtbHlVc2FiaWxpdHknO1xuaW1wb3J0IGZvcm1seUNvbmZpZyBmcm9tICcuL3Byb3ZpZGVycy9mb3JtbHlDb25maWcnO1xuaW1wb3J0IGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcyBmcm9tICcuL3Byb3ZpZGVycy9mb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMnO1xuaW1wb3J0IGZvcm1seVV0aWwgZnJvbSAnLi9zZXJ2aWNlcy9mb3JtbHlVdGlsJztcbmltcG9ydCBmb3JtbHlXYXJuIGZyb20gJy4vc2VydmljZXMvZm9ybWx5V2Fybic7XG5cbmltcG9ydCBmb3JtbHlDdXN0b21WYWxpZGF0aW9uIGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtbHktY3VzdG9tLXZhbGlkYXRpb24nO1xuaW1wb3J0IGZvcm1seUZpZWxkIGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtbHktZmllbGQnO1xuaW1wb3J0IGZvcm1seUZvY3VzIGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtbHktZm9jdXMnO1xuaW1wb3J0IGZvcm1seUZvcm0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm1seS1mb3JtJztcblxuaW1wb3J0IGZvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yIGZyb20gJy4vcnVuL2Zvcm1seU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yJztcbmltcG9ydCBmb3JtbHlDdXN0b21UYWdzIGZyb20gJy4vcnVuL2Zvcm1seUN1c3RvbVRhZ3MnO1xuXG5jb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5JztcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGVOYW1lO1xuXG5jb25zdCBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5nTW9kdWxlTmFtZSwgW10pO1xuXG5uZ01vZHVsZS5jb25zdGFudCgnZm9ybWx5QXBpQ2hlY2snLCBmb3JtbHlBcGlDaGVjayk7XG5uZ01vZHVsZS5jb25zdGFudCgnZm9ybWx5RXJyb3JBbmRXYXJuaW5nc1VybFByZWZpeCcsIGZvcm1seUVycm9yQW5kV2FybmluZ3NVcmxQcmVmaXgpO1xubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seVZlcnNpb24nLCBWRVJTSU9OKTsgLy8gPC0tIHdlYnBhY2sgdmFyaWFibGVcblxubmdNb2R1bGUucHJvdmlkZXIoJ2Zvcm1seVVzYWJpbGl0eScsIGZvcm1seVVzYWJpbGl0eSk7XG5uZ01vZHVsZS5wcm92aWRlcignZm9ybWx5Q29uZmlnJywgZm9ybWx5Q29uZmlnKTtcblxubmdNb2R1bGUuZmFjdG9yeSgnZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzJywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKTtcbm5nTW9kdWxlLmZhY3RvcnkoJ2Zvcm1seVV0aWwnLCBmb3JtbHlVdGlsKTtcbm5nTW9kdWxlLmZhY3RvcnkoJ2Zvcm1seVdhcm4nLCBmb3JtbHlXYXJuKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdmb3JtbHlDdXN0b21WYWxpZGF0aW9uJywgZm9ybWx5Q3VzdG9tVmFsaWRhdGlvbik7XG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2Zvcm1seUZpZWxkJywgZm9ybWx5RmllbGQpO1xubmdNb2R1bGUuZGlyZWN0aXZlKCdmb3JtbHlGb2N1cycsIGZvcm1seUZvY3VzKTtcbm5nTW9kdWxlLmRpcmVjdGl2ZSgnZm9ybWx5Rm9ybScsIGZvcm1seUZvcm0pO1xuXG5uZ01vZHVsZS5ydW4oZm9ybWx5TmdNb2RlbEF0dHJzTWFuaXB1bGF0b3IpO1xubmdNb2R1bGUucnVuKGZvcm1seUN1c3RvbVRhZ3MpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguY29tbW9uLmpzXG4gKiovIiwiaW1wb3J0IGFwaUNoZWNrRmFjdG9yeSBmcm9tICdhcGktY2hlY2snO1xuXG5sZXQgYXBpQ2hlY2sgPSBhcGlDaGVja0ZhY3Rvcnkoe1xuICBvdXRwdXQ6IHtcbiAgICBwcmVmaXg6ICdhbmd1bGFyLWZvcm1seTonLFxuICAgIGRvY3NCYXNlVXJsOiByZXF1aXJlKCcuLi9vdGhlci9kb2NzQmFzZVVybCcpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzaGFwZVJlcXVpcmVkSWZOb3Qob3RoZXJQcm9wcywgcHJvcENoZWNrZXIpIHtcbiAgaWYgKCFhbmd1bGFyLmlzQXJyYXkob3RoZXJQcm9wcykpIHtcbiAgICBvdGhlclByb3BzID0gW290aGVyUHJvcHNdO1xuICB9XG4gIGNvbnN0IHR5cGUgPSBgc3BlY2lmaWVkIGlmIHRoZXNlIGFyZSBub3Qgc3BlY2lmaWVkOiBcXGAke290aGVyUHJvcHMuam9pbignLCAnKX1cXGAgKG90aGVyd2lzZSBpdCdzIG9wdGlvbmFsKWA7XG4gIGZ1bmN0aW9uIHNoYXBlUmVxdWlyZWRJZk5vdERlZmluaXRpb24ocHJvcCwgcHJvcE5hbWUsIGxvY2F0aW9uLCBvYmopIHtcbiAgICB2YXIgcHJvcEV4aXN0cyA9IG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpO1xuICAgIHZhciBvdGhlclByb3BzRXhpc3QgPSBvdGhlclByb3BzLnNvbWUoZnVuY3Rpb24gKG90aGVyUHJvcCkge1xuICAgICAgcmV0dXJuIG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkob3RoZXJQcm9wKTtcbiAgICB9KTtcbiAgICBpZiAoIW90aGVyUHJvcHNFeGlzdCAmJiAhcHJvcEV4aXN0cykge1xuICAgICAgcmV0dXJuIGFwaUNoZWNrLnV0aWxzLmdldEVycm9yKHByb3BOYW1lLCBsb2NhdGlvbiwgdHlwZSk7XG4gICAgfSBlbHNlIGlmIChwcm9wRXhpc3RzKSB7XG4gICAgICByZXR1cm4gcHJvcENoZWNrZXIocHJvcCwgcHJvcE5hbWUsIGxvY2F0aW9uLCBvYmopO1xuICAgIH1cbiAgfVxuICBzaGFwZVJlcXVpcmVkSWZOb3REZWZpbml0aW9uLnR5cGUgPSB0eXBlO1xuICByZXR1cm4gYXBpQ2hlY2sudXRpbHMuY2hlY2tlckhlbHBlcnMuc2V0dXBDaGVja2VyKHNoYXBlUmVxdWlyZWRJZk5vdERlZmluaXRpb24pO1xufVxuXG5sZXQgZm9ybWx5RXhwcmVzc2lvbiA9IGFwaUNoZWNrLm9uZU9mVHlwZShbYXBpQ2hlY2suc3RyaW5nLCBhcGlDaGVjay5mdW5jXSk7XG5sZXQgc3BlY2lmeVdyYXBwZXJUeXBlID0gYXBpQ2hlY2sub25lT2ZUeXBlKFtcbiAgYXBpQ2hlY2sub25lT2YoW251bGxdKSwgYXBpQ2hlY2sudHlwZU9yQXJyYXlPZihhcGlDaGVjay5zdHJpbmcpXG5dKTtcblxuY29uc3QgYXBpQ2hlY2tQcm9wZXJ0eSA9IGFwaUNoZWNrLm9iamVjdE9mKGFwaUNoZWNrLmZ1bmMpO1xuXG5jb25zdCBhcGlDaGVja0luc3RhbmNlUHJvcGVydHkgPSBhcGlDaGVjay5zaGFwZS5vbmx5SWYoJ2FwaUNoZWNrJywgYXBpQ2hlY2suZnVuYy53aXRoUHJvcGVydGllcyh7XG4gIHdhcm46IGFwaUNoZWNrLmZ1bmMsXG4gIHRocm93OiBhcGlDaGVjay5mdW5jLFxuICBzaGFwZTogYXBpQ2hlY2suZnVuY1xufSkpO1xuXG5jb25zdCBhcGlDaGVja0Z1bmN0aW9uUHJvcGVydHkgPSBhcGlDaGVjay5zaGFwZS5vbmx5SWYoJ2FwaUNoZWNrJywgYXBpQ2hlY2sub25lT2YoWyd0aHJvdycsICd3YXJuJ10pKTtcblxuY29uc3QgZm9ybWx5V3JhcHBlclR5cGUgPSBhcGlDaGVjay5zaGFwZSh7XG4gIG5hbWU6IHNoYXBlUmVxdWlyZWRJZk5vdCgndHlwZXMnLCBhcGlDaGVjay5zdHJpbmcpLm9wdGlvbmFsLFxuICB0ZW1wbGF0ZTogYXBpQ2hlY2suc2hhcGUuaWZOb3QoJ3RlbXBsYXRlVXJsJywgYXBpQ2hlY2suc3RyaW5nKS5vcHRpb25hbCxcbiAgdGVtcGxhdGVVcmw6IGFwaUNoZWNrLnNoYXBlLmlmTm90KCd0ZW1wbGF0ZScsIGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gIHR5cGVzOiBhcGlDaGVjay50eXBlT3JBcnJheU9mKGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gIG92ZXJ3cml0ZU9rOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsLFxuICB2YWxpZGF0ZU9wdGlvbnM6IGFwaUNoZWNrLmZ1bmMub3B0aW9uYWwsXG4gIGFwaUNoZWNrOiBhcGlDaGVja1Byb3BlcnR5Lm9wdGlvbmFsLFxuICBhcGlDaGVja0luc3RhbmNlOiBhcGlDaGVja0luc3RhbmNlUHJvcGVydHkub3B0aW9uYWwsXG4gIGFwaUNoZWNrRnVuY3Rpb246IGFwaUNoZWNrRnVuY3Rpb25Qcm9wZXJ0eS5vcHRpb25hbCxcbiAgYXBpQ2hlY2tPcHRpb25zOiBhcGlDaGVjay5vYmplY3Qub3B0aW9uYWxcbn0pLnN0cmljdDtcblxubGV0IGZpZWxkT3B0aW9uc0FwaVNoYXBlID0ge1xuICB0eXBlOiBhcGlDaGVjay5zaGFwZS5pZk5vdChbJ3RlbXBsYXRlJywgJ3RlbXBsYXRlVXJsJ10sIGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gIHRlbXBsYXRlOiBhcGlDaGVjay5zaGFwZS5pZk5vdChbJ3R5cGUnLCAndGVtcGxhdGVVcmwnXSwgYXBpQ2hlY2suc3RyaW5nKS5vcHRpb25hbCxcbiAgdGVtcGxhdGVVcmw6IGFwaUNoZWNrLnNoYXBlLmlmTm90KFsndHlwZScsICd0ZW1wbGF0ZSddLCBhcGlDaGVjay5zdHJpbmcpLm9wdGlvbmFsLFxuICBrZXk6IGFwaUNoZWNrLm9uZU9mVHlwZShbYXBpQ2hlY2suc3RyaW5nLCBhcGlDaGVjay5udW1iZXJdKSxcbiAgbW9kZWw6IGFwaUNoZWNrLm9iamVjdC5vcHRpb25hbCxcbiAgZXhwcmVzc2lvblByb3BlcnRpZXM6IGFwaUNoZWNrLm9iamVjdE9mKGFwaUNoZWNrLm9uZU9mVHlwZShbXG4gICAgZm9ybWx5RXhwcmVzc2lvbixcbiAgICBhcGlDaGVjay5zaGFwZSh7XG4gICAgICBleHByZXNzaW9uOiBmb3JtbHlFeHByZXNzaW9uLFxuICAgICAgbWVzc2FnZTogZm9ybWx5RXhwcmVzc2lvbi5vcHRpb25hbFxuICAgIH0pLnN0cmljdFxuICBdKSkub3B0aW9uYWwsXG4gIGRhdGE6IGFwaUNoZWNrLm9iamVjdC5vcHRpb25hbCxcbiAgdGVtcGxhdGVPcHRpb25zOiBhcGlDaGVjay5vYmplY3Qub3B0aW9uYWwsXG4gIHdyYXBwZXI6IHNwZWNpZnlXcmFwcGVyVHlwZS5vcHRpb25hbCxcbiAgbW9kZWxPcHRpb25zOiBhcGlDaGVjay5zaGFwZSh7XG4gICAgdXBkYXRlT246IGFwaUNoZWNrLnN0cmluZy5vcHRpb25hbCxcbiAgICBkZWJvdW5jZTogYXBpQ2hlY2sub25lT2ZUeXBlKFtcbiAgICAgIGFwaUNoZWNrLm9iamVjdCwgYXBpQ2hlY2suc3RyaW5nXG4gICAgXSkub3B0aW9uYWwsXG4gICAgYWxsb3dJbnZhbGlkOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsLFxuICAgIGdldHRlclNldHRlcjogYXBpQ2hlY2suYm9vbC5vcHRpb25hbCxcbiAgICB0aW1lem9uZTogYXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsXG4gIH0pLm9wdGlvbmFsLFxuICB3YXRjaGVyOiBhcGlDaGVjay50eXBlT3JBcnJheU9mKFxuICAgIGFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIGV4cHJlc3Npb246IGZvcm1seUV4cHJlc3Npb24ub3B0aW9uYWwsXG4gICAgICBsaXN0ZW5lcjogZm9ybWx5RXhwcmVzc2lvblxuICAgIH0pXG4gICkub3B0aW9uYWwsXG4gIHZhbGlkYXRvcnM6IGFwaUNoZWNrLm9iamVjdE9mKGFwaUNoZWNrLm9uZU9mVHlwZShbXG4gICAgZm9ybWx5RXhwcmVzc2lvbiwgYXBpQ2hlY2suc2hhcGUoe1xuICAgICAgZXhwcmVzc2lvbjogZm9ybWx5RXhwcmVzc2lvbixcbiAgICAgIG1lc3NhZ2U6IGZvcm1seUV4cHJlc3Npb24ub3B0aW9uYWxcbiAgICB9KS5zdHJpY3RcbiAgXSkpLm9wdGlvbmFsLFxuICBub0Zvcm1Db250cm9sOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsLFxuICBoaWRlOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsLFxuICBuZ01vZGVsQXR0cnM6IGFwaUNoZWNrLm9iamVjdE9mKGFwaUNoZWNrLnNoYXBlKHtcbiAgICBleHByZXNzaW9uOiBhcGlDaGVjay5zaGFwZS5pZk5vdChbJ3ZhbHVlJywgJ2F0dHJpYnV0ZScsICdib3VuZCddLCBhcGlDaGVjay5hbnkpLm9wdGlvbmFsLFxuICAgIHZhbHVlOiBhcGlDaGVjay5zaGFwZS5pZk5vdCgnZXhwcmVzc2lvbicsIGFwaUNoZWNrLmFueSkub3B0aW9uYWwsXG4gICAgYXR0cmlidXRlOiBhcGlDaGVjay5zaGFwZS5pZk5vdCgnZXhwcmVzc2lvbicsIGFwaUNoZWNrLmFueSkub3B0aW9uYWwsXG4gICAgYm91bmQ6IGFwaUNoZWNrLnNoYXBlLmlmTm90KCdleHByZXNzaW9uJywgYXBpQ2hlY2suYW55KS5vcHRpb25hbFxuICB9KS5zdHJpY3QpLm9wdGlvbmFsLFxuICBvcHRpb25zVHlwZXM6IGFwaUNoZWNrLnR5cGVPckFycmF5T2YoYXBpQ2hlY2suc3RyaW5nKS5vcHRpb25hbCxcbiAgbGluazogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgY29udHJvbGxlcjogYXBpQ2hlY2sub25lT2ZUeXBlKFtcbiAgICBhcGlDaGVjay5zdHJpbmcsIGFwaUNoZWNrLmZ1bmMsIGFwaUNoZWNrLmFycmF5XG4gIF0pLm9wdGlvbmFsLFxuICB2YWxpZGF0aW9uOiBhcGlDaGVjay5zaGFwZSh7XG4gICAgc2hvdzogYXBpQ2hlY2sub25lT2ZUeXBlKFtcbiAgICAgIGFwaUNoZWNrLmJvb2wsIGFwaUNoZWNrLm9uZU9mKFtudWxsXSlcbiAgICBdKS5vcHRpb25hbCxcbiAgICBtZXNzYWdlczogYXBpQ2hlY2sub2JqZWN0T2YoZm9ybWx5RXhwcmVzc2lvbikub3B0aW9uYWwsXG4gICAgZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGU6IGFwaUNoZWNrLmJvb2wub3B0aW9uYWxcbiAgfSkub3B0aW9uYWwsXG4gIGZvcm1Db250cm9sOiBhcGlDaGVjay5vYmplY3Qub3B0aW9uYWwsXG4gIHZhbHVlOiBhcGlDaGVjay5mdW5jLm9wdGlvbmFsLFxuICBydW5FeHByZXNzaW9uczogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgcmVzZXRNb2RlbDogYXBpQ2hlY2suZnVuYy5vcHRpb25hbCxcbiAgdXBkYXRlSW5pdGlhbFZhbHVlOiBhcGlDaGVjay5mdW5jLm9wdGlvbmFsLFxuICBpbml0aWFsVmFsdWU6IGFwaUNoZWNrLmFueS5vcHRpb25hbFxufTtcblxubGV0IGZvcm1seUZpZWxkT3B0aW9ucyA9IGFwaUNoZWNrLnNoYXBlKGZpZWxkT3B0aW9uc0FwaVNoYXBlKS5zdHJpY3Q7XG5cbmxldCB0eXBlT3B0aW9uc0RlZmF1bHRPcHRpb25zID0gYW5ndWxhci5jb3B5KGZpZWxkT3B0aW9uc0FwaVNoYXBlKTtcbnR5cGVPcHRpb25zRGVmYXVsdE9wdGlvbnMua2V5ID0gYXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsO1xuXG5sZXQgZm9ybWx5VHlwZU9wdGlvbnMgPSBhcGlDaGVjay5zaGFwZSh7XG4gIG5hbWU6IGFwaUNoZWNrLnN0cmluZyxcbiAgdGVtcGxhdGU6IGFwaUNoZWNrLnNoYXBlLmlmTm90KCd0ZW1wbGF0ZVVybCcsIGFwaUNoZWNrLnN0cmluZykub3B0aW9uYWwsXG4gIHRlbXBsYXRlVXJsOiBhcGlDaGVjay5zaGFwZS5pZk5vdCgndGVtcGxhdGUnLCBhcGlDaGVjay5zdHJpbmcpLm9wdGlvbmFsLFxuICBjb250cm9sbGVyOiBhcGlDaGVjay5vbmVPZlR5cGUoW1xuICAgIGFwaUNoZWNrLmZ1bmMsIGFwaUNoZWNrLnN0cmluZywgYXBpQ2hlY2suYXJyYXlcbiAgXSkub3B0aW9uYWwsXG4gIGxpbms6IGFwaUNoZWNrLmZ1bmMub3B0aW9uYWwsXG4gIGRlZmF1bHRPcHRpb25zOiBhcGlDaGVjay5vbmVPZlR5cGUoW1xuICAgIGFwaUNoZWNrLmZ1bmMsIGFwaUNoZWNrLnNoYXBlKHR5cGVPcHRpb25zRGVmYXVsdE9wdGlvbnMpXG4gIF0pLm9wdGlvbmFsLFxuICBleHRlbmRzOiBhcGlDaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gIHdyYXBwZXI6IHNwZWNpZnlXcmFwcGVyVHlwZS5vcHRpb25hbCxcbiAgZGF0YTogYXBpQ2hlY2sub2JqZWN0Lm9wdGlvbmFsLFxuICB2YWxpZGF0ZU9wdGlvbnM6IGFwaUNoZWNrLmZ1bmMub3B0aW9uYWwsXG4gIGFwaUNoZWNrOiBhcGlDaGVja1Byb3BlcnR5Lm9wdGlvbmFsLFxuICBhcGlDaGVja0luc3RhbmNlOiBhcGlDaGVja0luc3RhbmNlUHJvcGVydHkub3B0aW9uYWwsXG4gIGFwaUNoZWNrRnVuY3Rpb246IGFwaUNoZWNrRnVuY3Rpb25Qcm9wZXJ0eS5vcHRpb25hbCxcbiAgYXBpQ2hlY2tPcHRpb25zOiBhcGlDaGVjay5vYmplY3Qub3B0aW9uYWwsXG4gIG92ZXJ3cml0ZU9rOiBhcGlDaGVjay5ib29sLm9wdGlvbmFsXG59KS5zdHJpY3Q7XG5cbmFuZ3VsYXIuZXh0ZW5kKGFwaUNoZWNrLCB7XG4gIGZvcm1seVR5cGVPcHRpb25zLCBmb3JtbHlGaWVsZE9wdGlvbnMsIGZvcm1seUV4cHJlc3Npb24sIGZvcm1seVdyYXBwZXJUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpQ2hlY2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9wcm92aWRlcnMvZm9ybWx5QXBpQ2hlY2suanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBgaHR0cHM6Ly9naXRodWIuY29tL2Zvcm1seS1qcy9hbmd1bGFyLWZvcm1seS9ibG9iLyR7VkVSU0lPTn0vb3RoZXIvRVJST1JTX0FORF9XQVJOSU5HUy5tZCNgO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vb3RoZXIvZG9jc0Jhc2VVcmwuanNcbiAqKi8iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyLWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1seVVzYWJpbGl0eTtcblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlVc2FiaWxpdHkoZm9ybWx5QXBpQ2hlY2ssIGZvcm1seUVycm9yQW5kV2FybmluZ3NVcmxQcmVmaXgpIHtcbiAgYW5ndWxhci5leHRlbmQodGhpcywge1xuICAgIGdldEZvcm1seUVycm9yOiBnZXRGb3JtbHlFcnJvcixcbiAgICBnZXRGaWVsZEVycm9yOiBnZXRGaWVsZEVycm9yLFxuICAgIGNoZWNrV3JhcHBlcjogY2hlY2tXcmFwcGVyLFxuICAgIGNoZWNrV3JhcHBlclRlbXBsYXRlOiBjaGVja1dyYXBwZXJUZW1wbGF0ZSxcbiAgICAkZ2V0OiAoKSA9PiB0aGlzXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldEZpZWxkRXJyb3IoZXJyb3JJbmZvU2x1ZywgbWVzc2FnZSwgZmllbGQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgIGZpZWxkID0gbWVzc2FnZTtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvckluZm9TbHVnO1xuICAgICAgZXJyb3JJbmZvU2x1ZyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoZ2V0RXJyb3JNZXNzYWdlKGVycm9ySW5mb1NsdWcsIG1lc3NhZ2UpICsgYCBGaWVsZCBkZWZpbml0aW9uOiAke2FuZ3VsYXIudG9Kc29uKGZpZWxkKX1gKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1seUVycm9yKGVycm9ySW5mb1NsdWcsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvckluZm9TbHVnO1xuICAgICAgZXJyb3JJbmZvU2x1ZyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoZ2V0RXJyb3JNZXNzYWdlKGVycm9ySW5mb1NsdWcsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvckluZm9TbHVnLCBtZXNzYWdlKSB7XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGlmIChlcnJvckluZm9TbHVnICE9PSBudWxsKSB7XG4gICAgICB1cmwgPSBgJHtmb3JtbHlFcnJvckFuZFdhcm5pbmdzVXJsUHJlZml4fSR7ZXJyb3JJbmZvU2x1Z31gO1xuICAgIH1cbiAgICByZXR1cm4gYEZvcm1seSBFcnJvcjogJHttZXNzYWdlfS4gJHt1cmx9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrV3JhcHBlcih3cmFwcGVyKSB7XG4gICAgZm9ybWx5QXBpQ2hlY2sudGhyb3coZm9ybWx5QXBpQ2hlY2suZm9ybWx5V3JhcHBlclR5cGUsIHdyYXBwZXIsIHtcbiAgICAgIHByZWZpeDogJ2Zvcm1seUNvbmZpZy5zZXRXcmFwcGVyJyxcbiAgICAgIHVybFN1ZmZpeDogJ3NldHdyYXBwZXItdmFsaWRhdGlvbi1mYWlsZWQnXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1dyYXBwZXJUZW1wbGF0ZSh0ZW1wbGF0ZSwgYWRkaXRpb25hbEluZm8pIHtcbiAgICB2YXIgZm9ybWx5VHJhbnNjbHVkZSA9ICc8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT4nO1xuICAgIGlmICh0ZW1wbGF0ZS5pbmRleE9mKGZvcm1seVRyYW5zY2x1ZGUpID09PSAtMSkge1xuICAgICAgdGhyb3cgZ2V0Rm9ybWx5RXJyb3IoXG4gICAgICAgIGBUZW1wbGF0ZSB3cmFwcGVyIHRlbXBsYXRlcyBtdXN0IHVzZSBcIiR7Zm9ybWx5VHJhbnNjbHVkZX1cIiBzb21ld2hlcmUgaW4gdGhlbS4gYCArXG4gICAgICAgIGBUaGlzIG9uZSBkb2VzIG5vdCBoYXZlIFwiPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XCIgaW4gaXQ6ICR7dGVtcGxhdGV9YCArICdcXG4nICtcbiAgICAgICAgYEFkZGl0aW9uYWwgaW5mb3JtYXRpb246ICR7SlNPTi5zdHJpbmdpZnkoYWRkaXRpb25hbEluZm8pfWBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9wcm92aWRlcnMvZm9ybWx5VXNhYmlsaXR5LmpzXG4gKiovIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhci1maXgnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL290aGVyL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWx5Q29uZmlnO1xuXG4vLyBAbmdJbmplY3RcbmZ1bmN0aW9uIGZvcm1seUNvbmZpZyhmb3JtbHlVc2FiaWxpdHlQcm92aWRlciwgZm9ybWx5QXBpQ2hlY2spIHtcblxuICB2YXIgdHlwZU1hcCA9IHt9O1xuICB2YXIgdGVtcGxhdGVXcmFwcGVyc01hcCA9IHt9O1xuICB2YXIgZGVmYXVsdFdyYXBwZXJOYW1lID0gJ2RlZmF1bHQnO1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB2YXIgZ2V0RXJyb3IgPSBmb3JtbHlVc2FiaWxpdHlQcm92aWRlci5nZXRGb3JtbHlFcnJvcjtcblxuICBhbmd1bGFyLmV4dGVuZCh0aGlzLCB7XG4gICAgc2V0VHlwZSxcbiAgICBnZXRUeXBlLFxuICAgIHNldFdyYXBwZXIsXG4gICAgZ2V0V3JhcHBlcixcbiAgICBnZXRXcmFwcGVyQnlUeXBlLFxuICAgIHJlbW92ZVdyYXBwZXJCeU5hbWUsXG4gICAgcmVtb3ZlV3JhcHBlcnNGb3JUeXBlLFxuICAgIGRpc2FibGVXYXJuaW5nczogZmFsc2UsXG4gICAgZXh0cmFzOiB7XG4gICAgICBkaXNhYmxlTmdNb2RlbEF0dHJzTWFuaXB1bGF0b3I6IGZhbHNlLFxuICAgICAgbmdNb2RlbEF0dHJzTWFuaXB1bGF0b3JQcmVmZXJVbmJvdW5kOiBmYWxzZSxcbiAgICAgIHJlbW92ZUNocm9tZUF1dG9Db21wbGV0ZTogZmFsc2VcbiAgICB9LFxuICAgIHRlbXBsYXRlTWFuaXB1bGF0b3JzOiB7XG4gICAgICBwcmVXcmFwcGVyOiBbXSxcbiAgICAgIHBvc3RXcmFwcGVyOiBbXVxuICAgIH0sXG4gICAgJGdldDogKCkgPT4gdGhpc1xuICB9KTtcblxuICBmdW5jdGlvbiBzZXRUeXBlKG9wdGlvbnMpIHtcbiAgICBpZiAoYW5ndWxhci5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2gob3B0aW9ucywgc2V0VHlwZSk7XG4gICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICBjaGVja1R5cGUob3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5leHRlbmRzKSB7XG4gICAgICAgIGV4dGVuZFR5cGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgdHlwZU1hcFtvcHRpb25zLm5hbWVdID0gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0RXJyb3IoYFlvdSBtdXN0IHByb3ZpZGUgYW4gb2JqZWN0IG9yIGFycmF5IGZvciBzZXRUeXBlLiBZb3UgcHJvdmlkZWQ6ICR7SlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKX1gKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1R5cGUob3B0aW9ucykge1xuICAgIGZvcm1seUFwaUNoZWNrLnRocm93KGZvcm1seUFwaUNoZWNrLmZvcm1seVR5cGVPcHRpb25zLCBvcHRpb25zLCB7XG4gICAgICBwcmVmaXg6ICdmb3JtbHlDb25maWcuc2V0VHlwZScsXG4gICAgICB1cmw6ICdzZXR0eXBlLXZhbGlkYXRpb24tZmFpbGVkJ1xuICAgIH0pO1xuICAgIGlmICghb3B0aW9ucy5vdmVyd3JpdGVPaykge1xuICAgICAgY2hlY2tPdmVyd3JpdGUob3B0aW9ucy5uYW1lLCB0eXBlTWFwLCBvcHRpb25zLCAndHlwZXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5vdmVyd3JpdGVPayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmRUeXBlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgZXh0ZW5kc1R5cGUgPSBnZXRUeXBlKG9wdGlvbnMuZXh0ZW5kcywgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgZXh0ZW5kVHlwZUNvbnRyb2xsZXJGdW5jdGlvbihvcHRpb25zLCBleHRlbmRzVHlwZSk7XG4gICAgZXh0ZW5kVHlwZUxpbmtGdW5jdGlvbihvcHRpb25zLCBleHRlbmRzVHlwZSk7XG4gICAgZXh0ZW5kVHlwZVZhbGlkYXRlT3B0aW9uc0Z1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKTtcbiAgICBleHRlbmRUeXBlRGVmYXVsdE9wdGlvbnMob3B0aW9ucywgZXh0ZW5kc1R5cGUpO1xuICAgIHV0aWxzLnJldmVyc2VEZWVwTWVyZ2Uob3B0aW9ucywgZXh0ZW5kc1R5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kVHlwZUNvbnRyb2xsZXJGdW5jdGlvbihvcHRpb25zLCBleHRlbmRzVHlwZSkge1xuICAgIGNvbnN0IGV4dGVuZHNDdHJsID0gZXh0ZW5kc1R5cGUuY29udHJvbGxlcjtcbiAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKGV4dGVuZHNDdHJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zQ3RybCA9IG9wdGlvbnMuY29udHJvbGxlcjtcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQob3B0aW9uc0N0cmwpKSB7XG4gICAgICBvcHRpb25zLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkY29udHJvbGxlcikge1xuICAgICAgICAkY29udHJvbGxlcihleHRlbmRzQ3RybCwgeyRzY29wZX0pO1xuICAgICAgICAkY29udHJvbGxlcihvcHRpb25zQ3RybCwgeyRzY29wZX0pO1xuICAgICAgfTtcbiAgICAgIG9wdGlvbnMuY29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGNvbnRyb2xsZXInXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5jb250cm9sbGVyID0gZXh0ZW5kc0N0cmw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kVHlwZUxpbmtGdW5jdGlvbihvcHRpb25zLCBleHRlbmRzVHlwZSkge1xuICAgIGNvbnN0IGV4dGVuZHNGbiA9IGV4dGVuZHNUeXBlLmxpbms7XG4gICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChleHRlbmRzRm4pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnNGbiA9IG9wdGlvbnMubGluaztcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQob3B0aW9uc0ZuKSkge1xuICAgICAgb3B0aW9ucy5saW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBleHRlbmRzRm4oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgb3B0aW9uc0ZuKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLmxpbmsgPSBleHRlbmRzRm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kVHlwZVZhbGlkYXRlT3B0aW9uc0Z1bmN0aW9uKG9wdGlvbnMsIGV4dGVuZHNUeXBlKSB7XG4gICAgY29uc3QgZXh0ZW5kc0ZuID0gZXh0ZW5kc1R5cGUudmFsaWRhdGVPcHRpb25zO1xuICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQoZXh0ZW5kc0ZuKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zRm4gPSBvcHRpb25zLnZhbGlkYXRlT3B0aW9ucztcbiAgICBjb25zdCBvcmlnaW5hbERlZmF1bHRPcHRpb25zID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucztcbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQob3B0aW9uc0ZuKSkge1xuICAgICAgb3B0aW9ucy52YWxpZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zRm4ob3B0aW9ucyk7XG4gICAgICAgIGxldCBtZXJnZWRPcHRpb25zID0gYW5ndWxhci5jb3B5KG9wdGlvbnMpO1xuICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSBvcmlnaW5hbERlZmF1bHRPcHRpb25zO1xuICAgICAgICBpZiAoZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKGRlZmF1bHRPcHRpb25zKSkge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyhtZXJnZWRPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXRpbHMucmV2ZXJzZURlZXBNZXJnZShtZXJnZWRPcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5kc0ZuKG1lcmdlZE9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy52YWxpZGF0ZU9wdGlvbnMgPSBleHRlbmRzRm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kVHlwZURlZmF1bHRPcHRpb25zKG9wdGlvbnMsIGV4dGVuZHNUeXBlKSB7XG4gICAgY29uc3QgZXh0ZW5kc0RPID0gZXh0ZW5kc1R5cGUuZGVmYXVsdE9wdGlvbnM7XG4gICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChleHRlbmRzRE8pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnNETyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnM7XG4gICAgY29uc3Qgb3B0aW9uc0RPSXNGbiA9IGFuZ3VsYXIuaXNGdW5jdGlvbihvcHRpb25zRE8pO1xuICAgIGNvbnN0IGV4dGVuZHNET0lzRm4gPSBhbmd1bGFyLmlzRnVuY3Rpb24oZXh0ZW5kc0RPKTtcbiAgICBpZiAoZXh0ZW5kc0RPSXNGbikge1xuICAgICAgb3B0aW9ucy5kZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5kc0RlZmF1bHRPcHRpb25zID0gZXh0ZW5kc0RPKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBtZXJnZWREZWZhdWx0T3B0aW9ucyA9IHt9O1xuICAgICAgICB1dGlscy5yZXZlcnNlRGVlcE1lcmdlKG1lcmdlZERlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBleHRlbmRzRGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICBsZXQgZXh0ZW5kZXJPcHRpb25zRGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zRE87XG4gICAgICAgIGlmIChvcHRpb25zRE9Jc0ZuKSB7XG4gICAgICAgICAgZXh0ZW5kZXJPcHRpb25zRGVmYXVsdE9wdGlvbnMgPSBleHRlbmRlck9wdGlvbnNEZWZhdWx0T3B0aW9ucyhtZXJnZWREZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdXRpbHMucmV2ZXJzZURlZXBNZXJnZShleHRlbmRzRGVmYXVsdE9wdGlvbnMsIGV4dGVuZGVyT3B0aW9uc0RlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZHNEZWZhdWx0T3B0aW9ucztcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zRE9Jc0ZuKSB7XG4gICAgICBvcHRpb25zLmRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBsZXQgbmV3RGVmYXVsdE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdXRpbHMucmV2ZXJzZURlZXBNZXJnZShuZXdEZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgZXh0ZW5kc0RPKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNETyhuZXdEZWZhdWx0T3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGUobmFtZSwgdGhyb3dFcnJvciwgZXJyb3JDb250ZXh0KSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IHR5cGVNYXBbbmFtZV07XG4gICAgaWYgKCF0eXBlICYmIHRocm93RXJyb3IgPT09IHRydWUpIHtcbiAgICAgIHRocm93IGdldEVycm9yKFxuICAgICAgICBgVGhlcmUgaXMgbm8gdHlwZSBieSB0aGUgbmFtZSBvZiBcIiR7bmFtZX1cIjogJHtKU09OLnN0cmluZ2lmeShlcnJvckNvbnRleHQpfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXIob3B0aW9ucywgbmFtZSkge1xuICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLm1hcCh3cmFwcGVyT3B0aW9ucyA9PiBzZXRXcmFwcGVyKHdyYXBwZXJPcHRpb25zKSk7XG4gICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLnR5cGVzID0gZ2V0T3B0aW9uc1R5cGVzKG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5uYW1lID0gZ2V0T3B0aW9uc05hbWUob3B0aW9ucywgbmFtZSk7XG4gICAgICBjaGVja1dyYXBwZXJBUEkob3B0aW9ucyk7XG4gICAgICB0ZW1wbGF0ZVdyYXBwZXJzTWFwW29wdGlvbnMubmFtZV0gPSBvcHRpb25zO1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChhbmd1bGFyLmlzU3RyaW5nKG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gc2V0V3JhcHBlcih7XG4gICAgICAgIHRlbXBsYXRlOiBvcHRpb25zLFxuICAgICAgICBuYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zVHlwZXMob3B0aW9ucykge1xuICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKG9wdGlvbnMudHlwZXMpKSB7XG4gICAgICByZXR1cm4gW29wdGlvbnMudHlwZXNdO1xuICAgIH1cbiAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudHlwZXMpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnR5cGVzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbnNOYW1lKG9wdGlvbnMsIG5hbWUpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5uYW1lIHx8IG5hbWUgfHwgb3B0aW9ucy50eXBlcy5qb2luKCcgJykgfHwgZGVmYXVsdFdyYXBwZXJOYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXcmFwcGVyQVBJKG9wdGlvbnMpIHtcbiAgICBmb3JtbHlVc2FiaWxpdHlQcm92aWRlci5jaGVja1dyYXBwZXIob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIGZvcm1seVVzYWJpbGl0eVByb3ZpZGVyLmNoZWNrV3JhcHBlclRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub3ZlcndyaXRlT2spIHtcbiAgICAgIGNoZWNrT3ZlcndyaXRlKG9wdGlvbnMubmFtZSwgdGVtcGxhdGVXcmFwcGVyc01hcCwgb3B0aW9ucywgJ3RlbXBsYXRlV3JhcHBlcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIG9wdGlvbnMub3ZlcndyaXRlT2s7XG4gICAgfVxuICAgIGNoZWNrV3JhcHBlclR5cGVzKG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXcmFwcGVyVHlwZXMob3B0aW9ucykge1xuICAgIGxldCBzaG91bGRUaHJvdyA9ICFhbmd1bGFyLmlzQXJyYXkob3B0aW9ucy50eXBlcykgfHwgIW9wdGlvbnMudHlwZXMuZXZlcnkoYW5ndWxhci5pc1N0cmluZyk7XG4gICAgaWYgKHNob3VsZFRocm93KSB7XG4gICAgICB0aHJvdyBnZXRFcnJvcihgQXR0ZW1wdGVkIHRvIGNyZWF0ZSBhIHRlbXBsYXRlIHdyYXBwZXIgd2l0aCB0eXBlcyB0aGF0IGlzIG5vdCBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzYCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tPdmVyd3JpdGUocHJvcGVydHksIG9iamVjdCwgbmV3VmFsdWUsIG9iamVjdE5hbWUpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgd2FybihbXG4gICAgICAgIGBBdHRlbXB0aW5nIHRvIG92ZXJ3cml0ZSAke3Byb3BlcnR5fSBvbiAke29iamVjdE5hbWV9IHdoaWNoIGlzIGN1cnJlbnRseWAsXG4gICAgICAgIGAke0pTT04uc3RyaW5naWZ5KG9iamVjdFtwcm9wZXJ0eV0pfSB3aXRoICR7SlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpfWAsXG4gICAgICAgIGBUbyBzdXByZXNzIHRoaXMgd2FybmluZywgc3BlY2lmeSB0aGUgcHJvcGVydHkgXCJvdmVyd3JpdGVPazogdHJ1ZVwiYFxuICAgICAgXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdyYXBwZXIobmFtZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZVdyYXBwZXJzTWFwW25hbWUgfHwgZGVmYXVsdFdyYXBwZXJOYW1lXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdyYXBwZXJCeVR5cGUodHlwZSkge1xuICAgIC8qIGpzaGludCBtYXhjb21wbGV4aXR5OjYgKi9cbiAgICB2YXIgd3JhcHBlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRlbXBsYXRlV3JhcHBlcnNNYXApIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVdyYXBwZXJzTWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVdyYXBwZXJzTWFwW25hbWVdLnR5cGVzICYmIHRlbXBsYXRlV3JhcHBlcnNNYXBbbmFtZV0udHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICB3cmFwcGVycy5wdXNoKHRlbXBsYXRlV3JhcHBlcnNNYXBbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVycztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVdyYXBwZXJCeU5hbWUobmFtZSkge1xuICAgIHZhciB3cmFwcGVyID0gdGVtcGxhdGVXcmFwcGVyc01hcFtuYW1lXTtcbiAgICBkZWxldGUgdGVtcGxhdGVXcmFwcGVyc01hcFtuYW1lXTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVdyYXBwZXJzRm9yVHlwZSh0eXBlKSB7XG4gICAgdmFyIHdyYXBwZXJzID0gZ2V0V3JhcHBlckJ5VHlwZSh0eXBlKTtcbiAgICBpZiAoIXdyYXBwZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghYW5ndWxhci5pc0FycmF5KHdyYXBwZXJzKSkge1xuICAgICAgcmV0dXJuIHJlbW92ZVdyYXBwZXJCeU5hbWUod3JhcHBlcnMubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHJlbW92ZVdyYXBwZXJCeU5hbWUod3JhcHBlci5uYW1lKSk7XG4gICAgICByZXR1cm4gd3JhcHBlcnM7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiB3YXJuKCkge1xuICAgIGlmICghX3RoaXMuZGlzYWJsZVdhcm5pbmdzKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3Byb3ZpZGVycy9mb3JtbHlDb25maWcuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXM7XG5cblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMoKSB7XG5cbiAgdmFyIHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcbiAgICBhZGRUZW1wbGF0ZU9wdGlvblZhbHVlTWVzc2FnZSxcbiAgICBhZGRTdHJpbmdNZXNzYWdlLFxuICAgIG1lc3NhZ2VzOiB7fVxuICB9O1xuXG4gIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZXM7XG5cbiAgZnVuY3Rpb24gYWRkVGVtcGxhdGVPcHRpb25WYWx1ZU1lc3NhZ2UobmFtZSwgcHJvcCwgcHJlZml4LCBzdWZmaXgsIGFsdGVybmF0ZSkge1xuICAgIHZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlc1tuYW1lXSA9IHRlbXBsYXRlT3B0aW9uVmFsdWUocHJvcCwgcHJlZml4LCBzdWZmaXgsIGFsdGVybmF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHJpbmdNZXNzYWdlKG5hbWUsIHN0cmluZykge1xuICAgIHZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlc1tuYW1lXSA9ICgpID0+IHN0cmluZztcbiAgfVxuXG5cbiAgZnVuY3Rpb24gdGVtcGxhdGVPcHRpb25WYWx1ZShwcm9wLCBwcmVmaXgsIHN1ZmZpeCwgYWx0ZXJuYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSwgc2NvcGUpIHtcbiAgICAgIGlmIChzY29wZS5vcHRpb25zLnRlbXBsYXRlT3B0aW9uc1twcm9wXSkge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fSAke3Njb3BlLm9wdGlvbnMudGVtcGxhdGVPcHRpb25zW3Byb3BdfSAke3N1ZmZpeH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFsdGVybmF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9wcm92aWRlcnMvZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmpzXG4gKiovIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL290aGVyL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWx5VXRpbDtcblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlVdGlsKCkge1xuICByZXR1cm4gdXRpbHM7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9zZXJ2aWNlcy9mb3JtbHlVdGlsLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZm9ybWx5V2FybjtcblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlXYXJuKGZvcm1seUNvbmZpZywgZm9ybWx5RXJyb3JBbmRXYXJuaW5nc1VybFByZWZpeCwgJGxvZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2FybigpIHtcbiAgICBpZiAoIWZvcm1seUNvbmZpZy5kaXNhYmxlV2FybmluZ3MpIHtcbiAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHZhciB3YXJuSW5mb1NsdWcgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICBhcmdzLnVuc2hpZnQoJ0Zvcm1seSBXYXJuaW5nOicpO1xuICAgICAgYXJncy5wdXNoKGAke2Zvcm1seUVycm9yQW5kV2FybmluZ3NVcmxQcmVmaXh9JHt3YXJuSW5mb1NsdWd9YCk7XG4gICAgICAkbG9nLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vc2VydmljZXMvZm9ybWx5V2Fybi5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZvcm1seUN1c3RvbVZhbGlkYXRpb247XG5cbi8vIEBuZ0luamVjdFxuZnVuY3Rpb24gZm9ybWx5Q3VzdG9tVmFsaWRhdGlvbihmb3JtbHlVdGlsLCAkcSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGZ1bmN0aW9uIGZvcm1seUN1c3RvbVZhbGlkYXRpb25MaW5rKHNjb3BlLCBlbCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSBzY29wZS5vcHRpb25zO1xuICAgICAgaWYgKG9wdHMudmFsaWRhdG9ycykge1xuICAgICAgICBjaGVja1ZhbGlkYXRvcnMob3B0cy52YWxpZGF0b3JzKTtcbiAgICAgIH1cbiAgICAgIG9wdHMudmFsaWRhdGlvbi5tZXNzYWdlcyA9IG9wdHMudmFsaWRhdGlvbi5tZXNzYWdlcyB8fCB7fTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChvcHRzLnZhbGlkYXRpb24ubWVzc2FnZXMsIChtZXNzYWdlLCBrZXkpID0+IHtcbiAgICAgICAgb3B0cy52YWxpZGF0aW9uLm1lc3NhZ2VzW2tleV0gPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1seVV0aWwuZm9ybWx5RXZhbChzY29wZSwgbWVzc2FnZSwgY3RybC4kbW9kZWxWYWx1ZSwgY3RybC4kdmlld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIHZhciB1c2VOZXdWYWxpZGF0b3JzQXBpID0gY3RybC5oYXNPd25Qcm9wZXJ0eSgnJHZhbGlkYXRvcnMnKSAmJiAhYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VzZVBhcnNlcnMnKTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChvcHRzLnZhbGlkYXRvcnMsIGZ1bmN0aW9uIGFkZFZhbGlkYXRvclRvUGlwZWxpbmUodmFsaWRhdG9yLCBuYW1lKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdmFsaWRhdG9yLm1lc3NhZ2U7XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgb3B0cy52YWxpZGF0aW9uLm1lc3NhZ2VzW25hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1seVV0aWwuZm9ybWx5RXZhbChzY29wZSwgbWVzc2FnZSwgY3RybC4kbW9kZWxWYWx1ZSwgY3RybC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhbGlkYXRvciA9IGFuZ3VsYXIuaXNPYmplY3QodmFsaWRhdG9yKSA/IHZhbGlkYXRvci5leHByZXNzaW9uIDogdmFsaWRhdG9yO1xuICAgICAgICB2YXIgaXNQb3NzaWJseUFzeW5jID0gIWFuZ3VsYXIuaXNTdHJpbmcodmFsaWRhdG9yKTtcbiAgICAgICAgaWYgKHVzZU5ld1ZhbGlkYXRvcnNBcGkpIHtcbiAgICAgICAgICBzZXR1cFdpdGhWYWxpZGF0b3JzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dXBXaXRoUGFyc2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBXaXRoVmFsaWRhdG9ycygpIHtcbiAgICAgICAgICB2YXIgdmFsaWRhdG9yQ29sbGVjdGlvbiA9IGlzUG9zc2libHlBc3luYyA/ICckYXN5bmNWYWxpZGF0b3JzJyA6ICckdmFsaWRhdG9ycyc7XG4gICAgICAgICAgY3RybFt2YWxpZGF0b3JDb2xsZWN0aW9uXVtuYW1lXSA9IGZ1bmN0aW9uIGV2YWxWYWxpZGl0eShtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGZvcm1seVV0aWwuZm9ybWx5RXZhbChzY29wZSwgdmFsaWRhdG9yLCBtb2RlbFZhbHVlLCB2aWV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzUG9zc2libHlBc3luYykge1xuICAgICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlTGlrZSh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gJHEud2hlbih2YWx1ZSkgOiAkcS5yZWplY3QodmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cFdpdGhQYXJzZXJzKCkge1xuICAgICAgICAgIGxldCBpbkZsaWdodFZhbGlkYXRvcjtcbiAgICAgICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gZXZhbFZhbGlkaXR5T2ZQYXJzZXIodmlld1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaXNWYWxpZCA9IGZvcm1seVV0aWwuZm9ybWx5RXZhbChzY29wZSwgdmFsaWRhdG9yLCBjdHJsLiRtb2RlbFZhbHVlLCB2aWV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZUxpa2UoaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgY3RybC4kcGVuZGluZyA9IGN0cmwuJHBlbmRpbmcgfHwge307XG4gICAgICAgICAgICAgIGN0cmwuJHBlbmRpbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICBpbkZsaWdodFZhbGlkYXRvciA9IGlzVmFsaWQ7XG4gICAgICAgICAgICAgIGlzVmFsaWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluRmxpZ2h0VmFsaWRhdG9yID09PSBpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5GbGlnaHRWYWxpZGF0b3IgPT09IGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KG5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdHJsLiRwZW5kaW5nKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLiRwZW5kaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC4kcGVuZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkobmFtZSwgaXNWYWxpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmlld1ZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNQcm9taXNlTGlrZShvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIGFuZ3VsYXIuaXNGdW5jdGlvbihvYmoudGhlbik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgIHZhciBhbGxvd2VkUHJvcGVydGllcyA9IFsnZXhwcmVzc2lvbicsICdtZXNzYWdlJ107XG4gICAgdmFyIHZhbGlkYXRvcnNXaXRoRXh0cmFQcm9wcyA9IHt9O1xuICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWxpZGF0b3JzLCAodmFsaWRhdG9yLCBuYW1lKSA9PiB7XG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyh2YWxpZGF0b3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBleHRyYVByb3BzID0gW107XG4gICAgICBhbmd1bGFyLmZvckVhY2godmFsaWRhdG9yLCAodiwga2V5KSA9PiB7XG4gICAgICAgIGlmIChhbGxvd2VkUHJvcGVydGllcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgZXh0cmFQcm9wcy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGV4dHJhUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHZhbGlkYXRvcnNXaXRoRXh0cmFQcm9wc1tuYW1lXSA9IGV4dHJhUHJvcHM7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRvcnNXaXRoRXh0cmFQcm9wcykubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoW1xuICAgICAgICBgVmFsaWRhdG9ycyBhcmUgb25seSBhbGxvd2VkIHRvIGJlIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRoYXQgaGF2ZSAke2FsbG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LmAsXG4gICAgICAgIGBZb3UgcHJvdmlkZWQgc29tZSBleHRyYSBwcm9wZXJ0aWVzOiAke0pTT04uc3RyaW5naWZ5KHZhbGlkYXRvcnNXaXRoRXh0cmFQcm9wcyl9YFxuICAgICAgXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vZGlyZWN0aXZlcy9mb3JtbHktY3VzdG9tLXZhbGlkYXRpb24uanNcbiAqKi8iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyLWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1seUZpZWxkO1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIGZvcm1seUZpZWxkXG4gKiBAcmVzdHJpY3QgQUVcbiAqL1xuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlGaWVsZCgkaHR0cCwgJHEsICRjb21waWxlLCAkdGVtcGxhdGVDYWNoZSwgZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMsIGZvcm1seUFwaUNoZWNrLFxuICAgICAgICAgICAgICAgICAgICAgZm9ybWx5VXRpbCwgZm9ybWx5VXNhYmlsaXR5LCBmb3JtbHlXYXJuKSB7XG4gIGNvbnN0IGFsbFRpbWVzID0ge307XG4gIGxldCBpdGVyYXRpb24gPSAwO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIG9wdGlvbnM6ICc9JyxcbiAgICAgIG1vZGVsOiAnPScsXG4gICAgICBmb3JtSWQ6ICdAJyxcbiAgICAgIGluZGV4OiAnPT8nLFxuICAgICAgZmllbGRzOiAnPT8nLFxuICAgICAgZm9ybVN0YXRlOiAnPT8nLFxuICAgICAgZm9ybTogJz0/J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogLyogQG5nSW5qZWN0ICovIGZ1bmN0aW9uIEZvcm1seUZpZWxkQ29udHJvbGxlcigkc2NvcGUsICR0aW1lb3V0LCAkcGFyc2UsICRjb250cm9sbGVyKSB7XG4gICAgICB2YXIgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xuICAgICAgdmFyIGZpZWxkVHlwZSA9IG9wdHMudHlwZSAmJiBmb3JtbHlDb25maWcuZ2V0VHlwZShvcHRzLnR5cGUpO1xuICAgICAgc2ltcGxpZnlMaWZlKG9wdHMpO1xuICAgICAgbWVyZ2VGaWVsZE9wdGlvbnNXaXRoVHlwZURlZmF1bHRzKG9wdHMsIGZpZWxkVHlwZSk7XG4gICAgICBleHRlbmRPcHRpb25zV2l0aERlZmF1bHRzKG9wdHMsICRzY29wZS5pbmRleCk7XG4gICAgICBjaGVja0FwaShvcHRzKTtcbiAgICAgIC8vIHNldCBmaWVsZCBpZCB0byBsaW5rIGxhYmVscyBhbmQgZmllbGRzXG4gICAgICAkc2NvcGUuaWQgPSBmb3JtbHlVdGlsLmdldEZpZWxkSWQoJHNjb3BlLmZvcm1JZCwgb3B0cywgJHNjb3BlLmluZGV4KTtcblxuICAgICAgLy8gaW5pdGFsaXphdGlvblxuICAgICAgcnVuRXhwcmVzc2lvbnMoKTtcbiAgICAgIHNldEZvcm1Db250cm9sKCRzY29wZSwgb3B0cyk7XG4gICAgICBhZGRNb2RlbFdhdGNoZXIoJHNjb3BlLCBvcHRzKTtcbiAgICAgIGFkZFZhbGlkYXRpb25NZXNzYWdlcyhvcHRzKTtcbiAgICAgIC8vIHNpbXBsaWZ5IHRoaW5nc1xuICAgICAgLy8gY3JlYXRlICRzY29wZS50byBzbyB0ZW1wbGF0ZSBhdXRob3JzIGNhbiByZWZlcmVuY2UgdG8gaW5zdGVhZCBvZiAkc2NvcGUub3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnNcbiAgICAgICRzY29wZS50byA9ICRzY29wZS5vcHRpb25zLnRlbXBsYXRlT3B0aW9ucztcbiAgICAgIGludm9rZUNvbnRyb2xsZXJzKCRzY29wZSwgb3B0cywgZmllbGRUeXBlKTtcblxuICAgICAgLy8gZnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICAgIGZ1bmN0aW9uIHJ1bkV4cHJlc3Npb25zKCkge1xuICAgICAgICAvLyBtdXN0IHJ1biBvbiBuZXh0IHRpY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGN1cnJlbnQgdmFsdWUgaXMgY29ycmVjdC5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gcnVuRXhwcmVzc2lvbnNPbk5leHRUaWNrKCkge1xuICAgICAgICAgIHZhciBmaWVsZCA9ICRzY29wZS5vcHRpb25zO1xuICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB2YWx1ZUdldHRlclNldHRlcigpO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChmaWVsZC5leHByZXNzaW9uUHJvcGVydGllcywgZnVuY3Rpb24gcnVuRXhwcmVzc2lvbihleHByZXNzaW9uLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgc2V0dGVyID0gJHBhcnNlKHByb3ApLmFzc2lnbjtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gJHEud2hlbihmb3JtbHlVdGlsLmZvcm1seUV2YWwoJHNjb3BlLCBleHByZXNzaW9uLCBjdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiBzZXRGaWVsZFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHNldHRlcihmaWVsZCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB2YWx1ZUdldHRlclNldHRlcihuZXdWYWwpIHtcbiAgICAgICAgaWYgKCEkc2NvcGUubW9kZWwgfHwgISRzY29wZS5vcHRpb25zLmtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQobmV3VmFsKSkge1xuICAgICAgICAgICRzY29wZS5tb2RlbFskc2NvcGUub3B0aW9ucy5rZXldID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkc2NvcGUubW9kZWxbJHNjb3BlLm9wdGlvbnMua2V5XTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2ltcGxpZnlMaWZlKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gYWRkIGEgZmV3IGVtcHR5IG9iamVjdHMgKGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdCkgc28geW91IGRvbid0IGhhdmUgdG8gdW5kZWZpbmVkIGNoZWNrIGV2ZXJ5d2hlcmVcbiAgICAgICAgZm9ybWx5VXRpbC5yZXZlcnNlRGVlcE1lcmdlKG9wdGlvbnMsIHtcbiAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHt9LFxuICAgICAgICAgIHZhbGlkYXRpb246IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtZXJnZUZpZWxkT3B0aW9uc1dpdGhUeXBlRGVmYXVsdHMob3B0aW9ucywgdHlwZSkge1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIG1lcmdlT3B0aW9ucyhvcHRpb25zLCB0eXBlLmRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcGVyT3JkZXIgPSBhcnJheWlmeShvcHRpb25zLm9wdGlvbnNUeXBlcykucmV2ZXJzZSgpOyAvLyBzbyB0aGUgcmlnaHQgdGhpbmdzIGFyZSBvdmVycmlkZGVuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChwcm9wZXJPcmRlciwgdHlwZU5hbWUgPT4ge1xuICAgICAgICAgIG1lcmdlT3B0aW9ucyhvcHRpb25zLCBmb3JtbHlDb25maWcuZ2V0VHlwZSh0eXBlTmFtZSwgdHJ1ZSwgb3B0aW9ucykuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICBpZiAoZXh0cmFPcHRpb25zKSB7XG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihleHRyYU9wdGlvbnMpKSB7XG4gICAgICAgICAgICBleHRyYU9wdGlvbnMgPSBleHRyYU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1seVV0aWwucmV2ZXJzZURlZXBNZXJnZShvcHRpb25zLCBleHRyYU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGV4dGVuZE9wdGlvbnNXaXRoRGVmYXVsdHMob3B0aW9ucywgaW5kZXgpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gb3B0aW9ucy5rZXkgfHwgaW5kZXggfHwgMDtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gJHNjb3BlLm1vZGVsICYmICRzY29wZS5tb2RlbFtrZXldO1xuICAgICAgICBhbmd1bGFyLmV4dGVuZChvcHRpb25zLCB7XG4gICAgICAgICAgLy8gYXR0YWNoIHRoZSBrZXkgaW4gY2FzZSB0aGUgZm9ybWx5LWZpZWxkIGRpcmVjdGl2ZSBpcyB1c2VkIGRpcmVjdGx5XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZUdldHRlclNldHRlcixcbiAgICAgICAgICBydW5FeHByZXNzaW9ucyxcbiAgICAgICAgICByZXNldE1vZGVsLFxuICAgICAgICAgIHVwZGF0ZUluaXRpYWxWYWx1ZSxcbiAgICAgICAgICBpbml0aWFsVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICAgICAgZnVuY3Rpb24gc2V0Rm9ybUNvbnRyb2woc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9Gb3JtQ29udHJvbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY29wZS4kd2F0Y2goJ2Zvcm1bXCInICsgc2NvcGUuaWQgKyAnXCJdJywgZnVuY3Rpb24gb25Gb3JtQ29udHJvbENoYW5nZShmb3JtQ29udHJvbCkge1xuICAgICAgICAgIGlmIChmb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgc2NvcGUuZmMgPSBmb3JtQ29udHJvbDsgLy8gc2hvcnRjdXQgZm9yIHRlbXBsYXRlIGF1dGhvcnNcbiAgICAgICAgICAgIHNjb3BlLm9wdGlvbnMuZm9ybUNvbnRyb2wgPSBmb3JtQ29udHJvbDtcbiAgICAgICAgICAgIGFkZFNob3dNZXNzYWdlc1dhdGNoZXIoc2NvcGUsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZE1vZGVsV2F0Y2hlcihzY29wZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5tb2RlbCkge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaCgnb3B0aW9ucy5tb2RlbCcsIHJ1bkV4cHJlc3Npb25zLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRTaG93TWVzc2FnZXNXYXRjaGVyKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHNjb3BlLiR3YXRjaChmdW5jdGlvbiB3YXRjaFNob3dWYWxpZGF0aW9uQ2hhbmdlKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2NvcGUub3B0aW9ucy52YWxpZGF0aW9uLnNob3cgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmZjLiRpbnZhbGlkICYmIHNjb3BlLm9wdGlvbnMudmFsaWRhdGlvbi5zaG93O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9Ub3VjaGVkQnV0RGlydHkgPSAoYW5ndWxhci5pc1VuZGVmaW5lZChzY29wZS5mYy4kdG91Y2hlZCkgJiYgc2NvcGUuZmMuJGRpcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5mYy4kaW52YWxpZCAmJiAoc2NvcGUuZmMuJHRvdWNoZWQgfHwgbm9Ub3VjaGVkQnV0RGlydHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gb25TaG93VmFsaWRhdGlvbkNoYW5nZShzaG93KSB7XG4gICAgICAgICAgb3B0aW9ucy52YWxpZGF0aW9uLmVycm9yRXhpc3RzQW5kU2hvdWxkQmVWaXNpYmxlID0gc2hvdztcbiAgICAgICAgICBzY29wZS5zaG93RXJyb3IgPSBzaG93OyAvLyBzaG9ydGN1dCBmb3IgdGVtcGxhdGUgYXV0aG9yc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzZXRNb2RlbCgpIHtcbiAgICAgICAgJHNjb3BlLm1vZGVsWyRzY29wZS5vcHRpb25zLmtleV0gPSAkc2NvcGUub3B0aW9ucy5pbml0aWFsVmFsdWU7XG4gICAgICAgIGlmICgkc2NvcGUub3B0aW9ucy5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICRzY29wZS5vcHRpb25zLmZvcm1Db250cm9sLiRzZXRWaWV3VmFsdWUoJHNjb3BlLm1vZGVsWyRzY29wZS5vcHRpb25zLmtleV0pO1xuICAgICAgICAgICRzY29wZS5vcHRpb25zLmZvcm1Db250cm9sLiRyZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVJbml0aWFsVmFsdWUoKSB7XG4gICAgICAgICRzY29wZS5vcHRpb25zLmluaXRpYWxWYWx1ZSA9ICRzY29wZS5tb2RlbFskc2NvcGUub3B0aW9ucy5rZXldO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRWYWxpZGF0aW9uTWVzc2FnZXMob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXMgPSBvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXMgfHwge307XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMubWVzc2FnZXMsIGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uRm9yTWVzc2FnZShleHByZXNzaW9uLCBuYW1lKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIG9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1tuYW1lXSA9IGZ1bmN0aW9uIGV2YWx1YXRlTWVzc2FnZSh2aWV3VmFsdWUsIG1vZGVsVmFsdWUsIHNjb3BlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmb3JtbHlVdGlsLmZvcm1seUV2YWwoc2NvcGUsIGV4cHJlc3Npb24sIG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGludm9rZUNvbnRyb2xsZXJzKHNjb3BlLCBvcHRpb25zID0ge30sIHR5cGUgPSB7fSkge1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goW3R5cGUuY29udHJvbGxlciwgb3B0aW9ucy5jb250cm9sbGVyXSwgY29udHJvbGxlciA9PiB7XG4gICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICRjb250cm9sbGVyKGNvbnRyb2xsZXIsIHskc2NvcGU6IHNjb3BlfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uIGZpZWxkTGluayhzY29wZSwgZWwpIHtcbiAgICAgIGlmICghYWxsVGltZXNbc2NvcGUuZm9ybUlkICsgaXRlcmF0aW9uXSkge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcnLCBzY29wZS5mb3JtSWQgKyBpdGVyYXRpb24pO1xuICAgICAgfVxuICAgICAgY29uc3QgdGltZXMgPSBhbGxUaW1lc1tzY29wZS5mb3JtSWQgKyBpdGVyYXRpb25dID0gYWxsVGltZXNbc2NvcGUuZm9ybUlkICsgaXRlcmF0aW9uXSB8fCB7XG4gICAgICAgICAgZmllbGRUaW1lczogW10sXG4gICAgICAgICAgc3RhcnQ6IG5vdygpXG4gICAgICAgIH07XG4gICAgICBjb25zdCB0aW1lID0ge1xuICAgICAgICBzdGFydDogbm93KClcbiAgICAgIH07XG4gICAgICB2YXIgdHlwZSA9IHNjb3BlLm9wdGlvbnMudHlwZSAmJiBmb3JtbHlDb25maWcuZ2V0VHlwZShzY29wZS5vcHRpb25zLnR5cGUpO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgdGh1c2x5ID0gdGhpcztcbiAgICAgIGdldEZpZWxkVGVtcGxhdGUoc2NvcGUub3B0aW9ucylcbiAgICAgICAgLnRoZW4ocnVuTWFuaXB1bGF0b3JzKGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyKSlcbiAgICAgICAgLnRoZW4odHJhbnNjbHVkZUluV3JhcHBlcnMoc2NvcGUub3B0aW9ucykpXG4gICAgICAgIC50aGVuKHJ1bk1hbmlwdWxhdG9ycyhmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIpKVxuICAgICAgICAudGhlbihzZXRFbGVtZW50VGVtcGxhdGUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aW1lLmVuZCA9IG5vdygpO1xuICAgICAgICAgIHRpbWUudGltZSA9IHRpbWUuZW5kIC0gdGltZS5zdGFydDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzY29wZS5pbmRleCwgJ3Rvb2snLCB0aW1lLnRpbWUpO1xuICAgICAgICAgIHRpbWVzLmZpZWxkVGltZXMucHVzaCh0aW1lKTtcbiAgICAgICAgICBpZiAodGltZXMuZmllbGRUaW1lcy5sZW5ndGggPT09IHNjb3BlLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRpbWVzLmVuZCA9IG5vdygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCB0aW1lJywgdGltZXMuZW5kIC0gdGltZXMuc3RhcnQpO1xuICAgICAgICAgICAgaXRlcmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGZvcm1seVdhcm4oXG4gICAgICAgICAgICAndGhlcmUtd2FzLWEtcHJvYmxlbS1zZXR0aW5nLXRoZS10ZW1wbGF0ZS1mb3ItdGhpcy1maWVsZCcsXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGEgcHJvYmxlbSBzZXR0aW5nIHRoZSB0ZW1wbGF0ZSBmb3IgdGhpcyBmaWVsZCAnLFxuICAgICAgICAgICAgc2NvcGUub3B0aW9ucyxcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldEVsZW1lbnRUZW1wbGF0ZSh0ZW1wbGF0ZUVsKSB7XG4gICAgICAgIGVsLmh0bWwoYXNIdG1sKHRlbXBsYXRlRWwpKTtcbiAgICAgICAgJGNvbXBpbGUoZWwuY29udGVudHMoKSkoc2NvcGUpO1xuICAgICAgICBpZiAodHlwZSAmJiB0eXBlLmxpbmspIHtcbiAgICAgICAgICB0eXBlLmxpbmsuYXBwbHkodGh1c2x5LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcGUub3B0aW9ucy5saW5rKSB7XG4gICAgICAgICAgc2NvcGUub3B0aW9ucy5saW5rLmFwcGx5KHRodXNseSwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcnVuTWFuaXB1bGF0b3JzKG1hbmlwdWxhdG9ycykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcnVuTWFuaXB1bGF0b3JzT25UZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgICAgICAgIHZhciBjaGFpbiA9ICRxLndoZW4odGVtcGxhdGUpO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChtYW5pcHVsYXRvcnMsIG1hbmlwdWxhdG9yID0+IHtcbiAgICAgICAgICAgIGNoYWluID0gY2hhaW4udGhlbih0ZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAkcS53aGVuKG1hbmlwdWxhdG9yKHRlbXBsYXRlLCBzY29wZS5vcHRpb25zLCBzY29wZSkpLnRoZW4obmV3VGVtcGxhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzU3RyaW5nKG5ld1RlbXBsYXRlKSA/IG5ld1RlbXBsYXRlIDogYXNIdG1sKG5ld1RlbXBsYXRlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2hhaW47XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGFzSHRtbChlbCkge1xuICAgIHZhciB3cmFwcGVyID0gYW5ndWxhci5lbGVtZW50KCc8YT48L2E+Jyk7XG4gICAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kKGVsKS5odG1sKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGaWVsZFRlbXBsYXRlKG9wdGlvbnMpIHtcbiAgICBsZXQgdHlwZSA9IGZvcm1seUNvbmZpZy5nZXRUeXBlKG9wdGlvbnMudHlwZSwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgbGV0IHRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZSB8fCB0eXBlICYmIHR5cGUudGVtcGxhdGU7XG4gICAgbGV0IHRlbXBsYXRlVXJsID0gb3B0aW9ucy50ZW1wbGF0ZVVybCB8fCB0eXBlICYmIHR5cGUudGVtcGxhdGVVcmw7XG4gICAgaWYgKCF0ZW1wbGF0ZSAmJiAhdGVtcGxhdGVVcmwpIHtcbiAgICAgIHRocm93IGZvcm1seVVzYWJpbGl0eS5nZXRGaWVsZEVycm9yKFxuICAgICAgICAndHlwZS10eXBlLWhhcy1uby10ZW1wbGF0ZScsXG4gICAgICAgIGBUeXBlICcke29wdGlvbnMudHlwZX0nIGhhcyBub3QgdGVtcGxhdGUuIE9uIGVsZW1lbnQ6YCwgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKHRlbXBsYXRlIHx8IHRlbXBsYXRlVXJsLCAhdGVtcGxhdGUpO1xuICB9XG5cblxuICBmdW5jdGlvbiBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZSwgaXNVcmwpIHtcbiAgICBpZiAoIWlzVXJsKSB7XG4gICAgICByZXR1cm4gJHEud2hlbih0ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBodHRwT3B0aW9ucyA9IHtjYWNoZTogJHRlbXBsYXRlQ2FjaGV9O1xuICAgICAgcmV0dXJuICRodHRwLmdldCh0ZW1wbGF0ZSwgaHR0cE9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIGhhbmRsZUVycm9yR2V0dGluZ0FUZW1wbGF0ZShlcnJvcikge1xuICAgICAgICAgIGZvcm1seVdhcm4oXG4gICAgICAgICAgICAncHJvYmxlbS1sb2FkaW5nLXRlbXBsYXRlLWZvci10ZW1wbGF0ZXVybCcsXG4gICAgICAgICAgICAnUHJvYmxlbSBsb2FkaW5nIHRlbXBsYXRlIGZvciAnICsgdGVtcGxhdGUsXG4gICAgICAgICAgICBlcnJvclxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zY2x1ZGVJbldyYXBwZXJzKG9wdGlvbnMpIHtcbiAgICBsZXQgd3JhcHBlciA9IGdldFdyYXBwZXJPcHRpb24ob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdHJhbnNjbHVkZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICBpZiAoIXdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAkcS53aGVuKHRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlci5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICAgIGZvcm1seVVzYWJpbGl0eS5jaGVja1dyYXBwZXIod3JhcHBlciwgb3B0aW9ucyk7XG4gICAgICAgIHdyYXBwZXIudmFsaWRhdGVPcHRpb25zICYmIHdyYXBwZXIudmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBydW5BcGlDaGVjayh3cmFwcGVyLCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHByb21pc2VzID0gd3JhcHBlci5tYXAodyA9PiBnZXRUZW1wbGF0ZSh3LnRlbXBsYXRlIHx8IHcudGVtcGxhdGVVcmwsICF3LnRlbXBsYXRlKSk7XG4gICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKS50aGVuKHdyYXBwZXJzVGVtcGxhdGVzID0+IHtcbiAgICAgICAgd3JhcHBlcnNUZW1wbGF0ZXMuZm9yRWFjaCgod3JhcHBlclRlbXBsYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGZvcm1seVVzYWJpbGl0eS5jaGVja1dyYXBwZXJUZW1wbGF0ZSh3cmFwcGVyVGVtcGxhdGUsIHdyYXBwZXJbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXBwZXJzVGVtcGxhdGVzLnJldmVyc2UoKTsgLy8gd3JhcHBlciAwIGlzIHdyYXBwZWQgaW4gd3JhcHBlciAxIGFuZCBzbyBvbi4uLlxuICAgICAgICBsZXQgdG90YWxXcmFwcGVyID0gd3JhcHBlcnNUZW1wbGF0ZXMuc2hpZnQoKTtcbiAgICAgICAgd3JhcHBlcnNUZW1wbGF0ZXMuZm9yRWFjaCh3cmFwcGVyVGVtcGxhdGUgPT4ge1xuICAgICAgICAgIHRvdGFsV3JhcHBlciA9IGRvVHJhbnNjbHVzaW9uKHRvdGFsV3JhcHBlciwgd3JhcHBlclRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb1RyYW5zY2x1c2lvbih0b3RhbFdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkb1RyYW5zY2x1c2lvbih3cmFwcGVyLCB0ZW1wbGF0ZSkge1xuICAgIGxldCBzdXBlcldyYXBwZXIgPSBhbmd1bGFyLmVsZW1lbnQoJzxhPjwvYT4nKTsgLy8gdGhpcyBhbGxvd3MgcGVvcGxlIG5vdCBoYXZlIHRvIGhhdmUgYSBzaW5nbGUgcm9vdCBpbiB3cmFwcGVyc1xuICAgIHN1cGVyV3JhcHBlci5hcHBlbmQod3JhcHBlcik7XG4gICAgbGV0IHRyYW5zY2x1ZGVFbCA9IHN1cGVyV3JhcHBlci5maW5kKCdmb3JtbHktdHJhbnNjbHVkZScpO1xuICAgIGlmICghdHJhbnNjbHVkZUVsLmxlbmd0aCkge1xuICAgICAgLy90cnkgaXQgdXNpbmcgb3VyIGN1c3RvbSBmaW5kIGZ1bmN0aW9uXG4gICAgICB0cmFuc2NsdWRlRWwgPSBmb3JtbHlVdGlsLmZpbmRCeU5vZGVOYW1lKHN1cGVyV3JhcHBlciwgJ2Zvcm1seS10cmFuc2NsdWRlJyk7XG4gICAgfVxuICAgIHRyYW5zY2x1ZGVFbC5yZXBsYWNlV2l0aCh0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHN1cGVyV3JhcHBlci5odG1sKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXcmFwcGVyT3B0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgd3JhcHBlciA9IG9wdGlvbnMud3JhcHBlcjtcbiAgICAvLyBleHBsaWNpdCBudWxsIG1lYW5zIG5vIHdyYXBwZXJcbiAgICBpZiAod3JhcHBlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIG5vdGhpbmcgc3BlY2lmaWVkIG1lYW5zIHVzZSB0aGUgZGVmYXVsdCB3cmFwcGVyIGZvciB0aGUgdHlwZVxuICAgIGlmICghd3JhcHBlcikge1xuICAgICAgLy8gZ2V0IGFsbCB3cmFwcGVycyB0aGF0IHNwZWNpZnkgdGhleSBhcHBseSB0byB0aGlzIHR5cGVcbiAgICAgIHdyYXBwZXIgPSBhcnJheWlmeShmb3JtbHlDb25maWcuZ2V0V3JhcHBlckJ5VHlwZShvcHRpb25zLnR5cGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlciA9IGFycmF5aWZ5KHdyYXBwZXIpLm1hcChmb3JtbHlDb25maWcuZ2V0V3JhcHBlcik7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFsbCB3cmFwcGVycyBmb3IgdGhhdCB0aGlzIHR5cGUgc3BlY2lmaWVkIHRoYXQgaXQgdXNlcy5cbiAgICB2YXIgdHlwZSA9IGZvcm1seUNvbmZpZy5nZXRUeXBlKG9wdGlvbnMudHlwZSwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZS53cmFwcGVyKSB7XG4gICAgICBsZXQgdHlwZVdyYXBwZXJzID0gYXJyYXlpZnkodHlwZS53cmFwcGVyKS5tYXAoZm9ybWx5Q29uZmlnLmdldFdyYXBwZXIpO1xuICAgICAgd3JhcHBlciA9IHdyYXBwZXIuY29uY2F0KHR5cGVXcmFwcGVycyk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBkZWZhdWx0IHdyYXBwZXIgbGFzdFxuICAgIHZhciBkZWZhdWx0V3JhcHBlciA9IGZvcm1seUNvbmZpZy5nZXRXcmFwcGVyKCk7XG4gICAgaWYgKGRlZmF1bHRXcmFwcGVyKSB7XG4gICAgICB3cmFwcGVyLnB1c2goZGVmYXVsdFdyYXBwZXIpO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQXBpKG9wdGlvbnMpIHtcbiAgICBmb3JtbHlBcGlDaGVjay50aHJvdyhmb3JtbHlBcGlDaGVjay5mb3JtbHlGaWVsZE9wdGlvbnMsIG9wdGlvbnMsIHtcbiAgICAgIHByZWZpeDogJ2Zvcm1seS1maWVsZCBkaXJlY3RpdmUnLFxuICAgICAgdXJsOiAnZm9ybWx5LWZpZWxkLWRpcmVjdGl2ZS12YWxpZGF0aW9uLWZhaWxlZCdcbiAgICB9KTtcbiAgICAvLyB2YWxpZGF0ZSB3aXRoIHRoZSB0eXBlXG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSAmJiBmb3JtbHlDb25maWcuZ2V0VHlwZShvcHRpb25zLnR5cGUpO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBpZiAodHlwZS52YWxpZGF0ZU9wdGlvbnMpIHtcbiAgICAgICAgdHlwZS52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBydW5BcGlDaGVjayh0eXBlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5BcGlDaGVjayh7YXBpQ2hlY2ssIGFwaUNoZWNrSW5zdGFuY2UsIGFwaUNoZWNrRnVuY3Rpb24sIGFwaUNoZWNrT3B0aW9uc30sIG9wdGlvbnMpIHtcbiAgICBpZiAoIWFwaUNoZWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluc3RhbmNlID0gYXBpQ2hlY2tJbnN0YW5jZSB8fCBmb3JtbHlBcGlDaGVjaztcbiAgICBjb25zdCBmbiA9IGFwaUNoZWNrRnVuY3Rpb24gfHwgJ3dhcm4nO1xuICAgIGNvbnN0IHNoYXBlID0gaW5zdGFuY2Uuc2hhcGUoYXBpQ2hlY2spO1xuICAgIGluc3RhbmNlW2ZuXShzaGFwZSwgb3B0aW9ucywgYXBpQ2hlY2tPcHRpb25zIHx8IHtcbiAgICAgIHByZWZpeDogYGZvcm1seS1maWVsZCAke25hbWV9YCxcbiAgICAgIHVybDogZm9ybWx5QXBpQ2hlY2suY29uZmlnLm91dHB1dC5kb2NzQmFzZVVybCArICdmb3JtbHktZmllbGQtdHlwZS1hcGljaGVjay1mYWlsZWQnXG4gICAgfSk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhcnJheWlmeShvYmopIHtcbiAgaWYgKG9iaiAmJiAhYW5ndWxhci5pc0FycmF5KG9iaikpIHtcbiAgICBvYmogPSBbb2JqXTtcbiAgfSBlbHNlIGlmICghb2JqKSB7XG4gICAgb2JqID0gW107XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vZGlyZWN0aXZlcy9mb3JtbHktZmllbGQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmb3JtbHlGb2N1cztcblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlGb2N1cygkdGltZW91dCwgJGRvY3VtZW50KSB7XG4gIC8qIGpzaGludCAtVzA1MiAqL1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gZm9ybWx5Rm9jdXNMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgdmFyIHByZXZpb3VzRWwgPSBudWxsO1xuICAgICAgdmFyIGVsID0gZWxlbWVudFswXTtcbiAgICAgIHZhciBkb2MgPSAkZG9jdW1lbnRbMF07XG4gICAgICBhdHRycy4kb2JzZXJ2ZSgnZm9ybWx5Rm9jdXMnLCBmdW5jdGlvbiByZXNwb25kVG9Gb2N1c0V4cHJlc3Npb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmV2aW91c0VsID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgIH0sIH5+YXR0cnMuZm9jdXNXYWl0KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVsLmJsdXIoKTtcbiAgICAgICAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVmb2N1cycpICYmIHByZXZpb3VzRWwpIHtcbiAgICAgICAgICAgICAgcHJldmlvdXNFbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vZGlyZWN0aXZlcy9mb3JtbHktZm9jdXMuanNcbiAqKi8iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyLWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1seUZvcm07XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgZm9ybWx5Rm9ybVxuICogQHJlc3RyaWN0IEVcbiAqL1xuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBmb3JtbHlGb3JtKGZvcm1seVVzYWJpbGl0eSwgJHBhcnNlLCBmb3JtbHlBcGlDaGVjaywgZm9ybWx5Q29uZmlnKSB7XG4gIHZhciBjdXJyZW50Rm9ybUlkID0gMTtcbiAgdmFyIG9wdGlvbnNBcGkgPSBbXG4gICAgZm9ybWx5QXBpQ2hlY2suc2hhcGUoe1xuICAgICAgZm9ybVN0YXRlOiBmb3JtbHlBcGlDaGVjay5vYmplY3Qub3B0aW9uYWwsXG4gICAgICByZXNldE1vZGVsOiBmb3JtbHlBcGlDaGVjay5mdW5jLm9wdGlvbmFsLFxuICAgICAgdXBkYXRlSW5pdGlhbFZhbHVlOiBmb3JtbHlBcGlDaGVjay5mdW5jLm9wdGlvbmFsLFxuICAgICAgcmVtb3ZlQ2hyb21lQXV0b0NvbXBsZXRlOiBmb3JtbHlBcGlDaGVjay5ib29sLm9wdGlvbmFsXG4gICAgfSkuc3RyaWN0Lm9wdGlvbmFsXG4gIF07XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gZm9ybWx5Rm9ybUdldFRlbXBsYXRlKGVsLCBhdHRycykge1xuICAgICAgLyoganNoaW50IC1XMDMzICovIC8vIHRoaXMgYmVjYXVzZSBqc2hpbnQgaXMgYnJva2VuIEkgZ3Vlc3MuLi5cbiAgICAgIGNvbnN0IHJvb3RFbCA9IGF0dHJzLnJvb3RFbCB8fCAnbmctZm9ybSc7XG4gICAgICBjb25zdCBmb3JtSWQgPSBgZm9ybWx5XyR7Y3VycmVudEZvcm1JZCsrfWA7XG4gICAgICBsZXQgZm9ybU5hbWUgPSBmb3JtSWQ7XG4gICAgICBjb25zdCBiaW5kTmFtZSA9IGF0dHJzLmJpbmROYW1lO1xuICAgICAgaWYgKGJpbmROYW1lKSB7XG4gICAgICAgIGlmIChhbmd1bGFyLnZlcnNpb24ubWlub3IgPCAzKSB7XG4gICAgICAgICAgdGhyb3cgZm9ybWx5VXNhYmlsaXR5LmdldEZvcm1seUVycm9yKCdiaW5kLW5hbWUgYXR0cmlidXRlIG9uIGZvcm1seS1mb3JtIG5vdCBhbGxvd2VkIGluID4gYW5ndWxhciAxLjMnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtTmFtZSA9IGB7ezo6J2Zvcm1seV8nICsgJHtiaW5kTmFtZX19fWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8JHtyb290RWx9IGNsYXNzPVwiZm9ybWx5XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cIiR7Zm9ybU5hbWV9XCJcbiAgICAgICAgICAgICAgICAgcm9sZT1cImZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGZvcm1seS1maWVsZFxuICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiZmllbGQgaW4gZmllbGRzIHRyYWNrIGJ5ICRpbmRleFwiXG4gICAgICAgICAgICAgICBuZy1pZj1cIiFmaWVsZC5oaWRlXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybWx5LWZpZWxkIHt7ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XCJcbiAgICAgICAgICAgICAgIG9wdGlvbnM9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICBtb2RlbD1cImZpZWxkLm1vZGVsIHx8IG1vZGVsXCJcbiAgICAgICAgICAgICAgIGZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICBmb3JtPVwiJHtmb3JtSWR9XCJcbiAgICAgICAgICAgICAgIGZvcm0taWQ9XCIke2Zvcm1JZH1cIlxuICAgICAgICAgICAgICAgZm9ybS1zdGF0ZT1cIm9wdGlvbnMuZm9ybVN0YXRlXCJcbiAgICAgICAgICAgICAgIGluZGV4PVwiJGluZGV4XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgICAgICA8LyR7cm9vdEVsfT5cbiAgICAgIGA7XG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGZpZWxkczogJz0nLFxuICAgICAgbW9kZWw6ICc9JyxcbiAgICAgIGZvcm06ICc9PycsXG4gICAgICBvcHRpb25zOiAnPT8nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24gRm9ybWx5Rm9ybUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICBzZXR1cE9wdGlvbnMoKTtcbiAgICAgICRzY29wZS5tb2RlbCA9ICRzY29wZS5tb2RlbCB8fCB7fTtcbiAgICAgICRzY29wZS5maWVsZHMgPSAkc2NvcGUuZmllbGRzIHx8IFtdO1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmZpZWxkcywgYXR0YWNoS2V5KTsgLy8gYXR0YWNoZXMgYSBrZXkgYmFzZWQgb24gdGhlIGluZGV4IGlmIGEga2V5IGlzbid0IHNwZWNpZmllZFxuICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5maWVsZHMsIHNldHVwV2F0Y2hlcnMpOyAvLyBzZXR1cCB3YXRjaGVycyBmb3IgYWxsIGZpZWxkc1xuXG4gICAgICAvLyB3YXRjaCB0aGUgbW9kZWwgYW5kIGV2YWx1YXRlIHdhdGNoIGV4cHJlc3Npb25zIHRoYXQgZGVwZW5kIG9uIGl0LlxuICAgICAgJHNjb3BlLiR3YXRjaCgnbW9kZWwnLCBmdW5jdGlvbiBvblJlc3VsdFVwZGF0ZShuZXdSZXN1bHQpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5maWVsZHMsIGZ1bmN0aW9uIHJ1bkZpZWxkRXhwcmVzc2lvblByb3BlcnRpZXMoZmllbGQpIHtcbiAgICAgICAgICAvKmpzaGludCAtVzAzMCAqL1xuICAgICAgICAgIGZpZWxkLnJ1bkV4cHJlc3Npb25zICYmIGZpZWxkLnJ1bkV4cHJlc3Npb25zKG5ld1Jlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldHVwT3B0aW9ucygpIHtcbiAgICAgICAgZm9ybWx5QXBpQ2hlY2sudGhyb3cob3B0aW9uc0FwaSwgWyRzY29wZS5vcHRpb25zXSwge3ByZWZpeDogJ2Zvcm1seS1mb3JtIG9wdGlvbnMgY2hlY2snfSk7XG4gICAgICAgICRzY29wZS5vcHRpb25zID0gJHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICAgICRzY29wZS5vcHRpb25zLmZvcm1TdGF0ZSA9ICRzY29wZS5vcHRpb25zLmZvcm1TdGF0ZSB8fCB7fTtcblxuICAgICAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUub3B0aW9ucywge1xuICAgICAgICAgIHVwZGF0ZUluaXRpYWxWYWx1ZSxcbiAgICAgICAgICByZXNldE1vZGVsXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZUluaXRpYWxWYWx1ZSgpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5maWVsZHMsIGZpZWxkID0+IGZpZWxkLnVwZGF0ZUluaXRpYWxWYWx1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzZXRNb2RlbCgpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5maWVsZHMsIGZpZWxkID0+IGZpZWxkLnJlc2V0TW9kZWwoKSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGF0dGFjaEtleShmaWVsZCwgaW5kZXgpIHtcbiAgICAgICAgZmllbGQua2V5ID0gZmllbGQua2V5IHx8IGluZGV4IHx8IDA7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNldHVwV2F0Y2hlcnMoZmllbGQsIGluZGV4KSB7XG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQoZmllbGQud2F0Y2hlcikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoZXJzID0gZmllbGQud2F0Y2hlcjtcbiAgICAgICAgaWYgKCFhbmd1bGFyLmlzQXJyYXkod2F0Y2hlcnMpKSB7XG4gICAgICAgICAgd2F0Y2hlcnMgPSBbd2F0Y2hlcnNdO1xuICAgICAgICB9XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh3YXRjaGVycywgZnVuY3Rpb24gc2V0dXBXYXRjaGVyKHdhdGNoZXIpIHtcbiAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHdhdGNoZXIubGlzdGVuZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBmb3JtbHlVc2FiaWxpdHkuZ2V0RmllbGRFcnJvcihcbiAgICAgICAgICAgICAgJ2FsbC1maWVsZC13YXRjaGVycy1tdXN0LWhhdmUtYS1saXN0ZW5lcicsXG4gICAgICAgICAgICAgICdBbGwgZmllbGQgd2F0Y2hlcnMgbXVzdCBoYXZlIGEgbGlzdGVuZXInLCBmaWVsZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHdhdGNoRXhwcmVzc2lvbiA9IGdldFdhdGNoRXhwcmVzc2lvbih3YXRjaGVyLCBmaWVsZCwgaW5kZXgpO1xuICAgICAgICAgIHZhciB3YXRjaExpc3RlbmVyID0gZ2V0V2F0Y2hMaXN0ZW5lcih3YXRjaGVyLCBmaWVsZCwgaW5kZXgpO1xuXG4gICAgICAgICAgdmFyIHR5cGUgPSB3YXRjaGVyLnR5cGUgfHwgJyR3YXRjaCc7XG4gICAgICAgICAgd2F0Y2hlci5zdG9wV2F0Y2hpbmcgPSAkc2NvcGVbdHlwZV0od2F0Y2hFeHByZXNzaW9uLCB3YXRjaExpc3RlbmVyLCB3YXRjaGVyLndhdGNoRGVlcCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRXYXRjaEV4cHJlc3Npb24od2F0Y2hlciwgZmllbGQsIGluZGV4KSB7XG4gICAgICAgIHZhciB3YXRjaEV4cHJlc3Npb24gPSB3YXRjaGVyLmV4cHJlc3Npb24gfHwgYG1vZGVsWycke2ZpZWxkLmtleX0nXWA7XG4gICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24od2F0Y2hFeHByZXNzaW9uKSkge1xuICAgICAgICAgIC8vIHdyYXAgdGhlIGZpZWxkJ3Mgd2F0Y2ggZXhwcmVzc2lvbiBzbyB3ZSBjYW4gY2FsbCBpdCB3aXRoIHRoZSBmaWVsZCBhcyB0aGUgZmlyc3QgYXJnXG4gICAgICAgICAgLy8gYW5kIHRoZSBzdG9wIGZ1bmN0aW9uIGFzIHRoZSBsYXN0IGFyZyBhcyBhIGhlbHBlclxuICAgICAgICAgIHZhciBvcmlnaW5hbEV4cHJlc3Npb24gPSB3YXRjaEV4cHJlc3Npb247XG4gICAgICAgICAgd2F0Y2hFeHByZXNzaW9uID0gZnVuY3Rpb24gZm9ybWx5V2F0Y2hFeHByZXNzaW9uKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBtb2RpZnlBcmdzKHdhdGNoZXIsIGluZGV4LCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRXhwcmVzc2lvbiguLi5hcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHdhdGNoRXhwcmVzc2lvbi5kaXNwbGF5TmFtZSA9IGBGb3JtbHkgV2F0Y2ggRXhwcmVzc2lvbiBmb3IgZmllbGQgZm9yICR7ZmllbGQua2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdhdGNoRXhwcmVzc2lvbjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0V2F0Y2hMaXN0ZW5lcih3YXRjaGVyLCBmaWVsZCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHdhdGNoTGlzdGVuZXIgPSB3YXRjaGVyLmxpc3RlbmVyO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHdhdGNoTGlzdGVuZXIpKSB7XG4gICAgICAgICAgLy8gd3JhcCB0aGUgZmllbGQncyB3YXRjaCBsaXN0ZW5lciBzbyB3ZSBjYW4gY2FsbCBpdCB3aXRoIHRoZSBmaWVsZCBhcyB0aGUgZmlyc3QgYXJnXG4gICAgICAgICAgLy8gYW5kIHRoZSBzdG9wIGZ1bmN0aW9uIGFzIHRoZSBsYXN0IGFyZyBhcyBhIGhlbHBlclxuICAgICAgICAgIHZhciBvcmlnaW5hbExpc3RlbmVyID0gd2F0Y2hMaXN0ZW5lcjtcbiAgICAgICAgICB3YXRjaExpc3RlbmVyID0gZnVuY3Rpb24gZm9ybWx5V2F0Y2hMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gbW9kaWZ5QXJncyh3YXRjaGVyLCBpbmRleCwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbExpc3RlbmVyKC4uLmFyZ3MpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgd2F0Y2hMaXN0ZW5lci5kaXNwbGF5TmFtZSA9IGBGb3JtbHkgV2F0Y2ggTGlzdGVuZXIgZm9yIGZpZWxkIGZvciAke2ZpZWxkLmtleX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXRjaExpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb2RpZnlBcmdzKHdhdGNoZXIsIGluZGV4LCAuLi5vcmlnaW5hbEFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIFskc2NvcGUuZmllbGRzW2luZGV4XSwgLi4ub3JpZ2luYWxBcmdzLCB3YXRjaGVyLnN0b3BXYXRjaGluZ107XG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rKHNjb3BlLCBlbCwgYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5mb3JtKSB7XG4gICAgICAgIGNvbnN0IGZvcm1JZCA9IGF0dHJzLm5hbWU7XG4gICAgICAgICRwYXJzZShhdHRycy5mb3JtKS5hc3NpZ24oc2NvcGUuJHBhcmVudCwgc2NvcGVbZm9ybUlkXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNocm9tZSBhdXRvY29tcGxldGUgbGFtZW5lc3NcbiAgICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY4MTUzI2MxNFxuICAgICAgLy8g4YOaKOCyoOebiuCyoOGDmikgICAo4pWvwrDilqHCsCnila/vuLUg4pS74pSB4pS7ICAgICjil57igLjil5/vvJspXG4gICAgICBjb25zdCBnbG9iYWwgPSBmb3JtbHlDb25maWcuZXh0cmFzLnJlbW92ZUNocm9tZUF1dG9Db21wbGV0ZSA9PT0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9mZkluc3RhbmNlID0gc2NvcGUub3B0aW9ucyAmJiBzY29wZS5vcHRpb25zLnJlbW92ZUNocm9tZUF1dG9Db21wbGV0ZSA9PT0gZmFsc2U7XG4gICAgICBjb25zdCBvbkluc3RhbmNlID0gc2NvcGUub3B0aW9ucyAmJiBzY29wZS5vcHRpb25zLnJlbW92ZUNocm9tZUF1dG9Db21wbGV0ZSA9PT0gdHJ1ZTtcbiAgICAgIGlmICgoZ2xvYmFsICYmICFvZmZJbnN0YW5jZSkgfHwgb25JbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ2FkZHJlc3MtbGV2ZWw0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGVsWzBdLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9kaXJlY3RpdmVzL2Zvcm1seS1mb3JtLmpzXG4gKiovIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhci1maXgnO1xuXG5leHBvcnQgZGVmYXVsdCBhZGRGb3JtbHlOZ01vZGVsQXR0cnNNYW5pcHVsYXRvcjtcblxuLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBhZGRGb3JtbHlOZ01vZGVsQXR0cnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgaWYgKGZvcm1seUNvbmZpZy5leHRyYXMuZGlzYWJsZU5nTW9kZWxBdHRyc01hbmlwdWxhdG9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2gobmdNb2RlbEF0dHJzTWFuaXB1bGF0b3IpO1xuXG5cbiAgZnVuY3Rpb24gbmdNb2RlbEF0dHJzTWFuaXB1bGF0b3IodGVtcGxhdGUsIG9wdGlvbnMsIHNjb3BlKSB7XG4gICAgLyoganNoaW50IG1heGNvbXBsZXhpdHk6NiAqL1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgIGlmIChkYXRhLnNraXBOZ01vZGVsQXR0cnNNYW5pcHVsYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICB2YXIgbW9kZWxOb2RlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuZy1tb2RlbF0nKTtcbiAgICBpZiAoIW1vZGVsTm9kZXMgfHwgIW1vZGVsTm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgYWRkSWZOb3RQcmVzZW50KG1vZGVsTm9kZXMsICdpZCcsIHNjb3BlLmlkKTtcbiAgICBhZGRJZk5vdFByZXNlbnQobW9kZWxOb2RlcywgJ25hbWUnLCBzY29wZS5pZCk7XG5cbiAgICBhZGRWYWxpZGF0aW9uKCk7XG4gICAgYWRkTW9kZWxPcHRpb25zKCk7XG4gICAgYWRkVGVtcGxhdGVPcHRpb25zQXR0cnMoKTtcblxuXG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcblxuXG4gICAgZnVuY3Rpb24gYWRkVmFsaWRhdGlvbigpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnZhbGlkYXRvcnMpIHx8IGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlcykpIHtcbiAgICAgICAgYWRkSWZOb3RQcmVzZW50KG1vZGVsTm9kZXMsICdmb3JtbHktY3VzdG9tLXZhbGlkYXRpb24nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTW9kZWxPcHRpb25zKCkge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMubW9kZWxPcHRpb25zKSkge1xuICAgICAgICBhZGRJZk5vdFByZXNlbnQobW9kZWxOb2RlcywgJ25nLW1vZGVsLW9wdGlvbnMnLCAnb3B0aW9ucy5tb2RlbE9wdGlvbnMnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubW9kZWxPcHRpb25zLmdldHRlclNldHRlcikge1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChtb2RlbE5vZGVzLCBub2RlID0+IHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCduZy1tb2RlbCcsICdvcHRpb25zLnZhbHVlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUZW1wbGF0ZU9wdGlvbnNBdHRycygpIHtcbiAgICAgIGlmICghb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMgJiYgIW9wdGlvbnMuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBydW4gdGhlc2UgaWYgdGhlcmUgYXJlIG5vIHRlbXBsYXRlT3B0aW9ucyBvciBleHByZXNzaW9uUHJvcGVydGllc1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0byA9IG9wdGlvbnMudGVtcGxhdGVPcHRpb25zIHx8IHt9O1xuICAgICAgY29uc3QgZXAgPSBvcHRpb25zLmV4cHJlc3Npb25Qcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgICBsZXQgbmdNb2RlbEF0dHJpYnV0ZXMgPSBnZXRCdWlsdEluQXR0cmlidXRlcygpO1xuXG4gICAgICAvLyBleHRlbmQgd2l0aCB0aGUgdXNlcidzIHNwZWNpZmljYXRpb25zIHdpbm5pbmdcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKG5nTW9kZWxBdHRyaWJ1dGVzLCBvcHRpb25zLm5nTW9kZWxBdHRycyk7XG5cbiAgICAgIC8vIEZlZWwgZnJlZSB0byBtYWtlIHRoaXMgbW9yZSBzaW1wbGUgOi0pXG4gICAgICBhbmd1bGFyLmZvckVhY2gobmdNb2RlbEF0dHJpYnV0ZXMsICh2YWwsIG5hbWUpID0+IHtcbiAgICAgICAgLyoganNoaW50IG1heGNvbXBsZXhpdHk6MTQgKi9cbiAgICAgICAgbGV0IGF0dHJWYWw7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgY29uc3QgcmVmID0gYG9wdGlvbnMudGVtcGxhdGVPcHRpb25zWycke25hbWV9J11gO1xuICAgICAgICBjb25zdCB0b1ZhbCA9IHRvW25hbWVdO1xuICAgICAgICBjb25zdCBlcFZhbCA9IGdldEVwVmFsdWUoZXAsIG5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGluVG8gPSBhbmd1bGFyLmlzRGVmaW5lZCh0b1ZhbCk7XG4gICAgICAgIGNvbnN0IGluRXAgPSBhbmd1bGFyLmlzRGVmaW5lZChlcFZhbCk7XG4gICAgICAgIGlmICh2YWwudmFsdWUpIHtcbiAgICAgICAgICAvLyBJIHJlYWxpemUgdGhpcyBsb29rcyBiYWNrd2FyZHMsIGJ1dCBpdCdzIHJpZ2h0LCB0cnVzdCBtZS4uLlxuICAgICAgICAgIGF0dHJOYW1lID0gdmFsLnZhbHVlO1xuICAgICAgICAgIGF0dHJWYWwgPSBuYW1lO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbC5leHByZXNzaW9uICYmIGluVG8pIHtcbiAgICAgICAgICBhdHRyTmFtZSA9IHZhbC5leHByZXNzaW9uO1xuICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKHRvW25hbWVdKSkge1xuICAgICAgICAgICAgYXR0clZhbCA9IGAkZXZhbCgke3JlZn0pYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih0b1tuYW1lXSkpIHtcbiAgICAgICAgICAgIGF0dHJWYWwgPSBgJHtyZWZ9KG1vZGVsW29wdGlvbnMua2V5XSwgb3B0aW9ucywgdGhpcywgJGV2ZW50KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLiR7bmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBmdW5jdGlvbjogJHtKU09OLnN0cmluZ2lmeShvcHRpb25zKX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWwuYm91bmQgJiYgaW5FcCkge1xuICAgICAgICAgIGF0dHJOYW1lID0gdmFsLmJvdW5kO1xuICAgICAgICAgIGF0dHJWYWwgPSByZWY7XG4gICAgICAgIH0gZWxzZSBpZiAoKHZhbC5hdHRyaWJ1dGUgfHwgdmFsLmJvb2xlYW4pICYmIGluRXApIHtcbiAgICAgICAgICBhdHRyTmFtZSA9IHZhbC5hdHRyaWJ1dGUgfHwgdmFsLmJvb2xlYW47XG4gICAgICAgICAgYXR0clZhbCA9IGB7eyR7cmVmfX19YDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwuYXR0cmlidXRlICYmIGluVG8pIHtcbiAgICAgICAgICBhdHRyTmFtZSA9IHZhbC5hdHRyaWJ1dGU7XG4gICAgICAgICAgYXR0clZhbCA9IHRvVmFsO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbC5ib29sZWFuKSB7XG4gICAgICAgICAgaWYgKGluVG8gJiYgIWluRXAgJiYgdG9WYWwpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gdmFsLmJvb2xlYW47XG4gICAgICAgICAgICBhdHRyVmFsID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8ganNoaW50IC1XMDM1XG4gICAgICAgICAgICAvLyBlbXB0eSB0byBpbGx1c3RyYXRlIHRoYXQgYSBib29sZWFuIHdpbGwgbm90IGJlIGFkZGVkIHZpYSB2YWwuYm91bmRcbiAgICAgICAgICAgIC8vIGlmIHlvdSB3YW50IGl0IGFkZGVkIHZpYSB2YWwuYm91bmQsIHRoZW4gcHV0IGl0IGluIGV4cHJlc3Npb25Qcm9wZXJ0aWVzXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbC5ib3VuZCAmJiBpblRvKSB7XG4gICAgICAgICAgYXR0ck5hbWUgPSB2YWwuYm91bmQ7XG4gICAgICAgICAgYXR0clZhbCA9IHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRyTmFtZSkgJiYgYW5ndWxhci5pc0RlZmluZWQoYXR0clZhbCkpIHtcbiAgICAgICAgICBhZGRJZk5vdFByZXNlbnQobW9kZWxOb2RlcywgYXR0ck5hbWUsIGF0dHJWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBVdGlsaXR5IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBnZXRCdWlsdEluQXR0cmlidXRlcygpIHtcbiAgICBsZXQgbmdNb2RlbEF0dHJpYnV0ZXMgPSB7XG4gICAgICBmb2N1czoge1xuICAgICAgICBhdHRyaWJ1dGU6ICdmb3JtbHktZm9jdXMnXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBib3VuZE9ubHkgPSBbXTtcbiAgICBjb25zdCBib3RoQm9vbGVhbkFuZEJvdW5kID0gWydyZXF1aXJlZCcsICdkaXNhYmxlZCddO1xuICAgIGNvbnN0IGJvdGhBdHRyaWJ1dGVBbmRCb3VuZCA9IFsncGF0dGVybicsICdtaW5sZW5ndGgnXTtcbiAgICBjb25zdCBleHByZXNzaW9uT25seSA9IFsnY2hhbmdlJywgJ2tleWRvd24nLCAna2V5dXAnLCAna2V5cHJlc3MnLCAnY2xpY2snLCAnZm9jdXMnLCAnYmx1ciddO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU9ubHkgPSBbJ3BsYWNlaG9sZGVyJywgJ21pbicsICdtYXgnLCAndGFiaW5kZXgnLCAndHlwZSddO1xuICAgIGlmIChmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyVW5ib3VuZCkge1xuICAgICAgYm90aEF0dHJpYnV0ZUFuZEJvdW5kLnB1c2goJ21heGxlbmd0aCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZE9ubHkucHVzaCgnbWF4bGVuZ3RoJyk7XG4gICAgfVxuXG4gICAgYW5ndWxhci5mb3JFYWNoKGJvdW5kT25seSwgaXRlbSA9PiB7XG4gICAgICBuZ01vZGVsQXR0cmlidXRlc1tpdGVtXSA9IHtib3VuZDogJ25nLScgKyBpdGVtfTtcbiAgICB9KTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChib3RoQm9vbGVhbkFuZEJvdW5kLCBpdGVtID0+IHtcbiAgICAgIG5nTW9kZWxBdHRyaWJ1dGVzW2l0ZW1dID0ge2Jvb2xlYW46IGl0ZW0sIGJvdW5kOiAnbmctJyArIGl0ZW19O1xuICAgIH0pO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKGJvdGhBdHRyaWJ1dGVBbmRCb3VuZCwgaXRlbSA9PiB7XG4gICAgICBuZ01vZGVsQXR0cmlidXRlc1tpdGVtXSA9IHthdHRyaWJ1dGU6IGl0ZW0sIGJvdW5kOiAnbmctJyArIGl0ZW19O1xuICAgIH0pO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKGV4cHJlc3Npb25Pbmx5LCBpdGVtID0+IHtcbiAgICAgIHZhciBwcm9wTmFtZSA9ICdvbicgKyBpdGVtLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zdWJzdHIoMSk7XG4gICAgICBuZ01vZGVsQXR0cmlidXRlc1twcm9wTmFtZV0gPSB7ZXhwcmVzc2lvbjogJ25nLScgKyBpdGVtfTtcbiAgICB9KTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChhdHRyaWJ1dGVPbmx5LCBpdGVtID0+IHtcbiAgICAgIG5nTW9kZWxBdHRyaWJ1dGVzW2l0ZW1dID0ge2F0dHJpYnV0ZTogaXRlbX07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5nTW9kZWxBdHRyaWJ1dGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXBWYWx1ZShlcCwgbmFtZSkge1xuICAgIHJldHVybiBlcFsndGVtcGxhdGVPcHRpb25zLicgKyBuYW1lXSB8fFxuICAgICAgZXBbYHRlbXBsYXRlT3B0aW9uc1snJHtuYW1lfSddYF0gfHxcbiAgICAgIGVwW2B0ZW1wbGF0ZU9wdGlvbnNbXCIke25hbWV9XCJdYF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJZk5vdFByZXNlbnQobm9kZXMsIGF0dHIsIHZhbCkge1xuICAgIGFuZ3VsYXIuZm9yRWFjaChub2Rlcywgbm9kZSA9PiB7XG4gICAgICBpZiAoIW5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9mb3JtbHlOZ01vZGVsQXR0cnNNYW5pcHVsYXRvci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGFkZEN1c3RvbVRhZ3M7XG5cbi8vIEBuZ0luamVjdFxuZnVuY3Rpb24gYWRkQ3VzdG9tVGFncygkZG9jdW1lbnQpIHtcbiAgaWYgKCRkb2N1bWVudCAmJiAkZG9jdW1lbnQuZ2V0KSB7XG4gICAgLy9JRTggY2hlY2sgLT5cbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwOTY0OTY2L2RldGVjdC1pZS12ZXJzaW9uLXByaW9yLXRvLXY5LWluLWphdmFzY3JpcHQvMTA5NjUyMDMjMTA5NjUyMDNcbiAgICBjb25zdCBkb2N1bWVudCA9ICRkb2N1bWVudC5nZXQoMCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICc8IS0tW2lmIGx0IElFIDldPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgIGNvbnN0IGlzSWVMZXNzVGhhbjkgPSAoZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJykubGVuZ3RoID09PSAxKTtcblxuICAgIGlmIChpc0llTGVzc1RoYW45KSB7XG4gICAgICAvL2FkZCB0aGUgY3VzdG9tIGVsZW1lbnRzIHRoYXQgd2UgbmVlZCBmb3IgZm9ybWx5XG4gICAgICBjb25zdCBjdXN0b21FbGVtZW50cyA9IFtcbiAgICAgICAgJ2Zvcm1seS1maWVsZCcsICdmb3JtbHktZm9ybScsICdmb3JtbHktY3VzdG9tLXZhbGlkYXRpb24nLCAnZm9ybWx5LWZvY3VzJywgJ2Zvcm1seS10cmFuc3Bvc2UnXG4gICAgICBdO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKGN1c3RvbUVsZW1lbnRzLCBlbCA9PiB7XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vZm9ybWx5Q3VzdG9tVGFncy5qc1xuICoqLyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxuLy8gc28gd2UgZ2V0IGl0IGZyb20gd2luZG93IGluIHRoaXMgY2FzZS5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcbiAgYW5ndWxhciA9IHdpbmRvdy5hbmd1bGFyO1xufVxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2FuZ3VsYXItZml4L2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJhcGlDaGVja1wiLFwiYW1kXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzMlwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qc1wiOlwiYXBpLWNoZWNrXCJ9XG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhci1maXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7Zm9ybWx5RXZhbCwgZ2V0RmllbGRJZCwgcmV2ZXJzZURlZXBNZXJnZSwgZmluZEJ5Tm9kZU5hbWV9O1xuXG5mdW5jdGlvbiBmb3JtbHlFdmFsKHNjb3BlLCBleHByZXNzaW9uLCAkbW9kZWxWYWx1ZSwgJHZpZXdWYWx1ZSkge1xuICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKGV4cHJlc3Npb24pKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb24oJHZpZXdWYWx1ZSwgJG1vZGVsVmFsdWUsIHNjb3BlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2NvcGUuJGV2YWwoZXhwcmVzc2lvbiwgeyR2aWV3VmFsdWUsICRtb2RlbFZhbHVlfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RmllbGRJZChmb3JtSWQsIG9wdGlvbnMsIGluZGV4KSB7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlO1xuICBpZiAoIXR5cGUgJiYgb3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgIHR5cGUgPSAndGVtcGxhdGUnO1xuICB9IGVsc2UgaWYgKCF0eXBlICYmIG9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICB0eXBlID0gJ3RlbXBsYXRlVXJsJztcbiAgfVxuXG4gIHJldHVybiBbZm9ybUlkLCB0eXBlLCBvcHRpb25zLmtleSwgaW5kZXhdLmpvaW4oJ18nKTtcbn1cblxuXG5mdW5jdGlvbiByZXZlcnNlRGVlcE1lcmdlKGRlc3QpIHtcbiAgYW5ndWxhci5mb3JFYWNoKGFyZ3VtZW50cywgKHNyYywgaW5kZXgpID0+IHtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFuZ3VsYXIuZm9yRWFjaChzcmMsICh2YWwsIHByb3ApID0+IHtcbiAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQoZGVzdFtwcm9wXSkpIHtcbiAgICAgICAgZGVzdFtwcm9wXSA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgfSBlbHNlIGlmIChvYmpBbmRTYW1lVHlwZShkZXN0W3Byb3BdLCB2YWwpKSB7XG4gICAgICAgIHJldmVyc2VEZWVwTWVyZ2UoZGVzdFtwcm9wXSwgdmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iakFuZFNhbWVUeXBlKG9iajEsIG9iajIpIHtcbiAgcmV0dXJuIGFuZ3VsYXIuaXNPYmplY3Qob2JqMSkgJiYgYW5ndWxhci5pc09iamVjdChvYmoyKSAmJlxuICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iajIpO1xufVxuXG4vL3JlY3Vyc2UgZG93biBhIG5vZGUgdHJlZSB0byBmaW5kIGEgbm9kZSB3aXRoIG1hdGNoaW5nIG5vZGVOYW1lLCBmb3IgY3VzdG9tIHRhZ3MgalF1ZXJ5LmZpbmQgZG9lc24ndCB3b3JrIGluIElFOFxuZnVuY3Rpb24gZmluZEJ5Tm9kZU5hbWUoZWwsIG5vZGVOYW1lKSB7XG4gIGlmICghZWwucHJvcCkgeyAvLyBub3QgYSBqUXVlcnkgb3IganFMaXRlIG9iamVjdCAtPiB3cmFwIGl0XG4gICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZWwpO1xuICB9XG5cbiAgaWYgKGVsLnByb3AoJ25vZGVOYW1lJykgPT09IG5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICB2YXIgYyA9IGVsLmNoaWxkcmVuKCk7XG4gIGZvcih2YXIgaSA9IDA7IGMgJiYgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGZpbmRCeU5vZGVOYW1lKGNbaV0sIG5vZGVOYW1lKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9vdGhlci91dGlscy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=