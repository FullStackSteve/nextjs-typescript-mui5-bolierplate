import { Box, SxProps } from '@mui/material'
import Image from 'next/image'

interface Props {
   src: string | StaticImageData
   alt?: string
   width?: string | number | undefined
   height?: string | number | undefined
   sx?: SxProps
   layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill'
   blur?: 'blur' | 'empty' | undefined
}

export function StyledImage({
   src,
   alt = '',
   width,
   height,
   sx,
   layout = 'intrinsic'
}: Props) {
   return (
      <Box sx={sx}>
         <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
            // placeholder={blur}
         />
      </Box>
   )
}
