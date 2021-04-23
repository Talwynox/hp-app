export default Ember.Helper.helper(function(params) {
    let value = params[0];
    value = Math.floor(value / 2 - 5)

    return value;
  });