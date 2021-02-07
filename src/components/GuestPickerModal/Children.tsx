import { useField } from 'formik'
import { FC, useCallback } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Stepper } from '../Stepper'
import { ChildAgeSelect } from './ChildAgeSelect'

type ChildrenProps = {
  name: string
  min: number
  max: number
}

export const Children: FC<ChildrenProps> = props => {
  const classes = useStyle(props)
  const [{ value: childrenAge }, , { setValue }] = useField<number[]>(props)
  const { name } = props
  const stepperValue = childrenAge.length
  const onChange = useCallback(
    (count: number) => {
      if (count <= stepperValue) {
        return setValue(childrenAge.slice(0, count))
      }
      const length = count - stepperValue
      const newVal = Array.from({ length }, _ => 0)
      setValue(childrenAge.concat(newVal))
    },
    [setValue, stepperValue, childrenAge]
  )
  const onRemove = (index: number) => () =>
    setValue(childrenAge.filter((_, i) => i !== index))

  return (
    <div className={classes.root}>
      <div className={classes.mainRow}>
        <div className={classes.label}>Children</div>
        <Stepper {...props} {...{ onChange, value: stepperValue }} />
      </div>
      <div className={classes.ageList}>
        {childrenAge.map((age, index) => (
          <ChildAgeSelect
            key={index}
            label={`Child ${index + 1} age`}
            name={`${name}[${index}]`}
            onRemove={onRemove(index)}
          />
        ))}
      </div>
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ palette, typography, spacing }) => ({
    root: {
      display: 'flex',
      gap: spacing(2),
      flexFlow: 'column nowrap',
      alignItems: 'space-between',
      justifyContent: 'center'
    },
    mainRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    label: {
      ...typography.body
    },
    ageList: {
      ...typography.body,
      marginLeft: spacing(2),
      paddingLeft: spacing(2),
      borderLeft: `1px solid ${palette.grey}`
    }
  }),
  { name: 'Children' }
)
