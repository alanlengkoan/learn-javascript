<template>
  <section id="projects" class="p-4 bg-regal-dark text-light">
    <div class="container mx-auto">
      <h1 class="text-2xl text-center font-bold">Projects</h1>

      <div class="py-4 flex flex-wrap">
        <div class="w-full">
          <ul class="flex mb-0 list-none flex-wrap pt-3 pb-10 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)"
                v-bind:class="{'text-black bg-white': openTab !== 1, 'text-copy-tertiary bg-background-secondary': openTab === 1}">
                All
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)"
                v-bind:class="{ 'text-black bg-white': openTab !== 2, 'text-copy-tertiary bg-background-secondary': openTab === 2 }">
                Web
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)"
                v-bind:class="{ 'text-black bg-white': openTab !== 3, 'text-copy-tertiary bg-background-secondary': openTab === 3 }">
                Mobile
              </a>
            </li>
          </ul>
          <div class="relative flex place-items-center flex-col min-w-0 break-words w-full">
            <div class="flex-auto">
              <div class="tab-content tab-space">
                <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">

                  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project1.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project2.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project3.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project4.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project5.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project6.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">

                  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project1.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project2.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project3.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">

                  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project4.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project5.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                    <div
                      class="m-3 max-w-sm rounded bg-white text-black overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
                      <img class="w-full" src="https://alanlengkoan.com/assets/img/projects/project6.webp" alt="">
                      <div class="px-6 py-4">
                        <h1 class="font-bold text-base py-1">Title</h1>
                        <p class="text-sm text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                          perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="#" class="p-2">
                          <font-awesome-icon icon="fa-solid fa-laptop-code" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
  #projects {
    min-height: 100vh;
  }
</style>

<script>
  export default {
    data() {
      return {
        openTab: 1
      }
    },
    methods: {
      toggleTabs: function (tabNumber) {
        this.openTab = tabNumber
      }
    }
  }
</script>