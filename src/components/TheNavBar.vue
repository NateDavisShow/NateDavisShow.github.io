<template lang="pug">
    b-navbar.content(
        toggleable="sm",
        type="light",
        variant="light"
    )
        b-navbar-toggle(target="nav-collapse")
        b-collapse#nav-collapse(is-nav)
            b-nav.w-100(align="center" tabs) 
                b-nav-item(ref="#home") Home
                b-nav-item(ref="#contact") Contact
</template>

<script>
export default {
    name: "TheNavBar"
};
</script>
