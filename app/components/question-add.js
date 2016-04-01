import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('name') ? this.get('name') : "",
        author: this.get('author') ? this.get('author') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
