import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	'host': 'http://watchpeoplecode.com/api/v1'
});
