import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import Youtube from 'youtube-node';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

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

export default function Search() {
  const [query, setQuery] = useState();
  const [videos, setVideos] = useState();
  var youtube = new Youtube();
  youtube.setKey("AIzaSyDXEabt6qVD6vGY5ZcGiHTuCHYyJ43aPDo");

  function handleChange(e) {
    setQuery(e.target.value)
    console.log(query)
  }

  function handleSearch(e) {
    youtube.search(query, 10, function(error, result) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  }

  return (
    <Container alignContent="Grid" >
      <InputWithIcon handleChange={handleChange} value={query} handleSearch={handleSearch} />
    </Container>
  )
}