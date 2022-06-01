import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react'

export const Loading = () => {
  return (
    <div className={'loading container '}>
      <SpinnerCircularFixed className='loading__spinner' size={100} thickness={100} speed={150} color="rgba(57, 121, 172, 0.51)" secondaryColor="rgba(172, 57, 57, 0.11)" />
    </div>
  )
}
