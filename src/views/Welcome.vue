<template>
  <section
    class="min-h-screen bg-cover bg-center flex items-center justify-center relative"
    style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop');"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative text-center px-6 max-w-4xl">

      <h1 class="text-7xl md:text-8xl font-extrabold text-white mb-8">
        Welcome To Rwanda
      </h1>

      <p class="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
        Discover breathtaking landscapes,
        wildlife, culture and adventure.
      </p>

      <router-link to="/home">

        <button
          class="bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-2xl text-xl font-bold transition duration-300 shadow-2xl"
        >
          Enter Website
        </button>

      </router-link>

    </div>

  </section>
</template>

<script setup>
</script>