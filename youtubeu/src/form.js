import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const Form = (props) => {
	const useStyles = makeStyles((theme) => ({
		button: {
			display: 'block',
			marginTop: theme.spacing(2)
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25)
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto'
			}
		}
	}));

	const classes = useStyles();
	const [ age, setAge ] = React.useState('');
	const [ open, setOpen ] = React.useState(false);

	function handleChange(event) {
		setAge(event.target.value);
	}

	function handleClose() {
		setOpen(false);
	}

	function handleOpen() {
		setOpen(true);
	}

	return (
		<form autoComplete="off">
			<FormControl className={`form-container ${classes.formControl}`}>
				<div className={`form ${classes.search}`}>
					<InputLabel className="drop-down-label" htmlFor="demo-controlled-open-select">
						Keywords
					</InputLabel>
					<Select
						className="drop-down"
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						value={age}
						onChange={handleChange}
						inputProps={{
							name: 'age',
							id: 'demo-controlled-open-select'
						}}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Math</MenuItem>
						<MenuItem value={20}>Science</MenuItem>
						<MenuItem value={30}>Grammer</MenuItem>
					</Select>

					<InputBase
						className="searchField"
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						inputProps={{ 'aria-label': 'search' }}
					/>
					<button className={`searchBtn ${classes.searchIcon}`}>
						<SearchIcon />
					</button>
				</div>
			</FormControl>
		</form>
	);
};

export default Form;
