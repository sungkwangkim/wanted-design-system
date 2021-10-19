import { createUseStyles } from 'react-jss'

import { theme } from '@wds/core'

console.log(theme)

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    right: '0',
    bottom: '0',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    zIndex: '-1',
    position: 'fixed',
    right: '0',
    bottom: '0',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blur: {
    backdropFilter: 'blur(4px)',
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)',
    padding: '16px 16px 20px 20px',
  },
  scrollContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 64px)',
    overflowY: 'auto',
  },
  scrollBody: {
    height: 'calc(100% - 64px)',
    overflowY: 'auto',
  },
  fullWidth: {
    width: 'calc(100% - 64px)',
  },
  fullScreen: {
    margin: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: '0',
  },
})
