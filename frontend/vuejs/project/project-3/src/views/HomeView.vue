<template>
  <main>
    <section id="home" class="flex items-center p-4">
      <div class="container mx-auto px-3">
        <div class="py-4 text-center">
          <!-- begin:: introduce myself -->
          <img class="py-2 px-2 mx-auto rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU"
            alt="Profile">
          <h1 class="font-bold text-3xl">
            Yo, I'm Alan Saputra Lengkoan a
          </h1>
          <h1 class="font-bold text-2xl py-2">
            <VueWriter :array="['Web Developer', 'Mobile App Developer']" :typeSpeed="50" />
          </h1>
          <p class="py-2">
            Full-Snack Developer | Code Addict | Anime Enthusiast | Sarani Mukō e Plus Ultra!
          </p>
          <div class="py-2 flex items-center justify-center">
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-facebook" />
              </a>
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </a>
              <a href=""
                class="text-2xl flex rounded-full outline p-3 mx-2 hover:bg-background-secondary hover:outline-copy-secondary hover:text-copy-primary">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <!-- end:: introduce myself -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import VueWriter from 'vue-writer'

export default {
  components: { VueWriter }
}
</script>

<style>
  #home {
    min-height: 100vh;
  }

  .is-typed span.cursor {
    display: inline-block;
    width: 5px;
    height: 35px;
    background-color: white;
    animation: blink 1s infinite;
  }

 .is-typed span.cursor.typing {
   animation: none;
 }

 @keyframes blink {
   49% {
     background-color: white;
   }

   50% {
     background-color: transparent;
   }

   99% {
     background-color: transparent;
   }
 }
</style>