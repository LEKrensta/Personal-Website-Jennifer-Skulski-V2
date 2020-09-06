import React from 'react';
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Button, Grow, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "25px",
    },
    videoContainer: {
       position: "relative",
       width: "100%",
       height: 0,
       paddingBottom: "56.25%",
       overflow: "hidden",
       marginBottom: "50px",
       '& iframe': {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
       } 
    }
}));

const Reel = () => {
  const styles = useStyles();

  return (
    <Grid container item justify="center" alignContent="center" id="reel" className={styles.container}>
        <Grid item xs={12}>
            <YouTube videoId="w0U_EEOc3Pk" containerClassName={styles.videoContainer}/>
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
    </Grid>
  );
};

export default Reel;
