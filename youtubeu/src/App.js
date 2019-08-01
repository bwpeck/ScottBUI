import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import StickyFooter from './components/footer';
import Search from './components/Search';
import VideoGrid from './components/VideoGrid';


function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setVideos={setVideos} />
      <VideoGrid videos={videos} />
      <StickyFooter />
    </div>
  );
}

export default App;
