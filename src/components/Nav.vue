<template>
  <div>
    <ul class="nav nav-tab nav-stacked">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{link.label}}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      links: []
    };
  },
  mounted() {
    this.links = [
      {
        label: "List page",
        to: "/list"
      },
      {
        label: "HelloWorld page",
        to: "/helloWorld"
      },
      {
        label: "Route with param",
        to: "/detail/1"
      },
      {
        label: "Route with param by named route",
        to: {
          name: "detail",
          params: { id: "2" }
        }
      },
      {
        label: "Route with query",
        to: "/detail/1?name=iphone7"
      },
      {
        label: "Pass props to route components",
        to: "/detailGetIdByProps/1"
      },
      {
        label: "Pass props(Object) to route components",
        to: "/detailGetIdAndObjByProps/1"
      },
      {
        label: "Transition",
        to: "/transition"
      }
    ];
  }
};
</script>