(function () {
	var app;
	var extend = _.extend;
	var Module = function (fn) {
		this.modules = {};
	  this.fn = fn;
		this.implementation = fn.call(this);
	};
	extend(Module.prototype, {
		use: function (module) {

		},
		configure: function (options) {

		}
	});


	var wbModuleController = function(mainApp){
		app = mainApp;
		this.init();
	};
	extend(wbModuleController.prototype, {
		define: function (module, fn) {
			debugger;
			this.modules[module] = new Module(fn);
			console.log(module + ' defined...');
		},
		init: function () {
			console.log('module controller initialized...');
		}

	});
	window.wbappModuleController = wbModuleController;
	window.wbappDefine = wbModuleController.prototype.define;
})();