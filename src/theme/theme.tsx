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
  },
  typography: {
    body: {
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: '600'
    }
  },
  shadows: [
    '0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.32)'
  ],
  zIndex: {
    modal: 100
  }
}

export const GlobalRules = {
  '*': {
    fontFamily: 'Inter'
  },
  html: {
    fontSize: 16
  },
  body: {
    height: '100vh',
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen' 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' sans-serif"
  }
}
