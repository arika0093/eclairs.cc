import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';

  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored) return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialTheme = getInitialTheme();

// Apply initial theme immediately
if (typeof window !== 'undefined') {
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const theme = writable<Theme>(initialTheme);

theme.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

export const toggleTheme = () => {
  theme.update(current => current === 'dark' ? 'light' : 'dark');
};
