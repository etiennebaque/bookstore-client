import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

  blur: false,

  getBlurring: computed('blur', function() {
    if (this.get('blur')){
      return 'blur-background'
    }else{
      return ''
    }
  }),


});
