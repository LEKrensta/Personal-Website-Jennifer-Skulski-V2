import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import VideoCards from "./VideoCards";
import StudioBVideos from "./StudioBVideos";
import ScriptCards from "./ScriptCards";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "25px",
  },

  root: {
    margin: "25px",
    maxWidth: "345px",
  },

  media: {
    height: "140px",
  },

  button: {
    margin: "10px",
  },

  filter: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const Portfolio = () => {
  const styles = useStyles();
  const [filter, setFilter] = useState({
    all: true,
    videos: false,
    scripts: false,
    LFSB: false
  });

  const renderWithFilter = () => {
    if (filter.all) {
      return (
          <div>
            <VideoCards />
            <StudioBVideos />
            <ScriptCards />
          </div>
      );
    } else if (filter.videos) {
      return (<VideoCards />);
    } else if (filter.scripts) {
      return <ScriptCards />;
    } else if (filter.LFSB) {
      return <StudioBVideos />;
    }
  };

  return (
    <div id="portfolio">
      <Typography color="primary" variant="h2" className={styles.title}>
        Portfolio
      </Typography>
      <div className={styles.filter}>
        <Button
          variant={filter.all ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: true,
              videos: false,
              scripts: false,
              LFSB: false,
            })
          }
        >
          All
        </Button>

        <Button
          variant={filter.videos ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: false,
              videos: true,
              scripts: false,
              LFSB: false,
            })
          }
        >
          Videos
        </Button>

        <Button
          variant={filter.scripts ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: false,
              videos: false,
              scripts: true,
              LFSB: false,
            })
          }
        >
          Scripts
        </Button>

        <Button
          variant={filter.LFSB ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: false,
              videos: false,
              scripts: false,
              LFSB: true,
            })
          }
        >
          Live From Studio B
        </Button>
      </div>
      {renderWithFilter()}
    </div>
  );
};

export default Portfolio;
