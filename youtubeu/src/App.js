import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import useFetch from './components/apifetchhook';
import {VDetails} from './components/VDetails';
import {VideoList} from './components/VideoList';
import {SearchVideo} from './components/SearchVideo';

const App = () => {
  const [videoName,
  setVideoName] = useState('DIY');
  const [selectedVideo,
  setSelectedVideo] = useState('');

  const [data,
    isLoading,
    isError,
    setUrl] = useFetch(`/search/?q=${videoName}`, {defaultResponse: []});

const handleVideoOnClick = (video) => {
  setSelectedVideo (video);
}

const handleFormSubmit = (e) => {
  e.preventDefault ();
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
  <Container>
    <SearchVideo
    handleChange={handleChange}
    handleFormSubmit={handleFormSubmit}
    videoName={videoName}/> {isLoading
    ? <div className="spinner"></div>
    : <div className="row mt-5">
      <div className="col-12 col-1g-8">
        <VDetails selectedVideo={selectedVideo}/>
      </div>
    <div className="col-12 col-lg-4">
      <VideoList handleVideoOnClick={handleVideoOnClick} videos={data}/>
    </div>
    </div>
    }

    {isError && <div className="error">API Error: Somethings Wrong Try Again Later!</div>}
</Container>
)
  }

  export default App;