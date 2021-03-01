import Model, { attr, hasMany } from '@ember-data/model';

export default class StatModel extends Model {
  @attr('integer') baseValue;
  @hasMany modifiers;
  @attr('string') name;
  @attr('integer') value;
}
