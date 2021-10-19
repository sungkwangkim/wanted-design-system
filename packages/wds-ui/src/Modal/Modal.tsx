import clsx from 'clsx'
import * as React from 'react'

import Portal from '../Portal/Portal'
import { useStyles } from './Modal.jss'

interface IModalProps {
  children: React.ReactNode
  otherElement?: () => void
  className?: string
  bodyClassName?: string
  open?: boolean
  onBackdropClick?: () => void
  onClose?: () => void
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
  backdropBlur?: boolean
  fullScreen?: boolean
  fullWidth?: boolean
  scroll?: string
}

const useCustomEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect

const Modal = React.forwardRef<HTMLDivElement, IModalProps>((props, ref) => {
  const {
    children,
    otherElement,
    className,
    bodyClassName,
    open = false,
    onBackdropClick,
    onClose,
    disableBackdropClick = false,
    disableEscapeKeyDown = false,
    backdropBlur = true,
    fullScreen = false,
    fullWidth = false,
    scroll,
  } = props
  const styles = useStyles()
  const portalRef = React.useRef(null)
  const rootRef = React.useRef(null)
  const handleRef = ref || rootRef

  React.useEffect(() => {
    if (!open) {
      return
    }
    if (handleRef.current) {
      handleRef.current.setAttribute('tabIndex', -1)
      handleRef.current.focus()
    }
  }, [open, handleRef])

  useCustomEffect(() => {
    const { body } = document
    if (open) {
      Object.assign(body.style, { overflow: 'hidden' })
    } else {
      Object.assign(body.style, { overflow: '' })
    }

    return () => {
      Object.assign(body.style, { overflow: '' })
    }
  }, [open])

  const rootClasses = clsx(
    {
      [styles.root]: true,
    },
    className
  )

  const bodyClasses = clsx(
    {
      [styles.body]: true,
      [styles.scrollBody]: scroll === 'body',
      [styles.scrollContent]: scroll === 'content',
      [styles.fullScreen]: fullScreen === true,
      [styles.fullWidth]: fullWidth === true,
    },
    bodyClassName
  )

  const backdropClasses = clsx({
    [styles.backdrop]: true,
    [styles.blur]: backdropBlur,
  })

  const handleBackdropClick = React.useCallback(
    (event) => {
      if (onBackdropClick) {
        onBackdropClick(event)
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick')
      }
    },
    [onBackdropClick, onClose]
  )

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key !== 'Escape') {
        return
      }

      if (!disableEscapeKeyDown) {
        event.stopPropagation()
        if (onClose) {
          onClose(event, 'escapeKeyDown')
        }
      }
    },
    [disableEscapeKeyDown, onClose]
  )

  return (
    <Portal ref={portalRef}>
      {open && (
        <div className={rootClasses} ref={handleRef} onKeyDown={handleKeyDown}>
          <div onClick={handleBackdropClick} className={backdropClasses} />
          {/* Backdrop 보단 아래, children 보다는 상위에 두고 싶을 때 */}
          {otherElement && otherElement()}
          <div className={bodyClasses}>{children}</div>
        </div>
      )}
    </Portal>
  )
})

export default Modal
