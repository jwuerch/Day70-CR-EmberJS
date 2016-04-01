import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        note: this.get('note'),
        answers: this.get('answers'),
        rank: this.get('rank') + 1,
      };
      this.sendAction('upvote', question, params);
    }
  }
});
