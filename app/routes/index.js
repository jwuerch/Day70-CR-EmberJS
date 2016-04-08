import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    upVote(question) {
      var currentRank = question.get('rank');
      currentRank++;
      question.set('rank', currentRank);
      question.save();
    },
    downVote(question) {
      if (question.get('rank') !== 0) {
        var currentRank = question.get('rank');
        currentRank--;
        question.set('rank', currentRank);
        question.save();
      }
    }
  }

});
