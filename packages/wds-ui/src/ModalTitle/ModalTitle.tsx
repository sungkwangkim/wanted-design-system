import clsx from 'clsx'
import * as React from 'react'

import { FocusableRef } from '../types'
import { useStyles } from './ModalTitle.jss'

interface IModalTitleProps {
  children: React.ReactNode
  className?: string
}

const ModalTitle = React.forwardRef<HTMLDivElement, IModalTitleProps>(
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

export default ModalTitle
