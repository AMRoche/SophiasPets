var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Pet Model
 * ==========
 */

var Pet = new keystone.List('Pet', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Pet.add({
	name: { type: String, required: true },
	species: { type: Types.Relationship, ref: 'species', many: false },
	image: {
		type: Types.LocalFile,
		dest: 'public/uploads/files/images/pets/',
		prefix: 'uploads/files/images/pets/'
	},
	notes: { type: Types.Html, wysiwyg: true, height: 150 }
});

Pet.relationship({ ref: 'Customer', path: 'pets' });
Pet.relationship({ ref: 'LogEntry', path: 'pet' });
Pet.relationship({ ref: 'Post', path: 'pets' });

Pet.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Pet.register();
