<template lang="pug"> 
  b-row(:class="{ content: tan }")
    b-col
    b-col: Content( :title="date" )
    b-col: Content( :title="title" )
    b-col: Content( title="Related Links" )
    b-col: Content( title="Share")
</template>

<script>
import Content from "./ListPodcastItemContent";
export default {
    name: "ListPodcastItem",
    components: {
      Content
    },
    props: {
      link: String,
      img: String,
      date: {
        type: String,
        required: true
      },
      episode: Number,
      title: {
        type: String,
        required: true
      },
      description: String,
      links: Array,
      tan: {
        type: Boolean,
        required: false,
        default: false
      }
    },
};
</script>

<style scoped>
.content {
  background-color: #f8f9fa;
  padding: 10px;
  min-height: 10em;
}
</style>
