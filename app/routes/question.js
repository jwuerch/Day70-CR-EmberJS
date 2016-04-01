import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('note') ? this.get('note') : ""
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
