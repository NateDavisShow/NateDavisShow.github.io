<template lang="pug">
    #banner
</template>

<script>
export default {
    name: "TheBanner",
};
</script>

<style>
    #banner { 
        position: relative;
        z-index: 2;
        width: 100%;
        height: 70px;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&1+0,1+87,0.8+100 */
        background: -moz-radial-gradient(center, ellipse cover,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 87%, rgba(0,0,0,0.8) 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 87%,rgba(0,0,0,0.8) 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 87%,rgba(0,0,0,0.8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#cc000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    }

    #banner::after {
        content: "";
        background: url(../assets/banner.jpg) no-repeat center center;
        background-size: contain;
        opacity: 0.9;
        top: 0px;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-position: center;
        z-index: 1;
    }
</style>