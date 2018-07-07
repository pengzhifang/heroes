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
         <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
      </form>
   </div>
</template>

<script>
export default {
   data() {
      return {
         formData: {
            name: '',
            gender: ''
         },
         heroId: -1
      }
   },
   created() {
      this.heroId = this.$route.params.id;
      this.loadData();
   },
   methods: {
      loadData() {
         this.$http
            .get(`heroes/${this.heroId}`)
            .then((res) => {
               if (res.status === 200) {
                  this.formData = res.data;
               }
            })
            .catch((err) => {
               console.log(err);;
            })
      },
      handleEdit() {
         this.$http
            .put(`heroes/${this.heroId}`, this.formData)
            .then((res) => {
               if (res.status === 200) {
                  this.$router.push({name: 'heros'});
               } else {
                  alert('修改失败');
               }
            })
      }
   }
}
</script>

<style>

</style>
