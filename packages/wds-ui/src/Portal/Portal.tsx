import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
}

const useCustomEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect

const Portal = React.forwardRef<HTMLDivElement | null, IPortalProps>(
  (props, ref) => {
    const { children } = props
    const [moundNode, setMoundNode] = React.useState<HTMLElement | null>(null)

    useCustomEffect(() => {
      setMoundNode(document.body)
    })

    const content = <div ref={ref}>{children}</div>

    return moundNode ? ReactDOM.createPortal(content, document.body) : moundNode
  }
)

export default Portal
