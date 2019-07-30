import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import useFetch from './components/apifetchhook;'
import {VDetails} from './components/VDetails';
import {VideoList} from './components/VideoList';
import {SearchVideo} from './components/SearchVideo';

const App = () => {
  const [videoName,
  setVideoName] = useState('DIY');
  const [data,
  isLoading,
isError,
setUrl] = useFetch(`/search/?q=${videoName}`, {defaultResponse: []});

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (!videoName.trim().length) 
  return;
setUrl(`/search/?q=${videoName}`);
setVideoName('');

}

const handleChange = (e) => {
  const {value} = e.target;
  setVideoName(value);
}


return (
  <container></container>
)