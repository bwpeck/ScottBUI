import React, { UseState } from 'react';
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
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4
	}
});

const SearchBar = (props) => {
	const classes = useStyles();
	// const [ searchValue, setSearchValue ] = UseState('');

	// var YouTube = require('youtube-node');
	// var youTube = new YouTube();
	// youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

	// const handleInputChanges = (event) => {
	// 	setSearchValue(event.target.value);
	// };

	// const resetInputField = () => {
	// 	setSearchValue('');
	// };

	// const callSearchFunction = (event) => {
	// 	event.preventDefault();
	// 	props.search(searchValue);
	// 	resetInputField();
	// };

	return (
		<Paper className={`search ${classes.root}`}>
			<IconButton className={classes.iconButton} aria-label="menu">
				Categories
			</IconButton>
			<InputBase
				className={classes.input}
				placeholder="Search.."
				inputProps={{ 'aria-label': 'search google maps' }}
				// value={searchValue}
				// onChange={handleInputChanges}
			/>
			<IconButton className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};
export default SearchBar;
