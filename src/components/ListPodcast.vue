<template lang="pug">
    b-container(fluid)
        PodItem(
            v-for="(item, index) in items",
            :episode="item.episode",
            :link="item.link",
            :img="item.img",
            :title="item.title",
            :description="item.description",
            :links="item.links"
            :date="item.date"
            :tan="index % 2 == 0"
        )
</template>

<script>
import PodItem from "./ListPodcastItem";
export default {
    name: "ListPodcast",
    components: {
        PodItem
    },
    data() {
        return {
            items: [
                {
                    episode: 1,
                    link: "https://www.google.com",
                    img: "",
                    title: "Test Podcast 1",
                    description: "Test Description 1",
                    date: "09.08.16",
                    links: []
                },
                {
                    episode: 2,
                    link: "https://www.google.com",
                    img: "",
                    title: "Test Podcast 2",
                    description: "Test Description 2",
                    date: "09.09.16",
                    links: []
                },
                {
                    episode: 3,
                    link: "https://www.google.com",
                    img: "",
                    title: "Test Podcast 3",
                    description: "Test Description 3",
                    date: "09.08.16",
                    links: []
                }
            ]
        }
    }
};
</script>

<style>

</style>