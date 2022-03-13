import { PaletteMode } from '@mui/material'
import { red, yellow, purple, green } from '@mui/material/colors'
import { PaletteOptions } from '@mui/material/styles/createPalette'
import { black, white } from '../colors'

const paletteMode: PaletteMode = 'light'

export const palette: PaletteOptions = {
   primary: {
      main: black['A700']
   },
   secondary: {
      main: white['A700']
   },
   error: {
      main: red['900']
   },
   warning: {
      main: yellow['A700']
   },
   info: {
      main: purple['900']
   },
   success: {
      main: green['600']
   },
   mode: paletteMode
}
