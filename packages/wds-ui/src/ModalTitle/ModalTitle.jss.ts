import { createUseStyles } from 'react-jss'

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    display: 'flex',
    margin: '0',
    flex: '0 0 auto',
  },
})
