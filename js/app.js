var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
});

ContactManager.ContactView = Marionette.ItemView.extend({
	template: '#contact-template',
})

ContactManager.on("start", function()
{
	console.log("[start] app initialized");

	var alice = new ContactManager.Contact({
		firstName: 'Alice',
		lastName: 'Arten',
		phoneNumber: '555-1234'
	});

	var aliceView = new ContactManager.ContactView({
		model: alice
	});

	ContactManager.mainRegion.show(aliceView);
})