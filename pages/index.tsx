import * as React from 'react'
import type { NextPage } from 'next'
import { Layout } from 'features/ui/containers'
import { Hero, Link } from 'features/ui/components'
import { HeroConstants } from 'constants/pages/home/hero'
import { Box, Button } from '@mui/material'
import { logo } from 'constants/images'

const Home: NextPage = () => {
   const { heading, subHeading, buttons } = HeroConstants

   return (
      <Layout>
         <Hero imageSrc={logo.svg} heading={heading.text} subHeading={subHeading.text}>
            {buttons.map((button, index) => {
               return (
                  <Box maxWidth="sm" key={index}>
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
               )
            })}
         </Hero>
      </Layout>
   )
}

export default Home
