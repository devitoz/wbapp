(function () {
	var extend = _.extend;
	var app = function () {
		this.init();
	};

	extend(app.prototype,{
		init: function () {
			this.Modules = new wbappModuleController(this);
			this.requireConfig();
			this.loadCoreMods();
		},

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

		loadCoreMods: function () {
			require(['views/common/base'], function () {
				console.log('core mods loaded...');
			});
		}
	});

	window.wbapp = app;
})();