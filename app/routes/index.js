import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			liveStreams: this.store.findAll('live-stream'),
			upcomingStreams: this.store.findAll('upcoming-stream')
		});
	},
	setupController(controller, model) {
		controller.set('content', model);
	}
});
