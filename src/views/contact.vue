<template>
  <section class="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">

    <div class="bg-white w-full max-w-4xl rounded-3xl shadow-xl p-10">

      <h1 class="text-5xl font-extrabold text-center text-slate-800 mb-10">
        Contact Us
      </h1>

      <p class="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Plan your trip to Rwanda or ask us anything about destinations, tours, and travel experiences.
        We are here to help you.
      </p>

      <form class="grid gap-6">

        <div class="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="First Name"
            class="border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="text"
            placeholder="Last Name"
            class="border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          class="border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="text"
          placeholder="Subject"
          class="border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          class="border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
        ></textarea>

        <button
          type="submit"
          class="bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg"
        >
          Send Message
        </button>

      </form>

    </div>

  </section>
</template>

<script setup>
</script>