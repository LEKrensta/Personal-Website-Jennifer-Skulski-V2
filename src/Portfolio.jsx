import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import VideoCards from "./VideoCards";
import ScriptCards from "./ScriptCards";
import PhotoCards from "./PhotoCards";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "50px",
  },

  grid: {},

  root: {
    margin: "25px",
    maxWidth: "345px",
  },

  media: {
    height: "140px",
  },
});

const Portfolio = () => {
  const styles = useStyles();
  return (
    <div id="portfolio">
      <Typography color="primary" variant="h2" className={styles.title}>
        Portfolio
      </Typography>
      <div className={styles.grid}>
        <VideoCards />
        <ScriptCards />
        <PhotoCards />
      </div>
    </div>
  );
};

export default Portfolio;
