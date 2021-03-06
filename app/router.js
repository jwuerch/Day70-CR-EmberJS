import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: 'question/:question_id'});
  this.route('answer');
  this.route('sign-up');
  this.route('sign-in');
  this.route('welcome');
  this.route('favorite');
});

export default Router;
