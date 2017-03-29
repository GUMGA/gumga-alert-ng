(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	'use strict';

	Alert.$inject = [];
	function Alert() {
		return {
			$get: function $get() {
				return this;
			},
			__config: {
				warn: {
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
					template: '<div data-notify="container" class="col-xs-9 col-sm-3 alert alert-{0}" role="alert">' + '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' + '<span data-notify="icon"></span> ' + '<span data-notify="title"><b>{1}</b></span><br> ' + '<span data-notify="message">{2}</span>' + '</div>'
				});
			},
			createWarningMessage: function createWarningMessage(title, message, options) {
				if (!options) options = {};
				this._notify('warn', title, message, options);
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

},{}]},{},[1]);
