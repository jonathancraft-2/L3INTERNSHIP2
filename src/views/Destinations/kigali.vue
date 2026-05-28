<template>
  <section class="min-h-screen bg-slate-50">

    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/src/assets/kigali.jpg');"
    >

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative text-center px-6 max-w-4xl">

        <h1 class="text-6xl md:text-7xl font-extrabold text-white">
          Kigali City
        </h1>

        <p class="text-xl text-gray-200 mt-6 leading-relaxed">
          Discover Rwanda’s capital city — clean, safe, modern, and full of culture and innovation.
        </p>

      </div>

    </div>

    <section class="py-20 px-6">

      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-slate-800 mb-6 text-center">
          Why Visit Kigali?
        </h2>

        <p class="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          Kigali is one of Africa’s cleanest cities, known for its safety, hospitality, museums,
          hills, and modern lifestyle blended with rich Rwandan culture.
        </p>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Clean City -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
  src="/src/assets/clean kigali.webp  "
  class="h-60 w-full object-cover" 
/>

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Clean City</h3>
              <p class="text-slate-600">
                Kigali is globally recognized for its cleanliness and environmental policies.
              </p>
            </div>
          </div>

          <!-- Culture -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2070&auto=format&fit=crop"
              class="h-60 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Culture & Museums</h3>
              <p class="text-slate-600">
                Explore Kigali Genocide Memorial, art centers, and cultural heritage sites.
              </p>
            </div>
          </div>

          <!-- Night Life -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="/src/assets/bynight.jpg"
              class="h-60 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Night Life</h3>
              <p class="text-slate-600">
                Enjoy modern restaurants, rooftop bars, and vibrant Kigali nightlife.
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