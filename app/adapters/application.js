import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = process.env.BACKEND_ENDPOINT;
    pathForType(type) {
        return type;
    }
}
