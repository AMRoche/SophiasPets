var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * LogEntry Model
 * ==========
 */

var LogEntry = new keystone.List('LogEntry', {
	autokey: { path: 'slug', from: 'title', unique: true }
});

LogEntry.add({
	pet: { type: Types.Relationship, ref: 'Pet', required: true, many: true, initial: true },
	customer: { type: Types.Relationship, ref: 'Customer', many: true, many: true, required: true, initial: false },
	title: { type: String },
	date: { type: Types.Datetime, default: Date.now, index: true },
	notes: { type: Types.Html, wysiwyg: true, height: 300 }
});

LogEntry.defaultColumns = 'date, pet|20%, customer|20%, title|20%';
LogEntry.register();
