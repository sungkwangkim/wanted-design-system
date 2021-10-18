import * as colors from '../colors'
import zIndex from '../zIndex'

export const DEFAULT_SPACE = 8

const palette = () => {
  return {
    primary: colors.blue[400],
    secondary: colors.green[400],
    error: colors.red[400],
    divider: colors.grey[500],
    common: colors.common,
    colors,
  }
}

const createTheme = () => ({
  palette: palette(),
  spacing: (x: number) => {
    return DEFAULT_SPACE * x
  },
  zIndex: zIndex,
})

export const theme = createTheme()
