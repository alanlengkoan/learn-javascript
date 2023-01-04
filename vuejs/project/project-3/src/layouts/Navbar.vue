<template>
    <header>
        <nav>
            <div class="mx-auto p-5">
                <div class="flex justify-between">
                    <!-- begin:: primary navbar items -->
                    <div>
                        <!-- begin:: logo -->
                        <a href="/" class="flex items-center py-4">
                            <span class="text-xl font-bold uppercase tracking-wide">
                                Portofolio
                            </span>
                        </a>
                        <!-- end:: logo -->
                    </div>
                    <div class="hidden md:flex items-center space-x-1">
                        <!-- begin:: menu -->
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            class="py-1 px-2 font-semibold hover:border-b-4 border-copy-primary hover:text-copy-primary">
                            <span>{{ item.name }}</span>
                        </a>
                        <!-- end:: menu -->
                    </div>
                    <!-- end:: primary navbar items -->

                    <!-- begin:: secondary navbar items -->
                    <div class="md:flex flex items-center space-x-3 px-10">
                        <button @click="showDark">
                            <svg v-if="theme === 'theme-light'" xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                                <path
                                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                            </svg>
                            <svg v-if="theme === 'theme-dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                                <path
                                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                        </button>
                    </div>
                    <!-- end:: secondary navbar items -->

                    <!-- begin:: mobile menu button -->
                    <div class="md:hidden flex items-center">
                        <button @click="toggleNav" class="outline-none">
                            <!-- <font-awesome-icon  icon="fa-solid fa-bars" />
                            <font-awesome-icon v-if="showMenu" icon="fa-solid fa-xmark" /> -->
                            <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg v-if="showMenu" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </div>
                    <!-- end:: mobile menu button -->
                </div>
            </div>
            <!-- begin:: mobile menu -->
            <div :class="showMenu ? 'flex' : 'hidden'">
                <div class="w-full px-4 absolute z-40 bg-background-primary text-copy-primary" :class="theme">
                    <ul class="">
                        <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href" class="block text-sm px-2 py-4"><span>{{ item.name }}</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end:: mobile menu -->
        </nav>
    </header>
</template>

<script setup>
    const navigation = [{
            name: 'About Me',
            href: '/about-me',
        },
        {
            name: 'Projects',
            href: '/projects',
        },
        {
            name: 'Stacks',
            href: '/stacks',
        },
        {
            name: 'Blog',
            href: 'https://tgskmps.wordpress.com/',
        },
        {
            name: 'Channel',
            href: 'https://my-favorite-channel.herokuapp.com/',
        },
    ]
</script>

<script>
    export default {
        created() {
            this.theme = localStorage.getItem('theme') || 'theme-light'
        },
        data() {
            return {
                showMenu: false,
                theme: 'theme-light'
            }
        },
        methods: {
            toggleNav: function () {
                this.showMenu = !this.showMenu;
            },
            showDark: function () {
                this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
                this.emitToParent()
                localStorage.setItem('theme', this.theme);
            },
            emitToParent() {
                this.$emit("childToParent", this.theme);
            },
        }
    }
</script>