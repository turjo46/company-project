import React from 'react'
import MediaSolutions from '../MediaSolutions'

import MediaCard from '../MediaCard'
import NetworkPartner from '../NetworkPartner'
import MissionSection from '../MissionSection'
import DesignCard from '../DesignCard'


const Media = () => {
  return (
    <div className='bg-white'>
        <MediaSolutions/>
        <MediaCard/>
        <NetworkPartner/>
        <MissionSection/>
        <DesignCard/>
        
        

    </div>
  )
}

export default Media