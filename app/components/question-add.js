import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        note: this.get('note') ? this.get('note') : "",
        rank: 0,
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
