import { Grid, Card } from '@mui/material'

import React from 'react'
import GlobalStyles from 'styles/global'

interface Props {
   children?: React.ReactNode
   sx?: boolean
}

export function Jumbotron({ children }: Props) {
   return (
      <Grid
         alignItems="center"
         sx={{
            ...GlobalStyles.flexBox,
            minWidth: '100%',
            minHeight: '100vh'
         }}
      >
         <Card
            style={{}}
            sx={{ ...GlobalStyles.transparentBox, ...GlobalStyles.stretchBox }}
         >
            {children}
         </Card>
      </Grid>
   )
}
