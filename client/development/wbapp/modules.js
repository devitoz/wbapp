(function () {
	var app;
	var extend = _.extend;

	//------- Module API
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


	//--------- Controller API
	var Controller = function(mainApp){
		app = mainApp;
		this.modules = {};
		this.init();
	};
	extend(Controller.prototype, {
		define: function (module, fn) {
			this.modules[module] = new Module(fn);
			console.log(module + ' defined...');
		},

		init: function () {
			window.wbappDefine = this.define.bind(this);
			console.log('module controller initialized...');
		},

		//requirejs wrapper
		require: function (modules, cbk, err) {
			for (var i = 0; i < modules.length; i++) {
				modules[i] = app.transformToPath(modules[i]);
			}
			require(modules, cbk, err);
		}
	});
	window.WBAppModuleController = Controller;
})();