import Ember from 'ember';

export default Ember.Service.extend({
  favoriteList: [],

  add(favorite) {
    this.get('favoriteList').pushObject(favorite);
  },
  delete(favorite) {
    this.get('favoriteList').removeObject(favorite);
  }
});
