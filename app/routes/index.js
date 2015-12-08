import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			liveStreams: this.store.findAll('live-stream')
		});
	},
});
