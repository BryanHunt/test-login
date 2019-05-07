import Component from '@ember/component';
import layout from '../templates/components/login-form';
import { inject as service } from "@ember/service";

export default Component.extend({
  layout,
  session: service(),

  actions: {
    login() {
      var credentials = this.getProperties('userId', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
  },
});
