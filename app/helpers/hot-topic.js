import Ember from 'ember';

export function favoriteCount(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><em> hot topic</em>');
  }
}

export default Ember.Helper.helper(favoriteCount);
