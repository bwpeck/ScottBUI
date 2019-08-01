import React from 'react';
import '../Search/Search.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Form} from 'react-bootstrap';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const button = styled.button

export const SearchVideo = ({handleFormSubmit, handleChange, videoName}) => {
    return (
        <form className="video-form" onSubmit={handleFormSubmit}>
            <Form.Control
            name="video"
            placeholder="Learn Something New On YouTube U.."
           className="form-control video-form_input mt-4"
           onChange={handleChange}
           value={videoName}/>
           <button type="submit" className="video-form_btn" variant="outline-danger">fuck</button>
           </form>
    )
}