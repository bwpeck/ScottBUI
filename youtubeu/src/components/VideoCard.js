import React from 'react';
import {Media} from 'react-bootstrap';


const VideoCard = ({video, handleVideoOnClick}) => {
    const {thumbnails, title, channelTitle} = video.snippet;
    const IMG_URL = thumbnails.medium.url;


    return (
        <Media
        onClick={() => handleVideoOnClick(video)}
        className="mt-3 mb-3 video-item">
            <img className="mr-3 video-item_img" src={IMG_URL} alt="Placeholder"/>
            <Media.Body className="align-self-center">
                <h3 className="video_heading">{title.inclueds('&amp')
                ? title.replace ('&amp;', '&')
                : title }</h3>
                <p>{channelTitle}</p>
            </Media.Body>
        </Media>
    )
}

export default VideoCard;