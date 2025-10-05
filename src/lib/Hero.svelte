<script lang="ts">
  import TypeWriter from './TypeWriter.svelte';

  const texts = [
    'Program, Game, and etc.',
  ];
</script>

<section class="h-screen w-full relative overflow-hidden flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
  <!-- Light mode background -->
  <div class="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
    <div class="absolute inset-0 bg-[url('/bgw.png')] bg-repeat-space bg-center opacity-90"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,transparent_15%,transparent_85%,white_100%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%,transparent_85%,white_100%)]"></div>
  </div>

  <!-- Dark mode background -->
  <div class="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
    <div class="absolute inset-0 bg-[url('/bg.png')] bg-repeat-space bg-center"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,black_0%,transparent_15%,transparent_85%,black_100%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_15%,transparent_85%,black_100%)]"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4">
    <div class="absolute inset-0 bg-white dark:bg-black opacity-10 dark:opacity-0 transition-colors duration-500"></div>
    <h1 class="text-6xl lg:text-7xl mb-4 font-future text-gray-900 text-white transition-colors duration-500 text-glow-light dark:text-glow-dark">
      eclairs.cc
    </h1>
    <hr class="border-t-2 mx-auto mb-2 border-blue-800 dark:border-blue-500 transition-colors duration-500">
    <p class="text-xl lg:text-2xl mb-8 font-future text-gray-700 dark:text-blue-300 transition-colors duration-500">
      <TypeWriter {texts} />
    </p>
  </div>
</section>

