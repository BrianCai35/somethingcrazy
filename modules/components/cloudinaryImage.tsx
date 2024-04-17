'use client'

import { CldImage as CldImageDefault, CldImageProps } from 'next-cloudinary'

const CldImage = (props: CldImageProps): JSX.Element => {
  return <CldImageDefault {...props} />
}

export default CldImage
