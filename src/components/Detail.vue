<template>
  <div>
    <div>
      <button class="btn btn-default" @click="goBack">Back</button>
      <button class="btn btn-default" @click="goTo(2)">go to 2</button>
      <button class="btn btn-default" @click="goTo(3)">go to 3</button>
    </div>
    <hr>
    <div v-if="!isLoading">
      <form class="form form-horizontal">
        <div class="form-group">
          <label for="" class="control-label col-md-3">ID</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.id" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">Name</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.name" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">price</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.price" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">Publish Year</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.publishYear" readonly>
          </div>
        </div>
      </form>
    </div>

    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import { getObjectById } from '../services/ObjectService';
import { Loading } from './common';

export default {
  name: 'Detail',
  data() {
    return {
      objId: null,
      object: null,
      isLoading: true,
    }
  },
  components: {
    Loading
  },
  methods: {
    initialize: function() {
      this.objId = this.$route.params.id;
      this.getObj();
    },
    getObj: function() {
      const vm = this;
      vm.isLoading = true;
      getObjectById(this.objId).then(({data}) => {
        vm.object = data;
        vm.isLoading = !data;
      });
    },
    goBack: function () {
      this.$router.push('/list');
      // this.$router.go(-1);
    },
    goTo: function (id) {
      // string url
      // this.$router.push(`/detail/${id}`);

      // path with query object
      // this.$router.push({path: `/detail/${id}`, query: {id: "4"}});

      // named route
      this.$router.push({name: 'detail', params: {id}});
    },
  },
  created() {
    console.log('created');
  },
  mounted() {
    this.initialize();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.initialize();
  },
  // beforeRouteLeave (to, from, next) {
  //   const answer = confirm('Do u really want to leave?');
  //   if (answer) {
  //     next()
  //   } else {
  //     next(false)
  //   }
  // },
  // watch: {
  //   $route() {
  //     this.initialize();
  //   }
  // },
}
</script>

<style>
</style>