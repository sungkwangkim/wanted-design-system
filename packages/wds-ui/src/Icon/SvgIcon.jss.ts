import { createUseStyles } from 'react-jss'

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    '& svg': {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: '0',
      fontSize: 'inherit',
    },
  },
})
