import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.firstWord = 'Written';
    this.lastWord = 'by';
  },

  fullWord: Ember.computed('firstWord', 'lastWord', function() {
    return `${this.get('firstWord')} ${this.get('lastWord')}`;
  }),
  actions: {
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer)
    }
  }
});
