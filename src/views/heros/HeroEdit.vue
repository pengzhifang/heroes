<template>
   <div>
      <h2 class="sub-header">Edit Hero</h2>
      <form>
         <div class="form-group">
         <label for="name">英雄名称</label>
         <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
         </div>
         <div class="form-group">
         <label for="sex">英雄性别</label>
         <input type="text" class="form-control" id="sex" placeholder="sex" v-model="formData.gender">
         </div> 
         <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
      </form>
   </div>
</template>

<script>
import axios from 'axios';
export default {
   data() {
      return {
         formData: {
            name: '',
            gender: ''
         }
      }
   }
}
</script>

<style>

</style>
