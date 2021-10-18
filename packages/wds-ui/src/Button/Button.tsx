import clsx from 'clsx'
import * as React from 'react'

import { FocusableRef } from '../types'
import { capitalize } from '../utils'
import { useStyles } from './Button.jss'

export interface IButtonProps {
  children: React.ReactNode
  className?: string
  color?: 'primary'
  variant?: 'contained' | 'outlined' | 'text' | 'icon'
  component?: React.ElementType
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  href?: string
}

const Button = React.forwardRef<FocusableRef<HTMLElement>, IButtonProps>(
  (props, ref) => {
    let {
      children,
      className,
      color = 'primary',
      size = 'medium',
      component: Component = 'button',
      disabled = false,
      fullWidth = false,
      variant = 'contained',
      startIcon: startIconProp,
      endIcon: endIconProp,
      href,
      ...other
    } = props

    const styles = useStyles()

    if (Component === 'button' && href) {
      Component = 'a'
    }

    const startIcon = startIconProp && (
      <span className={styles.startIcon}>{startIconProp}</span>
    )
    const endIcon = endIconProp && (
      <span className={styles.endIcon}>{endIconProp}</span>
    )

    const rootClasses = clsx(
      {
        [styles.root]: true,
        [styles[`${variant}`]]: true,
        [styles[`${variant}${capitalize(color)}`]]: true,
        [styles[`size${capitalize(size)}`]]: true,
        [styles.fullWidth]: fullWidth,
      },
      className
    )

    return (
      <Component
        className={rootClasses}
        ref={ref}
        {...other}
        disabled={disabled}
      >
        <span className={styles.label}>
          {startIcon}
          {children}
          {endIcon}
        </span>
      </Component>
    )
  }
)

export default Button
