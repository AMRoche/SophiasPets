var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'slug', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	showOnMenu: { type: Boolean, default:false},
	menuTitle: { type: String, dependsOn: { showOnMenu: true } },
	menuOrder: { type: Types.Number, dependsOn: { showOnMenu:true } },
	gallery: { type: Boolean, default: true, dependsOn: { showOnMenu:true }, noedit: true},
	content: { type: Types.Markdown, wysiwyg: true, height: 500, dependsOn: { blog:false } },
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

Gallery.defaultColumns = 'name|20%, showOnMenu|20%, menuTitle|20%, images|20%';

Gallery.register();
