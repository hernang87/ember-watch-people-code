import { moduleForModel, test } from 'ember-qunit';

moduleForModel('live-streams', 'Unit | Serializer | live streams', {
  // Specify the other units that are required for this test.
  needs: ['serializer:live-streams']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
