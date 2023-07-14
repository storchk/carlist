const contrasts = {
  contrast0: '#ffffff',
  contrast100: '#f8f9fc',
  contrast200: '#f1f3f9',
  contrast300: '#dee3ed',
  contrast400: '#c2c9d6',
  contrast500: '#8f96a3',
  contrast600: '#5e636e',
  contrast700: '#2f3237',
  contrast800: '#1d1e20',
  contrast900: '#111213',
  contrast1000: '#000000',
}

export const colors = {
  primary: '#f7b628',
  secondary: '#002642',
  background: contrasts.contrast200,
  ...contrasts,
}

export type ColorNames = keyof typeof colors

export type ColorsType = {
  [color in ColorNames]: string
}
