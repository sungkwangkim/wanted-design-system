import { createUseStyles } from 'react-jss'

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    flex: '1',
    overflowY: 'auto',
    padding: '8px 24px',
  },
})
