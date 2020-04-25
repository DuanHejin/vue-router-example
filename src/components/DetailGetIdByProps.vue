<template>
  <div>
    <div class="header">
      <div class="btn-wrap">
        <button class="btn btn-default" @click="goBack">Back</button>
        <button class="btn btn-default" @click="goTo(2)">go to 2</button>
        <button class="btn btn-default" @click="goTo(3)">go to 3</button>
      </div>

      <div class="header-title text-center">
        <h2>This is detail page with featching data before navigation.</h2>
      </div>
    </div>
    <hr />
    <div v-if="!isLoading">
      <form class="form form-horizontal">
        <div class="form-group">
          <label for class="control-label col-md-3">ID</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.id" readonly />
          </div>
        </div>

        <div class="form-group">
          <label for class="control-label col-md-3">Name</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.name" readonly />
          </div>
        </div>

        <div class="form-group">
          <label for class="control-label col-md-3">price</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.price" readonly />
          </div>
        </div>

        <div class="form-group">
          <label for class="control-label col-md-3">Publish Year</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.publishYear" readonly />
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
import { getObjectById } from "../services/ObjectService";
import { Loading } from "./common";

export default {
  name: "DetailGetIdByProps",
  data() {
    return {
      object: null,
      objId: null,
      isLoading: true,
    };
  },
  components: {
    Loading
  },
  methods: {
    goBack: function() {
      this.$router.push("/list");
    },
    goTo: function(objId) {
      // named route
      this.$router.push({ name: "detailGetIdByProps", params: { objId } });
    },
    setData: function(data) {
      const { objId, object } = data;
      this.objId = objId;
      this.object = object;
      this.isLoading = !this.object;
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeRouteEnter(to, from, next) {
    const objId = to.params.objId;
    getObjectById(objId).then(({ data }) => {
      next(vm =>
        vm.setData({
          objId,
          object: data
        })
      );
    });
  },
  beforeRouteUpdate(to, from, next) {
    const objId = to.params.objId;
    getObjectById(objId).then(({ data }) => {
      this.setData({
        objId,
        object: data
      });
    });
    this.isLoading = true;
    next();
  }
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;

    .header-title {
      flex: 1;
    }
  }
</style>