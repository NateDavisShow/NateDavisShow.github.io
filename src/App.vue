<template lang="pug">
  #app
    TheMediaPlayer
    TheNavBar
    router-view
</template>

<script>
import TheNavBar from "./components/TheNavBar";
import TheMediaPlayer from "./components/TheMediaPlayer";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheMediaPlayer
  }
};
</script>
