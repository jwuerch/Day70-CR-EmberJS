import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(question) {
      this.sendAction('upVote', question);
    },
    downVote(question) {
      this.sendAction('downVote', question);
    }
  }

});
