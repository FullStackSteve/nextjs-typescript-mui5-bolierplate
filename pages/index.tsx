import * as React from 'react'
import type { NextPage } from 'next'
import { Layout } from 'features/ui/containers'
import { Hero, Link } from 'features/ui/components'
import { HeroConstants } from 'constants/pages/home/hero'
import { Grid, Box, Button, useTheme, useMediaQuery } from '@mui/material'
import { logo } from 'constants/images'
import GlobalStyles from 'styles/global'
import {} from '@mui/material/styles'

const Home: NextPage = () => {
   const { heading, subHeading, buttons } = HeroConstants
   const theme = useTheme()
   const isBig = useMediaQuery(theme.breakpoints.up('sm'))

   return (
      <Layout>
         <Hero imageSrc={logo.svg} heading={heading.text} subHeading={subHeading.text}>
            <Grid
               container
               spacing={1}
               sx={{
                  ...GlobalStyles.flexGrid,
                  maxWidth: isBig ? 400 : undefined
               }}
            >
               {buttons.map((button, index) => {
                  return (
                     <Grid item xs={12} sm={4} md={4} key={index}>
                        <Box sx={{ ...GlobalStyles.flexBox }}>
                           <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              noLinkStyle
                              href={button.href}
                           >
                              {button.text as string}
                           </Button>
                        </Box>
                     </Grid>
                  )
               })}
            </Grid>
         </Hero>
      </Layout>
   )
}

export default Home
