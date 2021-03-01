import Model, { attr, hasMany } from '@ember-data/model';

export default class EncounterModel extends Model {
  @attr actions;
  @attr features;
  @attr('string') name;
  @attr resistances;
  @attr resources;
  @attr skills;
  @attr stats;
}
