import clsx from 'clsx'
import * as React from 'react'

import { useStyles } from './ModalActions.jss'

interface IModalActions {
  children: React.ReactNode
  className?: string
}

const ModalActions = React.forwardRef<HTMLDivElement, IModalActions>(
  (props, ref) => {
    const { children, className, ...other } = props
    const styles = useStyles()

    const rootClasses = clsx(
      {
        [styles.root]: true,
      },
      className
    )

    return (
      <div className={rootClasses} ref={ref} {...other}>
        {children}
      </div>
    )
  }
)

export default ModalActions
