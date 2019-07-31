import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import VideoCard from './components/VideoCard';

function App() {
	return (
		<div className="App">
			<NavBar />
			<SearchBar />
			<VideoCard />
		</div>
	);
}

export default App;
