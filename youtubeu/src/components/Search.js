import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function InputWithIcon() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item alignContent="center" >
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" />
        </Grid>
      </Grid>
    </div>
  );
}

export default function Search() {
  const [videos, setVideos] = useState();

  useEffect( () => {
    const API = process.env.YOUTUBE_API;
    // axios.get('')
  })
  return (
    <Container>
      <InputWithIcon />
    </Container>
  )
}