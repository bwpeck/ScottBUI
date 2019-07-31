import React from 'react';
import VideoModal from './Modal.js';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
  
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function VideoCard({thumbnail, title, description, videoId}) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    // Modal click handlers
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Grid item>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={thumbnail}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Play Video
                    </Button>
                    <VideoModal videoId={videoId} title={title} description={description} open={open} handleClose={handleClose} />
                </CardActions>
            </Card>
        </Grid>
    )
}