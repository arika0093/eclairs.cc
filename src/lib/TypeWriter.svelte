<script lang="ts">
  import { onMount } from 'svelte';

  interface TypeWriterProps {
    texts: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
  }

  let {
    texts,
    typeSpeed = 70,
    deleteSpeed = 40,
    pauseTime = 2400
  }: TypeWriterProps = $props();

  let displayText = $state('');
  let currentIndex = $state(0);
  let charIndex = $state(0);
  let isDeleting = $state(false);

  onMount(() => {
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

{displayText}<span class="cursor-blink">_</span>

<style>
  .cursor-blink {
    animation: blink 1.2s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
