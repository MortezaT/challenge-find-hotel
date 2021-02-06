import { Children, FC } from 'react'
import { JssProvider, ThemeProvider } from 'react-jss'
import { theme } from './theme'

export const FhThemeProvider: FC = ({ children }) => {
  return (
    <JssProvider {...{ classNamePrefix: 'fh-' }}>
      <ThemeProvider {...{ theme }}>{Children.only(children)}</ThemeProvider>
    </JssProvider>
  )
}
