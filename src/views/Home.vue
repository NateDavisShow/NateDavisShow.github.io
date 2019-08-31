<template lang="pug">
  b-container(fluid): b-container
    PodItem(
      title="Johnny rocks"
      date="09.08.06"
    )
</template>

<script>
import PodItem from "../components/ListPodcastItem";
export default {
  name: "Home",
  components: {
    PodItem
  }
};
</script>
