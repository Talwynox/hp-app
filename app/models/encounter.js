import Model, { attr, hasMany } from '@ember-data/model';

export default class EncounterModel extends Model {
  @attr('string') name;
  @attr('number') challengeRating;
  @attr('number') armorClass;
  @attr actions;
  @attr features;
  @attr resistances;
  @attr resources;
  @attr skills;
  @attr stats;
}
