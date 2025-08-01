<template>
    <div class="footer bg-deep-violet text-white py-4" id="footer" ref="footer">
        <div class="container">
            <div class="d-flex flex-column flex-lg-row justify-content-between">
                <div>
                    <img src="@/static/Logo-dark.png" alt="">
                </div>
                <div>
                    <ul class="d-flex flex-column flex-lg-row ps-0 mb-0 list-unstyled mt-3 mt-lg-0" style="gap: 15px">
                        <li>
                            <a class="text-decoration-none fSize-14 text-gray" href="">Choose Listeners</a>
                        </li>
                        <li>
                            <a class="text-decoration-none fSize-14 text-gray" href="">Emotional Support</a>
                        </li>
                        <li>
                            <a class="text-decoration-none fSize-14 text-gray" href="">Terms and Conditions</a>
                        </li>
                        <li>
                            <a class="text-decoration-none fSize-14 text-gray" href="">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        mounted() {
            this.$router.push('/#footer')
        },
        data() {
            return {
                accordions: [
                    {
                        name: 'My Account'
                    },
                    {
                        name: 'Our Products'
                    },
                    {
                        name: 'By the Way'
                    },
                    {
                        name: 'News'
                    },
                ],
                socialBtns:[
                    {
                        icon:'ci:twitter'
                    },
                    {
                        icon:'ion:social-facebook'
                    },
                    {
                        icon:'iconoir:instagram'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .footer-accordion {
        border-top: 1px solid #B3B3B3;
        border-bottom: 1px solid #B3B3B3;
    }
    .footer{
    }
</style>
<style lang="scss">
    .footer-accordion {
        .n-collapse-item {
            margin-top: 10px;
            border-top-color: #B3B3B3;

            .n-collapse-item__header {
                border-top-color: #B3B3B3;
                padding-top: 10px;
            }
        }
    }
</style>