<template>
   <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
      <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
      <li><a href="/heros">Reports</a></li>
      <li><a href="/weapons">Analytics</a></li>
      <li><a href="/equips">Export</a></li> -->
      <router-link tag="li" to="/heros">
         <a href="#">英雄列表</a>
      </router-link>
      <router-link tag="li" to="/weapons">
         <a href="#">武器列表</a>
      </router-link>
      <router-link tag="li" to="/equips">
         <a href="#">装备列表</a>
      </router-link>
      </ul>
   </div>
</template>

<script>
export default{
   data() {
      return {
         
      }
   }
}
</script>

<style>

</style>
