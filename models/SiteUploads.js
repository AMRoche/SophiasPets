var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * SiteUploads Model
 * =============
 */

var SiteUploads = new keystone.List('Site Uploads', {
	autokey: { from: 'name', path: 'slug', unique: true }
});

SiteUploads.add({
	name: { type: String, required: true, default: 'Site Uploads' },
	// images: {
	// 	type: Types.LocalFiles,
	// 	allowedTypes: [
	// 		'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'
	// 	],
	// 	required: false,
	// 	dest: 'public/uploads/files/images/',
	// 	format: function(item, file){
	// 		console.log(file);
	// 		return '<img src="../../'+file.filename+'" style="max-width: 100%">'
	// 	}
	// }
	images: { type: Types.CloudinaryImages, folder: 'sophiaspetcare/gallery/uploads'}
});

SiteUploads.defaultColumns = 'name|20%, showOnMenu|20%, menuTitle|20%, images|20%';

SiteUploads.register();
