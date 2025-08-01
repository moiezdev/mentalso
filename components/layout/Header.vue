<template>
    <div>
        <nav class="d-flex justify-content-between align-items-center px-lg-5 px-3 py-4">
            <div class="d-flex align-items-center" style="gap: 20px">
                <div class="logo d-flex">
                    <button class="border-0 text-black bg-transparent px-1 d-md-none" @click="active = !active">
                        <Icon size="25" name="mdi:menu"/>
                    </button>
                    <img src="../../static/logo.png" alt="logo.png">
                </div>
                <div class="d-none d-md-block">
                    <ul class="d-flex list-unstyled mb-0" style="gap: 15px">
                        <li>
                            <a class="text-decoration-none text-charleston-green" href="/">Home</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-charleston-green" href="/">Emotional Support</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-nav">
                <ul class="d-flex mb-0" style="gap:10px;list-style: none">
                    <li class="d-none d-md-block">
                        <a class="btn text-awesome fw-bold">
                            Log In
                        </a>
                    </li>
                    <li>
                        <a class="btn text-white bg-awesome">
                            Sign up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <n-drawer v-model:show="active" :width="300" placement="left">
            <div class="d-flex py-4 px-3 justify-content-between">
                <img src="@/static/logo.png" alt="">
                <button class="border-0 bg-transparent text-black" @click="active = !active">
                    <Icon name="mdi:close" size="25"/>
                </button>
            </div>
            <div>
                <ul class="d-flex flex-column px-3 list-unstyled mb-0" style="gap: 20px">
                    <li>
                        <a class="text-decoration-none text-charleston-green" href="/">Home</a>
                    </li>
                    <li>
                        <a class="text-decoration-none text-charleston-green" href="/">Emotional Support</a>
                    </li>
                    <li>
                        <a class="btn text-white w-100 bg-awesome">
                            Sign up
                        </a>
                    </li>
                    <li>
                        <a class="btn text-awesome w-100 fw-bold">
                            Log In
                        </a>
                    </li>
                </ul>
            </div>
        </n-drawer>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => {
            return {
                active: false,
                navBtns: [
                    {
                        icon: 'fluent:person-12-regular',
                        countNotif: 0,
                        typeNotifDot: true
                    },
                    {
                        icon: 'mdi:cards-heart-outline',
                        countNotif: 0,
                        typeNotifDot: true
                    },
                    {
                        icon: 'mingcute:shopping-bag-1-line',
                        countNotif: 5,
                        typeNotifDot: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>