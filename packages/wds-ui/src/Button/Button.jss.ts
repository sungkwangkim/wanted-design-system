import { createUseStyles } from 'react-jss'

import { theme } from '@wds/core'

type RuleNames = any

export const useStyles = createUseStyles<RuleNames>({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    minWidth: '64px',
    padding: '0px 27px',
    boxSizing: 'border-box',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 1,
    cursor: 'pointer',
  },
  label: {
    width: '100%',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    color: 'inherit',
  },
  contained: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary,
    border: 'none',
    '&:disabled': {
      backgroundColor: '#f2f4f7',
      color: '#cccccc',
    },
  },
  sizeSmall: {
    height: '30px',
    fontSize: '14px',
  },
  sizeMedium: {
    height: '40px',
    fontSize: '15px',
  },
  sizeLarge: {
    height: '50px',
    fontSize: '16px',
  },
  containedPrimary: {
    '&:hover': {
      color: '#fff',
      backgroundColor: '#002fdb',
      '&:disabled': {
        backgroundColor: '#f2f4f7',
        color: '#cccccc',
      },
    },
    '&:active': {
      color: '#cccccc',
      backgroundColor: '#002fdb',
      '&:disabled': {
        backgroundColor: '#f2f4f7',
        color: '#cccccc',
      },
    },
    '&:focus': {
      color: '#cccccc',
      backgroundColor: '#002fdb',
      '&:disabled': {
        backgroundColor: '#f2f4f7',
        color: '#cccccc',
      },
    },
    '&:visited': {
      color: '#ffffff',
    },
  },
  outlined: {
    color: theme.palette.primary,
    backgroundColor: '#fff',
    border: '1px solid #36f',
    '&:disabled': {
      backgroundColor: '#f2f4f7',
      borderColor: 'transparent',
      color: '#cacaca',
      cursor: 'not-allowed',
    },
  },
  outlinedPrimary: {
    '&:hover': {
      color: '#002fdb',
      borderColor: '#002fdb',
    },
    '&:active': {
      color: '#002fdb',
      borderColor: '#002fdb',
      '&:disabled': {
        backgroundColor: '#f2f4f7',
        borderColor: 'transparent',
        color: '#cccccc',
      },
    },
    '&:focus': {
      color: '#002fdb',
      borderColor: '#002fdb',
      '&:disabled': {
        backgroundColor: '#f2f4f7',
        borderColor: 'transparent',
        color: '#cccccc',
      },
    },
    '&:visited': {
      color: '#36f',
      backgroundColor: '#fff',
    },
  },
  text: {
    padding: '6px 8px',
    border: 'none',
    backgroundColor: 'transparent',
  },
  icon: {
    padding: 0,
    minWidth: 'auto',
    border: 'none',
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
  startIcon: {
    marginRight: '8px',
    marginLeft: '-4px',
  },
  endIcon: {
    marginRight: '-4px',
    marginLeft: '8px',
  },
})
