import { Breakpoint, Container } from '@mui/material'
import { ReactChild } from 'react'
import { palette } from 'constants/theme/palette'
interface Props {
   children: ReactChild
   maxWidth?: Breakpoint
}
export function Layout({ children, maxWidth = 'xl' }: Props) {
   return (
      <Container
         sx={{
            background: palette.gradient?.default
         }}
         maxWidth={maxWidth}
      >
         {children}
      </Container>
   )
}
