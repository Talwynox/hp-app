import Model, { attr, belongsTo } from '@ember-data/model';

export default class SkillModel extends Model {
  @belongsTo bonus;
  @attr('string') description;
  @attr('string') name;
}
