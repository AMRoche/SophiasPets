var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Species Model
 * ==================
 */

var Species = new keystone.List('Species', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Species.add({
	name: { type: String, required: true }
});

Species.relationship({ ref: 'Pet', path: 'species' });

Species.register();
