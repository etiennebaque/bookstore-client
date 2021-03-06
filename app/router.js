import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signed-in', function(){
    this.route('books', { path: '/' });
    this.route('author', { path: '/author/:author_id' });
  });
});

export default Router;
