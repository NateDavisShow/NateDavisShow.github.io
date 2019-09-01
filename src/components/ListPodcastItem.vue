<template lang="pug"> 
  .content(:class="{ tan: tan }").flex.flex-space 
    Content.flex.flex-vertical-center
      a( :href='link' )
        i.material-icons play_circle_outline
        img( :src='img' )
    Content( :title="date" )
      p {{ '#' + episode }}
    Content( :title="title" )
      p {{ description }}
    Content( title="Related Links" )
    Content( title="Share")
</template>

<script>
import "material-design-icons";
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

.content p {
  font-size: .9rem;
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

.flex-vertical-center {
  flex-direction: column;
  justify-content: center;
}

.flex-space {
  justify-content: space-between;
}
</style>
