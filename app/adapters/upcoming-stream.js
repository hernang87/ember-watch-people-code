import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	findAll(store, type, sinceToken) {
		var url = this.store.adapterFor('application').get('host') + '/streams/upcoming';
		return Ember.$.ajax({
			type: 'GET',
			url: url
		});
	}	
});
