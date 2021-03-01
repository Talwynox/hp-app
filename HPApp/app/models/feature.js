import Model, { attr } from '@ember-data/model';

export default class FeatureModel extends Model {
  @attr('string') description;
  @attr('string') name;
}
