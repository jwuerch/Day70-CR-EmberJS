import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rank:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),
  actions: {
    upVote(question) {
      this.sendAction('upVote', question);
    },
    downVote(question) {
      this.sendAction('downVote', question);
    }
  }

});
