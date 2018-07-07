import VueRouter from 'vue-router';
import Vue from 'vue';

import HeroList from '../views/heros/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';

Vue.use(VueRouter);

const router = new VueRouter({
   routes: [
      {name: 'heros', path: '/heros', component: HeroList},
      {name: 'weapons', path: '/weapons', component: WeaponList},
      {name: 'equips', path: '/equips', component: EquipList}
   ]
});


export default router;