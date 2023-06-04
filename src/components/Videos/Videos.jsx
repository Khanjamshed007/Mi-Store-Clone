import React from 'react';
import './Videos.scss'
import VideoCard from './VideoCard/VideoCard';

const Videos = ({videos}) => {
  return (
    <div className='video'>
        {
        videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} image={item.image} name={item.name} />
        ))
        }
    </div>
  )
}

export default Videos