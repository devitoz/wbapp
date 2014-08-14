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
			this.Modules = new wbappModuleController(this);
			this.requireConfig();
			this.loadCoreMods();
		},

		loadCoreMods: function () {
			this.Modules.require(
				[
					'wbapp:Models',
					'wbapp:Templates'
				],
				this.onCoreLoaded,
				function (err) {
					console.log(err.message);
				}
			);
		},

		onCoreLoaded: function () {
			console.log('core loaded...');
		},

		//Transform CamelCase:With:Colons to camel-case/with/colons
		transformToPath: function (moduleName) {
			return moduleName.split(/(?=[A-Z])/).join('-').toLowerCase().split(':-').join('/');
		}
	});

	window.wbapp = app;
})();