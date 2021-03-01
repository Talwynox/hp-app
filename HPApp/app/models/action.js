import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActionModel extends Model {
  @belongsTo attack;
  @attr('string') description;
  @attr('string') name;
}
