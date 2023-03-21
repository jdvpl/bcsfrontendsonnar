import React from 'react'
import Typography from '../ui/Typography'

const DynamicText = ({ isBrowser }: any) => {
  return (
    <div>
      {isBrowser ? <Typography variant='bodyS3' className='text-center mt-3 font-monserratLight text-[18px]' data-testid="phoneFromTest" role="phoneFromTest">
        Sugerimos realizar este proceso
        <span className="block">

          desde un celular
        </span>
      </Typography> : ''}
    </div>
  )
}

export default DynamicText
