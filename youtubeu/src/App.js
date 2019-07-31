import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import VideoCard from './components/VideoCard';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<SearchBar />
			<VideoCard />
		</div>
	);
};

export default App;
