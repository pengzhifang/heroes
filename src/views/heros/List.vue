<template>
   <div>
      <h2 class="sub-header">英雄列表</h2>
      <!-- <a class="btn btn-success" href="add.html">Add</a> -->
      <router-link class="btn btn-success" :to="{name: 'heroadd'}">Add</router-link>
      <div class="table-responsive">
         <table class="table table-striped">
            <thead>
               <tr>
               <th>#</th>
               <th>英雄姓名</th>
               <th>英雄性别</th>
               <th>操作</th>
               </tr>
            </thead>
            <tbody>
               <tr :key="item.id" v-for="(item, index) in list">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.gender }}</td>
                  <td>
                     <!-- <a href="edit.html">edit</a> -->
                     <router-link :to="{name: 'heroedit', params: {id: item.id}}">edit</router-link>
                     &nbsp;&nbsp;
                     <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                     <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                  </td>
               </tr>
               
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>

export default {
   data() {
      return {
         list:[]
      }
   },
   created() {
		 this.loadData();
	},
   methods: {
      loadData() {
         this.$http
            .get('heroes')
            .then((res) => {
               // console.log(res.data);
               this.list = res.data;
            })
            .catch((err) => {
               console.log(err);
            })
      },
      handleDelete(id) {
			if (!confirm('您确定删除吗')) {
				return;
			}
         this.$http
            .delete(`heroes/${id}`)
            .then((res) => {
					this.loadData();
				})
				.catch((err) => {
					console.log(err);
				})
      }
   }
}
</script>

<style>

</style>

