Momo = Ember.Application.create();

Momo.Router.map(function(){

});

Momo.IndexRoute = Ember.Route.extend({
	model: function(){
		return ['red', 'yellow', 'blue'];
	}
});

Momo.IndexController = Ember.Controller.extend({
	hello: "Nyanpasu"
})