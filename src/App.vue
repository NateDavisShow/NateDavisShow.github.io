<template lang="pug">
  #app
    TheBanner
    TheNavBar.mb-4.pb-sm-0
    router-view
</template>

<script>
import TheNavBar from "./components/TheNavBar";
import TheBanner from "./components/TheBanner";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheBanner
  }
};
</script>
