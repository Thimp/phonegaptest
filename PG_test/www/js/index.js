/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
*/


App = Ember.Application.create();

App.Router.map(function() {
  this.resource('overzicht', function(){});
  this.resource('detail', { path: '/detail/:detail_id'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return contentJSON;
  }
});

App.OverzichtRoute = Ember.Route.extend({
model: function() {
    return [
		{id:'1',naam:'test1',icon:'icoontje',tekst:'dit is de tekst van verhalen'},
		{id:'2',naam:'test2',icon:'icoontje',tekst:'dit is de tekst van te bezoeken'},
		{id:'3',naam:'test3',icon:'icoontje',tekst:'dit is de tekst van events'}
	];
  }
});

App.DetailIndexRoute = Ember.Route.extend();

var contentJSON = [
	{id:'1',naam:'verhalen',icon:'icoontje',tekst:'dit is de tekst van verhalen'},
	{id:'2',naam:'te bezoeken',icon:'icoontje',tekst:'dit is de tekst van te bezoeken'},
	{id:'3',naam:'events',icon:'icoontje',tekst:'dit is de tekst van events'},
	{id:'4',naam:'routes',icon:'icoontje',tekst:'dit is de tekst van routes'}
];
