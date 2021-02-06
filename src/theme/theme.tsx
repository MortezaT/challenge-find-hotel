import { createSpacing } from './helpers'

export type FhTheme = typeof theme
export type PalletteColors = keyof FhTheme['pallette']

const spacing = createSpacing(4)

export const theme = {
  spacing,
  borderRadius: spacing(1.5),
  pallette: {
    primary: '#0071F3',
    secondary: '#DAE9FA',
    border: '#BED2E9',
    error: '#D83B3B',
    background: '#FFFFFF',
    text: '#000000',
    grey: '#EFF2F6'
  }
}

export const GlobalRules = {
  body: {
    height: '100vh',
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen' 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' sans-serif"
  }
}
