
export type FhTheme = typeof theme
export type PalletteColors = keyof FhTheme['pallette']


export const theme = {
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
