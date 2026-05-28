<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/src/assets/kiv.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">
        <h1 class="text-6xl md:text-7xl font-extrabold text-white">
          Western Province
        </h1>
        <p class="text-xl text-gray-200 mt-6">
          Lake Kivu beaches and island relaxation.
        </p>
      </div>
    </div>

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-center mb-12">
          Explore Western Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src= "/src/assets/bch.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Lake Kivu</h3>
              <p class="text-gray-600">Beautiful beaches and calm waters.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src=" /src/assets/isl.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Island Tours</h3>
              <p class="text-gray-600">Boat trips and island exploration.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/sun.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Sunset Views</h3>
              <p class="text-gray-600">Relaxing sunsets over Lake Kivu.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </section>
</template>

<script setup>
</script>