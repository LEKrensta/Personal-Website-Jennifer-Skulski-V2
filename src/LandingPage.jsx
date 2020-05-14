import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grow } from "@material-ui/core";
import landingPageImage from './assets/landing-page.png';
import resume from './assets/Jennifer-Skulski-Resume.pdf';

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100vh",
    padding: "20px",
    textAlign: "center"
  },

  backgroundImage: {
    background: `url(${landingPageImage}) repeat scroll center center / cover`
  },

  heading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ['@media (min-width:1080px)']: {
      marginRight: "15%"
    }
  },

  button: {
    margin: "10px"
  },

  arrowAnimation: {
    animation: `$animateArrow 2.5s ease infinite`
  },

  "@keyframes animateArrow": {
    "0%": {
      transform: "translateY(-40%)"
    },
  
    "50%": {
      transform: "translateY(40%)"
    },
  
    "100%": {
      transform: "translateY(-40%)"
    }
  }

});

const LandingPage = () => {
  const styles = useStyles();

  return (
    <div id="landing-page" className={styles.backgroundImage}>
      <Grow in={true} timeout={1000}>
        <div className={styles.main}>
          <div className={styles.heading}>
            <Typography color="secondary" variant="h2">
              Hello, I'm Jennifer Skulski.
            </Typography>
            
            <Typography color="secondary" variant="h4">
              I'm a writer, editor, and content creator.
            </Typography>
            
            <Button variant="contained" color="primary" className={styles.button} href={resume} download>
              Resume
            </Button>
            
            <Button variant="contained" color="primary" className={styles.button} href="#portfolio">
              View My Work
            </Button>
            
            <ArrowDownwardIcon className={styles.arrowAnimation} />
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default LandingPage;
