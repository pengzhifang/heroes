import VueRouter from 'vue-router';
import Vue from 'vue';

import HeroList from '../views/heros/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';
import HeroAdd from '../views/heros/HeroAdd.vue';
import HeroEdit from '../views/heros/HeroEdit.vue';

Vue.use(VueRouter);

const router = new VueRouter({
   // linkExactActiveClass: 'active',
   linkActiveClass: 'active',
   routes: [
      {name: 'home', path: '/', redirect: '/heros'},
      {name: 'heros', path: '/heros', component: HeroList},
      {name: 'weapons', path: '/weapons', component: WeaponList},
      {name: 'equips', path: '/equips', component: EquipList},
      {name: 'heroadd', path: '/heros/add', component: HeroAdd},
      {name: 'heroedit', path: '/heros/edit/:id', component: HeroEdit}
   ]
});


export default router;