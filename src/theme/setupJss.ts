import { SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { GlobalRules } from './theme'

const setupJss = () => {
  const jss = create(preset())
  const registry = new SheetsRegistry()
  const globalStyles = jss.createStyleSheet({ '@global': GlobalRules }).attach()

  registry.add(globalStyles)

  return registry
}

export const registry = setupJss()
