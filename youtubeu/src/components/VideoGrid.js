import React from 'react';
import VideoCard from './VideoCard.js';

import Grid from '@material-ui/core/Grid';

export default function VideoGrid({videos}) {
    

    return (
        <Grid container spacing={3} justify="center" >
            {videos.map((video, idx) => {
                return (
                    <VideoCard
                        key={idx}
                        thumbnail={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        description={video.snippet.description}
                        videoId={video.id.videoId}
                    />
                )
            })}
        </Grid>
    )
}