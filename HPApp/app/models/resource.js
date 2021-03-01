import Model, { attr, hasMany } from '@ember-data/model';

export default class ResourceModel extends Model {
  @attr('integer') baseValue;
  @attr('integer') currentValue;
  @attr('integer') maxValue;
  @hasMany modifiers;
  @attr('string') name;
}
