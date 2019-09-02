<template lang="pug">
    b-navbar.content(
        toggleable="sm",
        type="dark",
        variant="dark"
    )
        b-navbar-toggle(target="nav-collapse")
        b-collapse#nav-collapse(is-nav)
            b-nav.w-100(align="center" tabs) 
                b-nav-item(ref="#home" active) Home
                b-nav-item(ref="#contact") Contact
</template>

<script>
export default {
  name: "TheNavBar"
};
</script>

<style>
#nav-collapse ul {
  border: none !important;
}

.navbar {
  padding-bottom: 0px !important;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#020202+0,030303+25,040404+50&0.8+0,0.45+100 */
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 1, 1, 0.9) 50%,
    rgba(2, 2, 2, 0.8) 75%,
    rgba(4, 4, 4, 0.7) 100%
  ) !important; /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 1, 1, 0.9) 50%,
    rgba(2, 2, 2, 0.8) 75%,
    rgba(4, 4, 4, 0.7) 100%
  ) !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 1, 1, 0.9) 50%,
    rgba(2, 2, 2, 0.8) 75%,
    rgba(4, 4, 4, 0.7) 100%
  ) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc020202', endColorstr='#73040404',GradientType=0 ); /* IE6-9 */

  box-shadow: 0 4px 2px -2px rgba(4, 4, 4, 0.3);
}

.navbar .navbar-toggler {
  margin-bottom: 8px;
}
</style>
