import { Button } from 'vant';
const vant = {
  install(Vue: { component: (arg0: string, arg1: any) => void }) {
    Vue.component(Button.name, Button);
  },
};
export default vant;
