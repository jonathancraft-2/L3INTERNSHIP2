<template>
  <nav class="relative z-9999 bg-white shadow-lg px-12 py-5 flex items-center justify-between border-b border-gray-100">

    <router-link to="/" class="flex items-center gap-4 cursor-pointer">

      <img 
        src="../assets/visit rwanda.png" 
        alt="Visit Rwanda Logo"
        class="w-20 h-16 object-contain hover:scale-105 transition duration-300"
      >

      <div>
        <h3 class="text-3xl font-extrabold text-green-700 tracking-wide leading-none">
          Tembera U'Rwanda
        </h3>

        <p class="text-sm text-gray-500 mt-1 tracking-wide">
          Explore The Land of a Thousand Hills
        </p>
      </div>

    </router-link>

    <div class="flex items-center gap-4">
      <router-link to="/"></router-link>

      <router-link 
        to="/home"
        class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-700 hover:text-white transition duration-300"
      >
        HOME
      </router-link>

      <div class="relative group">

        <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-700 hover:text-white transition duration-300 cursor-pointer">
          MEDIA
        </h4>

        <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 min-w-[160px] z-[9999]">

          <p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Images
          </p>

          <p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Videos
          </p>

        </div>

      </div>

      <router-link 
        to="/about"
        class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-700 hover:text-white transition duration-300"
      >
        ABOUT US
      </router-link>

      <div class="relative group">

        <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-700 hover:text-white transition duration-300 cursor-pointer">
          DESTINATIONS
        </h4>

        <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 min-w-[220px] z-[9999]">

          <router-link to="/kgl"><p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Kigali City
          </p></router-link>

          <router-link to="/Nrth"><p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Northern Province
          </p></router-link>

          <router-link to="/Sth"><p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Southern Province
          </p></router-link>

          <router-link to="/Est"><p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Eastern Province
          </p></router-link>

          <router-link to="/Wst"><p class="px-5 py-3 hover:bg-green-700 hover:text-white cursor-pointer transition">
            Western Province
          </p></router-link>

        </div>

      </div>

      <router-link 
        to="/contact"
        class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-green-700 hover:text-white transition duration-300"
      >
        CONTACT US
      </router-link>

    </div>

  </nav>
</template>

<script setup>
</script>