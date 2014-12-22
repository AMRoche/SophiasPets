var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: {
		type: Types.LocalFile,
		required: false,
		index: true,
		dest: 'public/uploads/files/images/',
		format: function(item, file){
			return '<img src="/'+item.imagePath+file.filename+'" style="max-width: 400px">'
		}
	},
	images: {
		type: Types.LocalFile,
		required: false,
		index: true,
		dest: 'public/uploads/files/images/',
		format: function(item, file){
			return '<img src="/'+item.imagePath+file.filename+'" style="max-width: 400px">'
		}
	}
});

Gallery.register();
