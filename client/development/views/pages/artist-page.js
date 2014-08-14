wbappDefine('Views:Pages:ArtistPage', function (app) {
	this.use('Models:Artist');
	this.use('Views:Common:Base');
	this.configure({
		template: 'Pages:ArtistPage',
		model: app.Models.get('Models:Artist')
	});
	return function () {
		return app.Views.get('Views:Common:Base').extend({
			initialize: function () {
				this.render();
			},
			render: function () {
				var html = this.template.render(this.model.toJSON());
				this.$el.html(html);
				return this;
			}
		})
	};
});
