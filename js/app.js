var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
});

ContactManager.on("start", function()
{
	console.log("[start] app initialized");

	ContactManager.ContactsApp.List.Controller.listContacts();
})