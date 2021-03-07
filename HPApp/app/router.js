import EmberRouter from '@ember/routing/router';
import config from 'hpapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('monster', function(){
    this.route('index', { path: '/'});
    this.route('details', { path: '/:monster_id' });
  });
});
