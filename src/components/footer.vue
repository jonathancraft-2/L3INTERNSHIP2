<template>
<footer class="bg-green-700 text-white mt-20">

    <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

      <div>
        <h2 class="text-2xl font-bold text-green-500 mb-4">
          Visit Rwanda
        </h2>

        <p class="text-slate-300 leading-relaxed">
          Discover the Land of a Thousand Hills wildlife, culture,
          adventure, and unforgettable experiences.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>

        <ul class="space-y-3 text-slate-300">
          <li><router-link to="/" class="hover:text-green-400">Welcome</router-link></li>
          <li><router-link to="/home" class="hover:text-green-400">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-green-400">About</router-link></li>
          <li><router-link to="/contact" class="hover:text-green-400">Contact</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Destinations</h3>

        <ul class="space-y-3 text-slate-300">
          <li><router-link to="/kigali" class="hover:text-green-400">Kigali</router-link></li>
          <li><router-link to="/north" class="hover:text-green-400">Northern Province</router-link></li>
          <li><router-link to="/south" class="hover:text-green-400">Southern Province</router-link></li>
          <li><router-link to="/east" class="hover:text-green-400">Eastern Province</router-link></li>
          <li><router-link to="/west" class="hover:text-green-400">Western Province</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Contact</h3>

        <p class="text-slate-300 mb-2">Kigali, Rwanda</p>
        <p class="text-slate-300 mb-2">+250 788 60 643</p>
        <p class="text-slate-300">info@visitrwanda.com</p>

        <div class="flex gap-4 mt-6">
          <a href="#" class="hover:text-green-400">Facebook</a>
          <a href="#" class="hover:text-green-400">Instagram</a>
          <a href="#" class="hover:text-green-400">YouTube</a>
        </div>
      </div>

    </div>

    <div class="border-t border-slate-700 text-center py-6 text-slate-400">
      © 2026 Visit Rwanda. All rights reserved.
    </div>

  </footer>
</template>

<script setup>
</script>