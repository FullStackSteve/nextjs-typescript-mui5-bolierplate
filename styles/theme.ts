// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from 'constants/theme/palette'

let theme = createTheme({
   palette: palette
})

theme = responsiveFontSizes(theme)

export default theme
