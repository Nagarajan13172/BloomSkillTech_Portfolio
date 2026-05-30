/** Theme primitives shared by the provider and the customizer UI. */

export type Mode = 'light' | 'dark'
export type Palette = 'spectrum' | 'ember' | 'aurora' | 'verdant'
export type FontKey = 'grotesk' | 'sora' | 'outfit' | 'inter'
export type Radius = 'sharp' | 'soft' | 'round'

export interface ThemeState {
  mode: Mode
  palette: Palette
  font: FontKey
  radius: Radius
}

export const DEFAULT_THEME: ThemeState = {
  mode: 'dark',
  palette: 'spectrum',
  font: 'grotesk',
  radius: 'soft',
}

export const STORAGE_KEY = 'bst-theme'

/** Palette swatches mirror the CSS gradient stops in global.css. */
export const PALETTES: { key: Palette; label: string; swatch: string[] }[] = [
  { key: 'spectrum', label: 'Spectrum', swatch: ['#4f7acf', '#5949a6', '#b24d9b', '#f897bf'] },
  { key: 'ember', label: 'Ember', swatch: ['#ffab40', '#ff7a2c', '#e94f1d', '#ffc06b'] },
  { key: 'aurora', label: 'Aurora', swatch: ['#3fd0ff', '#2f9fd8', '#2f6fd0', '#5ce0d0'] },
  { key: 'verdant', label: 'Verdant', swatch: ['#34d399', '#10b981', '#65a30d', '#bef264'] },
]

export const FONTS: { key: FontKey; label: string; stack: string }[] = [
  { key: 'grotesk', label: 'Grotesk', stack: '"Space Grotesk", system-ui, sans-serif' },
  { key: 'sora', label: 'Sora', stack: '"Sora", system-ui, sans-serif' },
  { key: 'outfit', label: 'Outfit', stack: '"Outfit", system-ui, sans-serif' },
  { key: 'inter', label: 'Inter', stack: '"Inter", system-ui, sans-serif' },
]

export const RADII: { key: Radius; label: string }[] = [
  { key: 'sharp', label: 'Sharp' },
  { key: 'soft', label: 'Soft' },
  { key: 'round', label: 'Round' },
]
