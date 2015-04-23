var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Customer Model
 * ==========
 */

var Customer = new keystone.List('Customer', {
	map: { name: 'fullName' },
	autokey: { path: 'slug', from: 'fullName', unique: true }
});

Customer.add({
	fullName: { type: String, required: true, initial: true },
	preferredName: { type: String},
	pets: { type: Types.Relationship, ref: 'Pet', many: true, initial: false, required: true },
	mobilePhoneNumber: { type: String },
	workPhoneNumber: { type: String },
	emailAddress: { type: String },
	homeAddress: { type: Types.Text },
	notes: { type: Types.Html, wysiwyg: true, height: 150 }
});

Customer.relationship({ ref: 'LogEntry', path: 'customer' });

Customer.defaultColumns = 'fullName, pets|%20, preferredName|20%, mobilePhoneNumber|20%';
Customer.register();
