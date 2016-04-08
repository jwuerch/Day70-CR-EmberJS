import Ember from 'ember';

export default Ember.Route.extend({
  favoriteList: Ember.inject.service(),
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('/');
    },
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      })
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteAnswer(answer) {
      var question = answer.get('question');
      answer.destroyRecord().then(function() {
        question.save();
      });
      this.transitionTo('question', answer.get('question'));
    },
    addToFavorite(question) {
      this.get('favoriteList').add(question);
    }
  }
});
