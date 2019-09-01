<template lang="pug"> 
  b-row.content(:class="{ tan: tan, white: !tan }")
    b-col.col-6.col-md-2: Content.flex.flex-vertical-center
      a( :href='link' ).relative.img-link
        i.material-icons.overlay play_circle_outline
        img( :src='img' )
    b-col.d-none.d-md-block.col-md-2: Content( :title="date" )
      p {{ '#' + episode }}
    b-col.col-6.col-md-4: Content( :title="title" )
      p {{ description }}
    b-col.col-12.p-2.m-2.d-block.d-md-none
    b-col.col-6.col-md-2: Content( title="Related Links" )
    b-col.col-6.col-md-2: Content( title="Share")
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

.white {
  background-color: #fff;
}

.content .img-link {
  max-width: 120px;
  max-height: 70px;
  margin-left: 20px;
  margin-right: 20px;
}

.flex {
  display: flex
}

.flex-vertical-center {
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
