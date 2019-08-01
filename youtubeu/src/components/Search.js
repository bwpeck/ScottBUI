import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import Youtube from 'youtube-node';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function InputWithIcon({handleChange, query, handleSearch}) {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <FormControl variant="filled" style={{margin: '10px', minWidth: 120}}>
          <Select>
            <MenuItem value={'test'}>Test</MenuItem>
            <MenuItem value={'test'}>Test</MenuItem>
            <MenuItem value={'test'}>Test</MenuItem>
            <MenuItem value={'test'}>Test</MenuItem>
          </Select>
        </FormControl>
        <Grid item alignContent="center" >
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" onChange={handleChange} value={query} />
        </Grid>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleSearch} >
        Search
        </Button>
      </Grid>
    </div>
  );
}

export default function Search({setVideos}) {
  const [query, setQuery] = useState();
  var youtube = new Youtube();
  youtube.setKey("AIzaSyDXEabt6qVD6vGY5ZcGiHTuCHYyJ43aPDo");

  function handleChange(e) {
    setQuery(e.target.value)
    console.log(query)
  }

  function handleSearch(e) {
    youtube.search(query, 15, function(error, result) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(JSON.stringify(result.items, null, 2));
        setVideos(result.items)
      }
    });
  }

  return (
    <Container>
      <InputWithIcon handleChange={handleChange} value={query} handleSearch={handleSearch} />
    </Container>
  )
}