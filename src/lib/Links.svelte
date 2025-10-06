<script lang="ts">
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/arika0093',
      icon: 'github'
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/arika',
      icon: 'zenn'
    }
  ];
</script>

<!-- Links -->
<div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
	{#each links as link}
		<a
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-black/30 backdrop-blur-sm border-2 border-gray-400 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 group"
		>
			{#if link.icon === 'github'}
				<svg class="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
				</svg>
			{:else if link.icon === 'zenn'}
				<svg class="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 " viewBox="0 0 88 88" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H76C82.6274 0 88 5.37258 88 12V76C88 82.6274 82.6274 88 76 88H12C5.37258 88 0 82.6274 0 76V12ZM33.4988 26.1155L10.7857 50.1461C9.96529 51.0134 9.96529 52.4174 10.7857 53.2847L20.3043 63.2847C21.1247 64.1521 22.4686 64.1521 23.2891 63.2847L66.8155 18.1461C67.6359 17.2787 67.6359 15.8747 66.8155 15.0074L57.2968 5.00738C56.4764 4.14003 55.1325 4.14003 54.3121 5.00738L33.4988 26.1155ZM63.5012 61.8845L53.9826 71.8845C53.1622 72.7519 51.8182 72.7519 50.9978 71.8845L41.4792 61.8845C40.6587 61.0171 40.6587 59.6131 41.4792 58.7458L64.1922 34.7152C65.0127 33.8479 66.3566 33.8479 67.177 34.7152L76.6957 44.7152C77.5161 45.5825 77.5161 46.9866 76.6957 47.8539L63.5012 61.8845Z" />
				</svg>
			{/if}
			<span class="font-future text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 ">
				{link.name}
			</span>
		</a>
	{/each}
</div>
