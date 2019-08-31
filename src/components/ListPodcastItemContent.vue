<template lang="pug">
    div
        h3.h6(
            v-if=title
        ) {{title}}
        slot
</template>

<script>
export default {
    name: "ListPodcastItemContent",
    props: {
        title: String
    }
}
</script>
