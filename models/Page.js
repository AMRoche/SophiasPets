var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('Page', {
	map: { name: 'pageTitle' },
	autokey: { path: 'slug', from: 'pageTitle', unique: true }
});

Page.add({
	pageTitle: { type: String, required: true, initial:true },
	showOnMenu: { type: Boolean, default:false},
	mainPage: { type: Boolean, default:false, dependsOn: { showOnMenu: false } },
	blog: { type: Boolean, default:false},
	menuTitle: { type: String, dependsOn: { showOnMenu: true } },
	menuOrder: { type: Types.Number, dependsOn: { showOnMenu:true } },
	content: { type: Types.Markdown, wysiwyg: true, height: 500, dependsOn: { blog:false } }
});

Page.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Page.defaultColumns = 'pageTitle|20%, mainPage|20%, showOnMenu|20%, menuTitle|20%';
Page.register();
