// ! triple check imports when you get errors.
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	iconButton: {
		padding: 10
	}
});

const SearchBar = () => {
	const classes = useStyles();
	// ! you had the useState import as 'UseState' instead of 'useState'.
	const [ searchValue, setSearchValue ] = useState('');

	// * youtube Api
	var YouTube = require('youtube-node');
	var youTube = new YouTube();
	youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

	youTube.search('World War z Trailer', 1, function(error, result) {
		if (error) {
			console.log(error);
		} else {
			console.log(JSON.stringify(result, null, 2));
		}
	});

	const handleInputChanges = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<Paper className={`search ${classes.root}`}>
			<IconButton className={classes.iconButton} aria-label="menu">
				Categories
			</IconButton>
			<InputBase
				className={classes.input}
				placeholder="Search.."
				Value={searchValue}
				onChange={handleInputChanges}
			/>
			<IconButton className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
