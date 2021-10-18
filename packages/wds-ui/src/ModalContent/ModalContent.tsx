import clsx from 'clsx'
import * as React from 'react'

import { useStyles } from './ModalContent.jss'

interface IModalContent {
  children: React.ReactNode
  className?: string
}

const ModalContent = React.forwardRef<HTMLDivElement, IModalContent>(
  (props, ref) => {
    const { children, className, ...other } = props
    const styles = useStyles()

    const rootClasses = clsx(styles.root, className)

    return (
      <div className={rootClasses} ref={ref} {...other}>
        {children}
      </div>
    )
  }
)

export default ModalContent
