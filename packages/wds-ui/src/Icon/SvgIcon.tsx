import clsx from 'clsx'
import * as React from 'react'

import { useStyles } from './SvgIcon.jss'

interface ISvgIconProps {
  children: React.ReactNode
  svgClassName?: string
  viewBox?: string
}

function SvgIcon(props: ISvgIconProps) {
  const { children, viewBox = '0 0 24 24', svgClassName, ...other } = props
  const styles = useStyles()

  const svgClassNames = clsx(svgClassName)

  return (
    <span className={styles.root}>
      <svg className={svgClassNames} viewBox={viewBox} {...other}>
        {children}
      </svg>
    </span>
  )
}

export default SvgIcon
