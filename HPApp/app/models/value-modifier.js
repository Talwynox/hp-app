import Model, { attr, belongsTo } from '@ember-data/model';

export default class ValueModifierModel extends Model {
  @attr('string') log;
  @attr('integer') modifier;
  @belongsTo roll;
  @attr('string') source;
  @attr('string') statReference;
  @attr('integer') statReferenceMultiplier;
}
