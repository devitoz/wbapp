wbappDefine('Views:Pages:ArtistPage', function (app) {
	this.use('Models:Profile');
	this.use('Views:Common:Base');
	this.configure({
		template: 'Pages:ArtistPage'
	});
	return app.Views.get('Views:Common:Base').extend({
		initialize: function () {
			console.log('wow it\'s working');
		}
	});
});