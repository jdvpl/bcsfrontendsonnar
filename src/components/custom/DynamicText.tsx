import React from 'react'
import Typography from '../ui/Typography'

const DynamicText = ({ isBrowser }: any) => {
  return (
    <div>
      {isBrowser ? <Typography variant='bodyM3' typeFont='Light' className='text-center mt-3' data-testid="phoneFromTest" role="phoneFromTest">
        Sugerimos realizar este proceso
        <span className="block">
          desde un celular
        </span>
      </Typography> : ''}
    </div>
  )
}

export default DynamicText
