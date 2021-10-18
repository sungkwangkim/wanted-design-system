import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { FocusableRef } from '../types'

interface IPortalProps {
  children: React.ReactNode
}

const Portal = React.forwardRef<FocusableRef<HTMLElement>, IPortalProps>(
  (props, ref) => {
    const { children } = props
    const [mountNode, setMountNode] = React.useState(null)
    React.useEffect(() => setMountNode(document.body), [])

    React.useEffect(() => {
      if (mountNode) {
        mountNode.current = ref
        return () => {
          mountNode.current = null
        }
      }

      return undefined
    }, [ref, mountNode])

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
  }
)

export default Portal
