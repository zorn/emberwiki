import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
        addPage: function() {
            var newPage = this.store.createRecord('page', {
                title: this.get('title'),
                body:  this.get('body')
            });
            newPage.save();
            this.setProperties({
                title: '',
                body: ''
            });
            this.transitionToRoute('pages');
        }
    }
});
