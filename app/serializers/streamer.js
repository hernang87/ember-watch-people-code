import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		var json = {
			data: {
				id: payload.data.name,
				type: 'streamer',
				attributes: payload.data
			}
		};

		return json;
	}
});
