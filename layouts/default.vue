<template>
    <div ref="main-box">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/layout/Header";
    import Footer from "../components/layout/Footer";
    export default {
        components: {Footer, Header},
        mounted() {
            if(window.innerWidth >= 1200) {
                document.documentElement.style.zoom = ((window.innerWidth / 1280) * 100) + '%';
            }
            else if (window.innerWidth < 1200){
                document.documentElement.style.zoom = ((window.innerWidth / 390) * 100) + '%';
            }
            console.log(window.innerWidth)
        },
        head: {
            title: "My Lab App" || "",
            htmlAttrs: {
                id: "html",  // it sets the language English
            },
        }
    }
</script>

<style scoped>

</style>