import React from 'react';
import {Form} from 'react-bootstrap';
import '../App.css';


export const SearchVideo = ({handleFormSubmit, handleChange, videoName}) => {
    return (
        <form className="video-form" onSubmit={handleFormSubmit}>
            <Form.Control
            name="video"
            placeholder="Learn Something New On YouTube U.."
           className="form-control video-form_input mt-4"
           onChange={handleChange}
           value={videoName}/>
           <button type="submit" className="video-form_btn" variant="primary">Lets Learn</button>
           </form>
    )
}