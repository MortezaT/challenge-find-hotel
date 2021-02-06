import { Children, FC } from 'react'
import { JssProvider, ThemeProvider } from 'react-jss'
import { theme } from './theme'
import { registry } from './setupJss'

export const FhThemeProvider: FC = ({ children }) => {
  return (
    <JssProvider {...{ registry, classNamePrefix: 'fh-' }}>
      <ThemeProvider {...{ theme }}>{Children.only(children)}</ThemeProvider>
    </JssProvider>
  )
}
