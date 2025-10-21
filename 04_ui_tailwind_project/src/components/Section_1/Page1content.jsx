import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-10  h-[50vh] bg-amber-300 px-18  flex items-center gap-10'>
        <LeftContent/>
        <RightContent/>

    </div>
  )
}

export default Page1content