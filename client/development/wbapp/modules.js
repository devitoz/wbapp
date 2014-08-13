(function () {
	var app;
	var wbModuleController = function(mainApp){
		app = mainApp;
		this.init();
	};
	_.extend(wbModuleController.prototype, {
		define: function (module, fn) {
			console.log(fn);
		},
		init: function () {
			console.log(new Date().getMilliseconds());
		}
	});
	window.wbappModuleController = wbModuleController;
	window.wbappDefine = wbModuleController.prototype.define;
})();