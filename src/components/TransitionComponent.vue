<template>
  <div>
    <button class="btn btn-default" @click="show = !show">Toggle</button>
    <transition name="slide-fade">
      <p v-if="show" key="p1">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionComponent",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>