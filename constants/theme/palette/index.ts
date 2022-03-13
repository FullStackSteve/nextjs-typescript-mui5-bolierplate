import { PaletteMode } from '@mui/material'
import { red, yellow, purple, green } from '@mui/material/colors'
import { PaletteOptions } from '@mui/material/styles/createPalette'
import { black, white } from '../colors'

declare module '@mui/material/styles' {
   interface Palette {
      gradient: Palette['background']
   }

   // allow configuration using `createTheme`
   interface PaletteOptions {
      gradient?: PaletteOptions['background']
   }
}

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
   mode: paletteMode,
   background: {
      default: white['900'],
      paper: white['A700']
   },
   gradient: {
      default: `linear-gradient(45deg, ${purple['500']} 15%, ${purple['A700']} 90%)`
   }
}
