import React, {Fragment} from 'react';
import VideoCard from '../components/VideoCard';




export const VideoList = ({videos, handleVideoOnClick}) => {
    const VideoList = videos.map(video => (<VideoCard
    handleVideoOnClick={handleVideoOnClick}
    key={video.etag}
    video={video}/>));
    return (
        <Fragment>
            <div className="row">
                <p style={{
                    fontSize: '1.5rem'
                }}>Next</p>
                {VideoList}
            </div>
        </Fragment>
    )
}