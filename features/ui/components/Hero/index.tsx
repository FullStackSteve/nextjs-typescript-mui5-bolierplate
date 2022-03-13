import { Box, Grid, Typography } from '@mui/material'
import { Jumbotron } from 'features/ui/containers'
import { StyledImage } from '../StyledImage'
import GlobalStyles from 'styles/global'

interface Props {
   children?: React.ReactNode
   imageSrc?: string | StaticImageData
   imageAlt?: string
   heading?: string
   subHeading?: string
}

export function Hero({
   children,
   imageSrc,
   imageAlt,
   heading = 'Heading',
   subHeading = 'Subheading'
}: Props) {
   return (
      <Jumbotron>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Box sx={GlobalStyles.flexBox}>
                  <Box sx={{ width: '80%' }}>
                     {imageSrc ? (
                        <StyledImage
                           layout="responsive"
                           src={imageSrc}
                           alt={imageAlt}
                           width={283}
                           height={64}
                        />
                     ) : null}
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box sx={GlobalStyles.flexBox}>
                  <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
                     {heading}
                  </Typography>
                  <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
                     {subHeading}
                  </Typography>
                  {children}
               </Box>
            </Grid>
         </Grid>
      </Jumbotron>
   )
}
