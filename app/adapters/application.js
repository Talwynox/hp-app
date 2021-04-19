import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'hpapp/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = config.API.endpoint;
    pathForType(type) {
        return type;
    }
}
