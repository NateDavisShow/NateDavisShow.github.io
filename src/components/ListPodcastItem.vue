<template lang="pug"> 
  b-row.content(:class="{ tan: tan }")
    b-col.flex.flex-center(cols=2): a( :href='link' ): img( :src='img' )
    b-col(cols=1): Content( :title="date" )
      p {{ '#' + episode }}
    b-col: Content( :title="title" )
      p {{ description }}
    b-col: Content( title="Related Links" )
    b-col(cols=2): Content( title="Share")
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
    img: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    episode: Number,
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    links: Array,
    tan: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.content {
  padding: 10px;
  min-height: 120px;
}

.tan {
  background-color: #f8f9fa;
}

.content img {
  max-width: 120px;
  max-height: 70px;
}

.flex {
  display: flex
}

.flex-center {
  flex-direction: column;
  justify-content: center;
}
</style>
