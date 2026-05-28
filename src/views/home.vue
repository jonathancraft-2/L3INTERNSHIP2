<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2070&auto=format&fit=crop');"
    >

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">

        <h1 class="text-6xl md:text-7xl font-extrabold text-white leading-tight">
          Discover Rwanda
        </h1>

        <p class="text-xl text-gray-200 mt-6 leading-relaxed">
          Explore breathtaking landscapes, mountain gorillas,
          vibrant culture, and unforgettable adventures
          in the Land of a Thousand Hills.
        </p>

        <div class="mt-10 flex items-center justify-center gap-5 flex-wrap">

          <button class="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg">
            Explore Destinations
          </button>

          <button class="bg-white hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg">
            Learn More
          </button>

        </div>

      </div>

    </div>

    <section class="py-20 px-6">

      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-16">

          <h2 class="text-5xl font-bold text-slate-800 mb-5">
            Why Visit Rwanda?
          </h2>

          <p class="text-lg text-slate-600 max-w-3xl mx-auto">
            Rwanda offers one of Africa’s most unique tourism experiences,
            combining wildlife, luxury, nature, and culture.
          </p>

        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src="../assets/Gorilla Trekking.jpg"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">

              <h3 class="text-2xl font-bold text-slate-800 mb-4">
                Gorilla Trekking
              </h3>

              <p class="text-slate-600 leading-relaxed">
                Experience Rwanda’s world-famous mountain gorillas
                in Volcanoes National Park.
              </p>

            </div>

          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">

              <h3 class="text-2xl font-bold text-slate-800 mb-4">
                Beautiful Landscapes
              </h3>

              <p class="text-slate-600 leading-relaxed">
                Explore rolling green hills, lakes, forests,
                and stunning panoramic views.
              </p>

            </div>

          </div>

          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <img
              src="../assets/kgl.jpg"
              class="h-64 w-full object-cover"
            />

            <div class="p-8">

              <h3 class="text-2xl font-bold text-slate-800 mb-4">
                Kigali City
              </h3>

              <p class="text-slate-600 leading-relaxed">
                Discover one of Africa’s cleanest and safest cities,
                filled with culture and innovation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="bg-green-700 py-20 px-6">

      <div class="max-w-5xl mx-auto text-center">

        <h2 class="text-5xl font-extrabold text-white mb-6">
          Start Your Journey Today
        </h2>

        <p class="text-green-100 text-lg leading-relaxed max-w-3xl mx-auto">
          Plan your next adventure and experience the beauty,
          peace, and hospitality of Rwanda.
        </p>

        <button class="mt-10 bg-white hover:bg-gray-100 text-green-700 px-10 py-4 rounded-2xl font-bold transition duration-300 shadow-lg">
          Book Your Trip
        </button>

      </div>

    </section>

  </section>
</template>

<script setup>
</script>