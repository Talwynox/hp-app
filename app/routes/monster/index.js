import Route from '@ember/routing/route';

export default Route.extend({
    // beforeModel() {
    // this.replaceWith('encounter');
    // },

     model() {
        return this.store.findAll('encounter');
    }
});