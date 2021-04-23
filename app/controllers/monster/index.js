import Ember from 'ember';
import config from 'hpapp/config/environment';

export default Ember.Controller.extend({
    imagehost: config.API.images,
});