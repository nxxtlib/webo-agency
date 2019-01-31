import Vue from 'vue';
import bugsnag from '@bugsnag/js';
import bugsnagVue from '@bugsnag/plugin-vue';

const bugsnagClient = bugsnag(<%= JSON.stringify(options) %>);

bugsnagClient.use(bugsnagVue, Vue);

export default (context, inject) => {
  inject('bugsnag', bugsnagClient)
}
