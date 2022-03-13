import { TypographyOptions } from '@mui/material/styles/createTypography'
import sizes from 'constants/theme/sizes'

export const typography: TypographyOptions = {
   fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
   ].join(','),
   h1: { fontSize: sizes.largest },
   h2: { fontSize: sizes.larger },
   h3: { fontSize: sizes.large },
   h4: { fontSize: sizes.regular },
   h5: { fontSize: sizes.medium },
   h6: { fontSize: sizes.small },
   subtitle1: { fontSize: sizes.regular },
   subtitle2: { fontSize: sizes.small },
   body1: { fontSize: sizes.regular },
   body2: { fontSize: sizes.small },
   caption: { fontSize: sizes.smallest },
   button: { fontSize: sizes.button },
   overline: { fontSize: sizes.small }
}
