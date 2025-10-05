<section class="h-screen w-full relative overflow-hidden flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-[url('/bgw.png')] dark:bg-[url('/bg.png')] bg-repeat-space bg-center opacity-90 duration-500"></div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4">
    <h1 class="text-6xl mb-6 font-future text-gray-900 text-white transition-colors duration-500 text-glow-light dark:text-glow-dark">
      eclairs.cc
    </h1>
    <hr class="border-t-2 mx-auto mb-2 border-blue-800 dark:border-blue-500 transition-colors duration-500">
    <p class="text-xl mb-8 font-future text-gray-700 dark:text-blue-300 transition-colors duration-500">
      {displayText}<span class="cursor-blink">_</span>
    </p>
  </div>
</section>

<script>
  import { onMount } from 'svelte';

  const texts = [
    'Program, Game, and etc.',
    'Web Development & Design',
    'Creative Coding Projects',
    'Interactive Experiences'
  ];

  let displayText = '';
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  onMount(() => {
    const typeSpeed = 70;
    const deleteSpeed = 40;
    const pauseTime = 2400;

    function type() {
      const currentText = texts[currentIndex];

      if (!isDeleting && charIndex <= currentText.length) {
        displayText = currentText.substring(0, charIndex);
        charIndex++;
        setTimeout(type, typeSpeed);
      } else if (!isDeleting && charIndex > currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseTime);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        displayText = currentText.substring(0, charIndex);
        setTimeout(type, deleteSpeed);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }

    type();
  });
</script>

