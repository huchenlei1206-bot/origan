import { defineStore } from 'pinia'

export type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'nocturne-theme'

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved

  return 'dark'
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: getInitialTheme(),
  }),
  getters: {
    isDark: (state) => state.mode === 'dark',
  },
  actions: {
    applyTheme() {
      document.documentElement.dataset.theme = this.mode
      document.documentElement.style.colorScheme = this.mode
      window.localStorage.setItem(STORAGE_KEY, this.mode)
    },
    toggleTheme() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
      this.applyTheme()
    },
  },
})
