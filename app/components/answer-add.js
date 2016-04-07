import Ember from 'ember';

export default Ember.Component.extend({
  askAnswerForm: false,
  actions: {
    showAskAnswerForm() {
      this.set('askAnswerForm', true);
    },
    saveAnswer() {
        var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        question: this.get('question') ? this.get('question') : "",
      };
      this.set('askAnswerForm', false);
      this.sendAction('saveAnswer', params)
    }
  }
});
