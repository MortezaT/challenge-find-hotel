import React, { FC, ReactElement } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Button } from './Button'
import { Close } from './icons'

type ModalProps = {
  classes?: Partial<ReturnType<typeof useStyle>>
  title?: string
  footer?: ReactElement
  onClose: () => void
}

export const Modal: FC<ModalProps> = props => {
  const classes = useStyle(props)
  const { title, children, footer, onClose } = props

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button iconButton variant='text' onClick={onClose}>
          <Close />
        </Button>
        {title ? <span className={classes.title}>{title}</span> : null}
      </div>
      <div className={classes.content}>{children}</div>
      {footer ? <div className={classes.footer}>{footer}</div> : null}
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ pallette: { background }, shadows, typography, spacing, zIndex }) => ({
    root: {
      display: 'grid',
      gridTemplateRows: '64px 1fr 96px',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: background,
      zIndex: zIndex.modal
    },
    header: {
      display: 'grid',
      gap: spacing(3),
      gridTemplateColumns: '1fr auto 1fr',
      justifyContent: 'center',
      alignItems: 'center',
      height: 64,
      boxShadow: shadows[1]
    },
    title: {
      ...typography.body
    },
    content: {
      overflow: 'auto'
    },
    footer: {
      padding: spacing(4),
      marginBottom: spacing(4)
    }
  }),
  { name: 'Modal' }
)
