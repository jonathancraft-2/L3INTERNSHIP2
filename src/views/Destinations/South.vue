<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/src/assets/tea.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">
        <h1 class="text-6xl md:text-7xl font-extrabold text-white">
          Southern Province
        </h1>
        <p class="text-xl text-gray-200 mt-6">
          Green hills, tea plantations, and Nyungwe Forest.
        </p>
      </div>
    </div>

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-center mb-12">
          Explore Southern Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/nyungwe.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Nyungwe Forest</h3>
              <p class="text-gray-600">One of Africa’s oldest rainforests.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/har.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Tea Plantations</h3>
              <p class="text-gray-600">Endless green tea hills and fresh air.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/wlk.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Nature Walks</h3>
              <p class="text-gray-600">Relaxing trails through forests and hills.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </section>
</template>

<script setup>
</script>

