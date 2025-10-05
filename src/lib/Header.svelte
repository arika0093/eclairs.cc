<script lang="ts">
  import { theme, toggleTheme } from './stores/theme';
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-sm transition-colors duration-500">

  <!-- Theme Toggle -->
  <button
    on:click={toggleTheme}
    class="absolute top-2 right-6 p-2 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500 transition-all duration-300 group"
    aria-label="Toggle theme"
  >
      {#if $theme === 'dark'}
        <!-- Sun icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-300 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      {:else}
        <!-- Moon icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      {/if}
  </button>
</header>
