var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: {
		type: Types.LocalFile,
		required: false,
		index: true,
		dest: 'public/uploads/files/images/',
		format: function(item, file){
			return '<img src="/'+item.imagePath+file.filename+'" style="max-width: 400px">'
		}
	},
	content: {
		extended: { type: Types.Markdown, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	pets: { type: Types.Relationship, ref: 'Pet', many: true }
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
