<template lang="pug"> 
  .content(:class="{ tan: tan }").flex.flex-space 
    Content.flex.flex-vertical-center
      a( :href='link' ).relative
        i.material-icons.overlay play_circle_outline
        img( :src='img' )
    Content( :title="date" )
      p {{ '#' + episode }}
    Content( :title="title" )
      p {{ description }}
    Content( title="Related Links" )
    Content( title="Share")
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

.overlay {
  position: absolute;
  display: block;
  width: 52px;
  height: 52px;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  font-size: 52px;
  color: #f8f9fa;
}

.overlay:hover {
  color: #f0f1f1;
}
</style>
