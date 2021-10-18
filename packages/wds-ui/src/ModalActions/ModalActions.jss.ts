import { createUseStyles } from 'react-jss'

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
  },
})
