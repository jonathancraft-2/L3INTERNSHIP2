<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/src/assets/svn.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">
        <h1 class="text-6xl md:text-7xl font-extrabold text-white">
          Eastern Province
        </h1>
        <p class="text-xl text-gray-200 mt-6">
          Safari experience and wide savannah landscapes.
        </p>
      </div>
    </div>

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-center mb-12">
          Discover Eastern Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Akagera Safari</h3>
              <p class="text-gray-600">See lions, elephants, and giraffes.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/akg.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Savannah</h3>
              <p class="text-gray-600">Wide open landscapes and wildlife views.</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/lk.jpg" class="h-60 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold">Lakes</h3>
              <p class="text-gray-600">Peaceful lakes and nature spots.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </section>
</template>

<script setup>
</script>