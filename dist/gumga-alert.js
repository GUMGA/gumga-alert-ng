(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _alertStyle = require('./alert.style.js');

var _alertStyle2 = _interopRequireDefault(_alertStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	'use strict';

	var applyStyle = function applyStyle() {
		if (!document.getElementById("gumga-alert-style")) {
			var head = document.head || document.getElementsByTagName('head')[0];
			var elm = document.createElement('style');
			elm.type = 'text/css';
			elm.id = 'gumga-alert-style';
			if (elm.styleSheet) {
				elm.styleSheet.cssText = _alertStyle2.default;
			} else {
				elm.appendChild(document.createTextNode(_alertStyle2.default));
			}
			head.appendChild(elm);
		}
	};

	Alert.$inject = [];
	function Alert() {
		return {
			$get: function $get() {
				applyStyle();
				return this;
			},
			__config: {
				warning: {
					icon: 'glyphicon glyphicon-warning-sign',
					type: 'warning'
				},
				danger: {
					icon: 'glyphicon glyphicon-exclamation-sign',
					type: 'danger'
				},
				success: {
					icon: 'glyphicon glyphicon-ok',
					type: 'success'
				},
				info: {
					icon: 'glyphicon glyphicon-info-sign',
					type: 'info'
				}
			},
			_notify: function _notify(type, title, message, options) {
				var config = this.__config[type],
				    offset = options.offset || 50,
				    timer = options.timer || 100,
				    delay = options.delay || 6000,
				    color = options.color || undefined,
				    alowDismiss = options.alowDismiss || true,
				    animationEnter = options.animationEnter || 'animated bounceInRight',
				    animationExit = options.animationExit || 'animated bounceOutRight';

				$.notify({
					icon: config.icon,
					title: title,
					message: message
				}, {
					type: type,
					offset: offset,
					timer: timer,
					delay: delay,
					alow_dismiss: alowDismiss,
					z_index: 1500,
					animate: {
						enter: animationEnter,
						exit: animationExit
					},
					template: '\n\n\t\t\t\t\t<div data-notify="container"\n\t\t\t\t\t\tclass="gumga-alert-popup col-xs-9 col-sm-3 alert alert-{0}" role="alert">\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\ttype="button"\n\t\t\t\t\t\t\t\taria-hidden="true"\n\t\t\t\t\t\t\t\tclass="close gumga-alert-popup-icon-close gumga-alert-popup-icon-close-{0}"\n\t\t\t\t\t\t\t\tdata-notify="dismiss">\xD7</button>\n\t\t\t\t\t\t<div class="gumga-alert-popup-icon">\n\t\t\t\t\t\t\t<span class="gumga-alert-popup-icon-circle">\n\t\t\t\t\t\t\t<div data-notify="icon"></div>\n\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="gumga-alert-popup-content">\n\t\t\t\t\t\t\t<span data-notify="title"><b>{1}</b></span><br>\n\t\t\t\t\t\t\t<span data-notify="message">{2}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t'
				});
			},
			createWarningMessage: function createWarningMessage(title, message, options) {
				if (!options) options = {};
				this._notify('warning', title, message, options);
			},
			createDangerMessage: function createDangerMessage(title, message, options) {
				if (!options) options = {};
				this._notify('danger', title, message, options);
			},
			createSuccessMessage: function createSuccessMessage(title, message, options) {
				if (!options) options = {};
				this._notify('success', title, message, options);
			},
			createInfoMessage: function createInfoMessage(title, message, options) {
				if (!options) options = {};
				this._notify('info', title, message, options);
			}
		};
	}

	angular.module('gumga.alert', []).provider('GumgaAlert', Alert);
})();

},{"./alert.style.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n\n  div.gumga-alert-popup{\n    border-radius: 5px;\n  }\n\n  div.gumga-alert-popup.alert-success{\n    background-color: #51ab63;\n    border-color: #51ab63;\n  }\n\n  div.gumga-alert-popup.alert-danger{\n    background-color: #F44336;\n    border-color: #F44336;\n  }\n\n  div.gumga-alert-popup.alert-warning{\n    background-color: #FF9800;\n    border-color: #FF9800;\n  }\n\n  div.gumga-alert-popup.alert-info{\n    background-color: #03A9F4;\n    border-color: #03A9F4;\n  }\n\n  button.gumga-alert-popup-icon-close-success{\n    background-color: #51ab63;\n  }\n\n  button.gumga-alert-popup-icon-close-danger{\n    background-color: #F44336;\n  }\n\n  button.gumga-alert-popup-icon-close-warning{\n    background-color: #FF9800;\n  }\n\n  button.gumga-alert-popup-icon-close-info{\n    background-color: #03A9F4;\n  }\n\n  button.gumga-alert-popup-icon-close{\n    opacity: 1;\n    color: #fff;\n    border: 1px solid #fff;\n    width: 27px;\n    position: absolute;\n    right: -14px;\n    border-radius: 50%;\n    top: -10px;\n    font-size: 25px;\n    outline: none;\n  }\n\n  button.gumga-alert-popup-icon-close:hover{\n    opacity: 1;\n  }\n\n  div.gumga-alert-popup span[data-notify=\"message\"], div.gumga-alert-popup-content span[data-notify=\"title\"]{\n    white-space: pre-wrap;\n    white-space: -moz-pre-wrap;\n    white-space: -pre-wrap;\n    white-space: -o-pre-wrap;\n    word-wrap: break-word;\n  }\n\n  div.gumga-alert-popup-content{\n    width: 100%;\n    color: #fff;\n    padding-left: 55px;\n  }\n\n  div.gumga-alert-popup-icon{\n    height: 100%;\n    color: #fff;\n    font-size: 30px;\n    position: absolute;\n  }\n\n  span.gumga-alert-popup-icon-circle{\n    width: 45px;\n    height: 45px;\n    background-color: transparent;\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    border-radius: 50%;\n    border: 2px solid #fff;\n  }\n\n  span.gumga-alert-popup-icon-circle > div{\n    margin: 5px !important;\n  }\n\n\n\n\n";

},{}]},{},[1]);
