import { createUseStyles, Styles } from 'react-jss'
import { Classes } from 'jss'
import { FhTheme } from './theme'
import { useMemo } from 'react'

export function createFhUseStyles<
  C extends string = string,
  D extends object = any
> (
  styles: Styles<C> | ((theme: FhTheme) => Styles<C>),
  options: { name: string }
): (data?: D) => Classes<C> {
  const useStyle = createUseStyles(styles, options)
  return data => {
    const classes = useStyle(data)
    return useMergeClasses(data, classes)
  }
}

const useMergeClasses = <C extends string>(
  data: { classes?: Partial<Classes<C>> },
  classes: Classes<C>
) => {
  const merged = useMemo(() => {
    if (!data.classes) return classes
    const entries = Object.entries(classes).map(([key, cls]) => [
      key,
      [cls, data.classes[key]].join(' ')
    ])

    return Object.fromEntries(entries)
  }, [data.classes, classes])

  return merged
}
