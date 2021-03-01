import Model, { attr, hasMany } from '@ember-data/model';

export default class EncounterModel extends Model {
  @hasMany actions;
  @hasMany features;
  @attr('string') name;
  @attr('object') resistances;
  @hasMany resources;
  @hasMany skills;
  @hasMany stats;
}
