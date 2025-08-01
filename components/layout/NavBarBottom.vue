<template>
    <div class="btm-nav bg-white pt-3 px-3" @click="test()">
        <ul class="list-unstyled d-flex justify-content-between">
            <li v-for="(btn,i) in buttons" :key="i" style="width: 100px">
                <router-link class="text-decoration-none" :to="`/${btn.link}`">
                    <div class="d-flex flex-column text-center align-items-center"
                         :class="$route.name == btn.linkName?'text-sky':'text-secondary'">
                        <n-badge class="mb-1" :class="$route.name == btn.linkName?'text-sky':'text-secondary'"
                                 :value="btn.notifCount">
                            <Icon size="25" :name="btn.icon"/>
                        </n-badge>
                        <h1 class="fSize-10">
                            {{btn.name}}
                        </h1>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBarBottom",
        data() {
            return {
                buttons: [
                    {
                        icon: 'material-symbols:category',
                        name: 'Categories',
                        notifCount: 0,
                        linkName:'index',
                        link: '',
                    },
                    {
                        icon: 'ic:baseline-search',
                        name: 'Search',
                        notifCount: 0,
                        linkName:'',
                        link: ''
                    },
                    {
                        icon: 'mdi:cards-heart-outline',
                        name: 'Wishlist',
                        notifCount: 1,
                        linkName:'',
                        link: ''
                    },
                    {
                        icon: 'mingcute:shopping-bag-1-line',
                        name: 'Basket',
                        notifCount: 3,
                        linkName:'',
                        link: ''
                    },
                    {
                        icon: 'material-symbols:person-outline-rounded',
                        name: 'Account',
                        notifCount: 0,
                        linkName:'account',
                        link: 'account'
                    },
                ]
            }
        },
        methods:{
            test(){
                console.log(this.$route.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btm-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
    }
</style>