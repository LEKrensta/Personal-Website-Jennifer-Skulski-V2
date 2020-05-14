import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";

import VideoCards from "./VideoCards";
import StudioBVideos from "./StudioBVideos";
import ScriptCards from "./ScriptCards";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "50px",
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
    reel: false,
    scripts: false,
    LFSB: false
  });

  const renderWithFilter = () => {
    if (filter.all) {
      return (
        <Grow in={true} unmountOnExit>
          <div>
            <VideoCards />
            <StudioBVideos />
            <ScriptCards />
          </div>
        </Grow>
      );
    } else if (filter.reel) {
      return <VideoCards />;
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
              reel: false,
              scripts: false,
              LFSB: false,
            })
          }
        >
          All
        </Button>

        <Button
          variant={filter.reel ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: false,
              reel: true,
              scripts: false,
              LFSB: false,
            })
          }
        >
          Reel
        </Button>

        <Button
          variant={filter.scripts ? "contained" : "text"}
          color="primary"
          className={styles.button}
          onClick={() =>
            setFilter({
              all: false,
              reel: false,
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
              reel: false,
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
