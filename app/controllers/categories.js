var App = Ember.Application.create();

App.Person = Ember.Object.extend({
    id: null,
    firstName: null,
    lastName: null,

    fullName: function() {
        return this.get('firstName') + " " + this.get('lastName');
    }.property('firstName', 'lastName').cacheable()
});

App.selectedPersonController = Ember.Object.create({
    person: null
});

App.peopleController = Ember.ArrayController.create({
    content: [
        App.Person.create({id: 1, firstName: 'Yehuda', lastName: 'Katz'}),
        App.Person.create({id: 2, firstName: 'Tom', lastName: 'Dale'}),
        App.Person.create({id: 3, firstName: 'Peter', lastName: 'Wagenet'}),
        App.Person.create({id: 4, firstName: 'Erik', lastName: 'Bryn'})
    ]
});
