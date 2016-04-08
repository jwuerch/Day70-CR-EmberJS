import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  actions: {
    emptyFavoriteList() {
      this.get('favoriteList').empty();
    },
    removeFromFavorites(question) {
      this.get('favoriteList').remove(question);
    }
  }
});
