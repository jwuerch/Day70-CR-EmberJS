import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  actions: {
    clearFavorites() {
      this.get('favoriteList').empty();
    },
    removeFromFavorites(index) {
      this.get('favoriteList').remove(index);
    }
  }
});
