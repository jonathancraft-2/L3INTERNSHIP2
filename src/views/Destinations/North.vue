<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/src/assets/northp.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">
        <h1 class="text-6xl md:text-7xl font-extrabold text-white">
          Northern Province
        </h1>
        <p class="text-xl text-gray-200 mt-6">
          Home of Volcanoes National Park and mountain gorillas.
        </p>
      </div>
    </div>

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-center mb-12">
          Why Visit Northern Province?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Volcanoes Park -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src="/src/assets/grl.jpg"
              class="h-60 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Volcanoes National Park</h3>
              <p class="text-gray-600">
                Meet mountain gorillas in the misty volcanic forests of Rwanda.
              </p>
            </div>
          </div>

          <!-- Mountains -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src="/src/assets/volcanoes.jpg"
              class="h-60 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Volcanic Mountains</h3>
              <p class="text-gray-600">
                Explore the famous Virunga mountain ranges and hiking trails.
              </p>
            </div>
          </div>

          <!-- Culture -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src="/src//assets/lcl.jpg"
              class="h-60 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Local Culture</h3>
              <p class="text-gray-600">
                Experience traditions, music, and communities in the north.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </section>
</template>

<script setup>
</script>