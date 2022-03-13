import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { black, white } from 'constants/theme/colors'

let theme = createTheme({
   palette: {
      primary: {
         main: black.A700
      },
      secondary: {
         main: white[50]
      },
      error: {
         main: red.A400
      }
   }
})

theme = responsiveFontSizes(theme)

export default theme
