ContactManager.module("Courses", function(Courses, ContactManager, Backbone, Marionette, $, _)
{
	Courses.Course = Marionette.ItemView.extend({
		template: "#course-item",
		tagName: "tr"
	});

	Courses.Courses = Marionette.CompositeView.extend({
		template: "#course-list",
		tagName: "table",
		className: 'table table-hover',
		childView: Courses.Course,
		childViewContainer: 'tbody',		
	});

});