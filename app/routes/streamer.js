import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('streamer', params.streamer).then((data) => {
			console.log('Streamer exists');
			return data;
		});
	}, 
	setupController(controller, model) {
		controller.set('content', model);
	}
});
