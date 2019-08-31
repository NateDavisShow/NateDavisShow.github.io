<template lang="pug">
    div
        h3(
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
