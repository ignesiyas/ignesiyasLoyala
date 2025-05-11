import { create } from 'zustand'

// Define the Current App Theme state like Dark or Light
interface ThemeState {
  theme: string
  ToggleTheme: (theme: string) => void
}
// Define the Current App Theme state like Dark or Light

const setThemeState = create<ThemeState>((set) => ({
    theme: 'light',
    ToggleTheme: (theme) => set({ theme }),
    })
);

export default setThemeState;