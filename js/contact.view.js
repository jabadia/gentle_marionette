ContactManager.ContactView = Marionette.ItemView.extend({
	template: '#contact-template',
	events: {
		'click p': 'alertPhoneNumber',
	},

	alertPhoneNumber: function(e)
	{
		alert(this.model.escape('phoneNumber'));
	}
})
