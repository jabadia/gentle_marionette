var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
});

ContactManager.on("start", function()
{
	console.log("[start] app initialized");

	var contacts = new ContactManager.Entities.ContactCollection([
	{	firstName: 'Bob',		lastName: 'Nolan',		phoneNumber: '555-1111'	},
	{	firstName: 'Alice',		lastName: 'WhoTheFuck',	phoneNumber: '555-2222' },
	{	firstName: 'Charlie',	lastName: 'Campbell',	phoneNumber: '555-3333' },
	{	firstName: 'Alice',		lastName: 'The Best',	phoneNumber: '555-3333' }
	]);

	console.log(contacts);

	var contactsListView = new ContactManager.ContactCollectionView({
		collection: contacts
	})

	ContactManager.mainRegion.show(contactsListView);
})