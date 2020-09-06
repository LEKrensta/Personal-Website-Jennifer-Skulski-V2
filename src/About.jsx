import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import Divider from '@material-ui/core/Divider';

import aboutImage from './assets/about-picture.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginBottom: "25px"
  },
  divider: {
    margin: "25px"
  },
  button: {
    margin: "25px auto",
    display: "block"
  },
  image: {
    height: "700px",
    width: "100%",
    maxWidth: '550px',
    borderRadius: "15px",
  },
  container: {
    maxWidth: '1500px',
    marginBottom: "25px",
  },
  imageContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  contentContainer: {
    padding: '25px',
  }
}));

const About = () => {
  const styles = useStyles();

  return (
    <Grid container justify="center" alignContent="center" id="about">
      <Grid item xs={12}>
        <Divider className={styles.divider} />
      </Grid>
      <Grid container justify="center" alignContent="center" className={styles.container}>
        <Grid container item xs={12} md={6} justify="center" alignContent="center" className={styles.imageContainer}>
          <img src={aboutImage} className={styles.image} />
        </Grid>
        <Grid item xs={12} md={6} className={styles.contentContainer}>
          <Grid item className={styles.title}>
            <Typography color="primary" variant="h2">
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <Typography variant="h4">
                I am a recent grad from Syracuse University's accredited S.I. Newhouse School of Public Communications for the class of 2020. As a Television, Radio
                & Film major I am passionate about the entertainment industry and love the opportunities of getting involved in productions around Syracuse.
                </Typography>
              <Typography variant="h6">
                I am a hardworking individual, prepared to overcome any challenge presented to me. With my determination, self-motivation, and creativity,
                I take pride in all my work and refuse to accept mediocrity. The filmmaking process is something in which I have always had a keen interest.
                I love all aspects of the creative process from the initial brainstorming and expanding of an idea, to developing a screenplay,
                to producing the concept, then meticulously piecing together the footage through editing.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
