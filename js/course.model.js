
//https://api.coursera.org/api/catalog.v1/courses

/**/

ContactManager.module("Entities", function(Entities,ContactManager,Backbone,Marionette,$,_)
{
	Entities.Course = Backbone.Model.extend({

	});

	Entities.Courses = Backbone.Collection.extend({

		model: Entities.Course,
		url: 'https://api.coursera.org/api/catalog.v1/courses',

		parse: function(resp,xhr)
		{
			return resp.elements;
		}
	});

});

//*/