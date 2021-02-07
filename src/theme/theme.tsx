import { createSpacing } from './helpers'

export type FhTheme = typeof theme
export type paletteColors = keyof FhTheme['palette']

const spacing = createSpacing(4)

export const theme = {
  spacing,
  borderRadius: spacing(1.5),
  palette: {
    primary: '#0071F3',
    secondary: '#DAE9FA',
    border: '#BED2E9',
    error: '#D83B3B',
    background: '#FFFFFF',
    text: '#000000',
    grey: '#EFF2F6'
  },
  typography: {
    title: {
      fontSize: 18,
      fontFamily: 'Inter',
      fontWeight: '600',
      fontStyle: 'normal'
    },
    body: {
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: '600'
    },
    body2: {
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: 'normal'
    }
  },
  shadows: [
    '0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.32)',
    '0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.2)'
  ],
  zIndex: {
    modal: 100
  }
}

export const GlobalRules = {
  html: {
    fontSize: 16
  },
  body: {
    border: '1px solid #eaeaea',
    position: 'relative',
    height: '630px',
    width: '360px',
    margin: 'auto',
    padding: 0,
    overflow: 'hidden',
    background: 'top / auto url(/home.jpg) no-repeat',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen' 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue' sans-serif"
  }
}
