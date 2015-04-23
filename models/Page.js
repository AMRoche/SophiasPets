var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('Page', {
	map: { name: 'pageTitle' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Page.add({
	pageTitle: { type: String, required: true, initial:true },
	showOnMenu: { type: Boolean, required: true, default:false},
	menuTitle: { type: String, dependsOn: { showOnMenu:true } },
	menuOrder: { type: Number, dependsOn: { showOnMenu:true } },
	blog: { type: Boolean, required: true, default:false},
	content: { type: Types.Markdown, wysiwyg: true, height: 500, dependsOn: { blog:false } }
});

Page.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Page.defaultColumns = 'pageTitle|20%, showOnMenu|20%, menuTitle|20%';
Page.register();
