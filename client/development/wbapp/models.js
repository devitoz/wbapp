wbappDefine('wbapp:ModelController', function (app) {
	return function () {
		return {
			models: {},
			get: function (modelName) {
				return this.models[modelName];
			},
			set: function (modelName, impl) {
				this.models[modelName] = impl;
			}
		};
	}
});