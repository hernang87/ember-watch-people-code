import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		this.store.findRecord('streamer', params.streamer).then((data) => {
			console.log('OK');
		});
	}
});
