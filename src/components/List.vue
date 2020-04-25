<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr class="info">
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left" v-for="(obj, index) in objectList" :key="index">
          <td>{{obj.id}}</td>
          <td>
            <router-link :to="'detail/' + obj.id">{{obj.name}}</router-link>
            &nbsp;
            <router-link :to="'' + obj.id" append>{{obj.name}}(use append)</router-link>
          </td>
          <td>{{obj.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getObjectList } from '../services/ObjectService';

export default {
  name: 'List',
  data() {
    return {
      objectList: []
    }
  },
  methods: {
    getObjList: function() {
      const vm = this;
      getObjectList().then(function ({data}) {
        vm.objectList = data;
      });
    }
  },
  mounted() {
    this.getObjList();
  },
}
</script>