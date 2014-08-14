(function () {
	var extend = _.extend;
	var app = function () {
		this.init();
	};

	extend(app.prototype,{
		requireConfig: function () {
			requirejs.config({
				baseUrl: '/',
				paths: {
					views: '/views',
					wbapp: '/wbapp'
				}
			});
			return this;
		},

		init: function () {
			this.Modules = new WBAppModuleController(this);
			this.requireConfig();
			this.loadCore();
		},

		loadCore: function () {
			this.Modules.require(
				[
					'wbapp:Models',
					'wbapp:Templates'
				],
				this.onCoreLoaded,
				this.onCoreLoadError
			);
		},

		onCoreLoaded: function () {
			//здесь пользовательская стратегия запуска приложения
			console.log('core loaded...');
		},

		onCoreLoadError: function (err) {
			console.log(err.message);
		},

		//SomeModule:Name -> some-module/name
		transformToPath: function (moduleName) {
			return moduleName.split(/(?=[A-Z])/).join('-').toLowerCase().split(':-').join('/');
		}
	});

	window.WBApp = app;
})();