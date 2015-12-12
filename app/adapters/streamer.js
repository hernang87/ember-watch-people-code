import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	findRecord(store, type, id, snapshot) {
		var url = this.store.adapterFor('application').get('host') + '/streamers/' + id;

		return new Ember.RSVP.Promise((resolve, reject) => {
      		Ember.$.getJSON(url).then((data) => {
	        	Ember.run(null, resolve, data);
	      	}, (jqXHR) => {
	        	jqXHR.then = null;
	        	Ember.run(null, reject, jqXHR);
	      	});
	    });
	}
});
