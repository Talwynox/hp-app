import Model, { attr } from '@ember-data/model';

export default class RollModel extends Model {
  @attr('integer') diceAmount;
  @attr('integer') diceSize;
  @attr('integer') flatModifier;
}
