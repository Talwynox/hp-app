import JSONSerializer  from '@ember-data/serializer/json';
import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';

export default JSONSerializer.extend(DataTableSerializerMixin, {
    primaryKey: 'name'
});