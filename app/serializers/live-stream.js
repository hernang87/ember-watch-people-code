import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		var json = {
			data: []
		};

		payload.data.forEach((elem) => {
			var jsonElem = {
				id: elem.id,
				type: 'live-stream',
				attributes: elem				
			};

			json.data.push(jsonElem);
		});

		return json;
	}
});
