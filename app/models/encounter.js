import Model, { attr, hasMany } from '@ember-data/model';

export default class EncounterModel extends Model {
  @attr('string') name;
  @attr('number') challengeRating;
  @attr('number') armorClass;
  @attr('number') hitPoints;
  @attr('number') strength;
  @attr('number') dexterity;
  @attr('number') constitution;
  @attr('number') intelligence;
  @attr('number') wisdom;
  @attr('number') charisma;
  @attr('number') moveSpeed;
  @attr actions;
  @attr features;
  @attr resistances;
  @attr resources;
  @attr skills;
}
