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
	images: {
		type: Types.LocalFiles,
		required: false,
		dest: 'public/uploads/files/images/',
		format: function(item, file){
			return '<img src="/'+item.imagePath+file.filename+'" style="max-width: 400px">'
		}
	}
});

Gallery.register();
