<template lang="pug">
  social-sharing(:url="link" inline-template)
    div.network
      network(network="facebook")
        font-awesome-icon.share-icon.fb-blue(:icon="['fab', 'facebook']")
      network(network="linkedin")
        font-awesome-icon.share-icon.linkedin-blue(:icon="['fab', 'linkedin']")
      network(network="twitter")
        font-awesome-icon.share-icon.twitter-blue(:icon="['fab', 'twitter']")
      network(network="reddit")
        font-awesome-icon.share-icon.reddit-red(:icon="['fab', 'reddit']")
      network(network="pinterest")
        font-awesome-icon.share-icon.pinterest-red(:icon="['fab', 'pinterest']")
      network(network="telegram")
        font-awesome-icon.share-icon.telegram-blue(:icon="['fab', 'telegram']")
</template>

<script>
export default {
  name: "ListSocialShare",
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.share-icon {
  width: 1.5em !important;
  height: 1.5em !important;
}

.fb-blue {
  color: #3c5a99;
}

.fb-blue:hover {
  color: #4e71ba;
}

.linkedin-blue {
  color: #0072b1;
}

.linkedin-blue:hover {
  color: #008fdd;
}

.twitter-blue {
  color: #00acee;
}

.twitter-blue:hover {
  color: #2bc4ff;
}

.reddit-red {
  color: #ed001c;
}

.reddit-red:hover {
  color: #ff2943;
}

.pinterest-red {
  color: #c8232c;
}

.pinterest-red:hover {
  color: #df474f;
}

.telegram-blue {
  color: #0088cc;
}

.telegram-blue:hover {
  color: #00aaff;
}

.network span {
  margin: 5px;
  cursor: pointer;
}
</style>
