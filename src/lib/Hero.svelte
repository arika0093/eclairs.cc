<script lang="ts">
  import TypeWriter from './TypeWriter.svelte';
  import Links from './Links.svelte';

  const texts = [
    'Program, Game, and etc.',
  ];
</script>

<section class="h-dvh w-full relative overflow-hidden flex items-center justify-center bg-white dark:bg-black ">
  <!-- Light mode background -->
  <div class="absolute inset-0 opacity-100 dark:opacity-0  ">
    <div class="absolute inset-0 max-w-[1534px] mx-auto">
      <div class="absolute inset-0 bg-[url('/bgw.png')] bg-repeat-space bg-center opacity-90"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)]"></div>
    </div>
  </div>

  <!-- Dark mode background -->
  <div class="absolute inset-0 opacity-0 dark:opacity-100 ">
    <div class="absolute inset-0 max-w-[1534px] mx-auto">
      <div class="absolute inset-0 bg-[url('/bg.png')] bg-repeat-space bg-center"></div>
      <div class="absolute inset-0 opacity-50 bg-[linear-gradient(to_bottom,black_0%,transparent_10%,transparent_90%,black_100%)]"></div>
      <div class="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,black_0%,transparent_10%,transparent_90%,black_100%)]"></div>
    </div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4">
    <h1 class="text-6xl lg:text-7xl mb-4 font-future text-gray-900 text-white  text-glow-light dark:text-glow-dark">
      eclairs.cc
    </h1>
    <hr class="border-t-2 mx-auto mb-2 border-blue-800 dark:border-blue-500 ">
    <p class="text-xl lg:text-2xl mb-8 font-future text-gray-700 dark:text-blue-300 ">
      <TypeWriter {texts} />
    </p>
    <Links />
  </div>
</section>

