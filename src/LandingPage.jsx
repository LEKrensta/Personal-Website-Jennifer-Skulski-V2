import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Button, Grow, Grid, IconButton } from "@material-ui/core";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import landingPageImage from './assets/landing-page.png';
import resume from './assets/Jennifer-Skulski-Resume.pdf';

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    padding: "20px",
    textAlign: "center",
  },

  backgroundImage: {
    background: `url(${landingPageImage}) repeat scroll center center / cover`,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      background: `url(${landingPageImage}) repeat scroll right / cover`,
    },
  },

  button: {
    margin: "10px"
  },

  arrowAnimation: {
    animation: `$animateArrow 2.5s ease infinite`,
    color: '#fff',
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

}));

const LandingPage = () => {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleModelOpen = () => {
    setOpenModal(true);
  };

  const handleModelClose = () => {
    setOpenModal(false);
  };

  return (
    <Grid container justify="flex-end" id="landing-page" className={styles.backgroundImage}>
      <Grow in={true} timeout={1000}>
        <Grid container item justify="center" alignContent="center" xs={12} sm={6} className={styles.main}>
          <Grid>
            <Typography color="secondary" variant="h2">
              Hello, I'm Jennifer Skulski.
            </Typography>
            
            <Typography color="secondary" variant="h4">
              I'm a writer, editor, and content creator.
            </Typography>
            <Grid container item direction="column" justify="center" alignContent="center">
              <Grid container justify="center" alignContent="center" item>
                <Grid item>
                  <IconButton color="primary" href="https://www.linkedin.com/in/jennifer-skulski/" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="primary" href="mailto:jkskulski4@gmail.com">
                    <EmailIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" className={styles.button} href={resume} download>
                    Resume
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
              <Button variant="contained" color="primary" className={styles.button} onClick={handleModelOpen}>
                  View My Skills
                </Button>
              <Grid item>
                <Button variant="contained" color="primary" className={styles.button} href="#portfolio">
                  View My Work
                </Button>
              </Grid>
              <AutoRotatingCarousel
              label='Close'
              open={openModal}
              autoplay={false}
              onClose={() => handleModelClose()}
              onStart={() => handleModelClose()}
            >
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
                mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
                style={{ backgroundColor: "#700052" }}
                title='Social Media'
                subtitle="Having worked as the Social Media Manager for Syracuse
                University's Women's Lacrosse Camps, my responsibilities included
                filming, photographing, and creating all types of media and social
                media campaigns for the organization's website and social pages. I
                also was the Public Relations Chair for my music service sorority
                for two years, responsible for all content creation and social
                media posts."
              />
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_78899/pc.png' />}
                mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
                style={{ backgroundColor: "#700052" }}
                title='Editing'
                subtitle="I have 4 years of experience working with programs on the Adobe
                Creative Cloud, specifically Premiere Pro, After Effects,
                Photoshop, Lightroom, and Audition. I also have a year of Avid
                experience and am a Certified Avid Media Composer User. During my
                internship at Malka Media, I worked primarily as a post-production
                editor, editing, resizing, and captioning podcast excerpts for
                social media platforms."
              />
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_78900/photo.png' />}
                mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
                style={{ backgroundColor: "#700052" }}
                title='Photography'
                subtitle="I am passionate about photography, especially when it comes to
                capturing unique perspectives of landscapes when traveling. I work
                with DSLRs and am familiar with editing RAW images using Adobe's
                Photoshop and Lightroom."
              />
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_78884/movie.png' />}
                mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
                style={{ backgroundColor: "#700052" }}
                title='Filming'
                subtitle="I have experience working on film sets using a C100 camera as well
                as working in a multi-cam studio, filming with industry standard
                television cameras. During my production internship at Malka
                Media, I spent time working as a PA on set in which I would help
                run A7 cameras or monitor audio levels during podcast recordings
                using ProTools."
              />
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_78871/doc.png' />}
                mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
                style={{ backgroundColor: "#700052" }}
                title='Writing'
                subtitle="I have four years of experience working as a writer on two
                different comedy shows at Newhouse. For these shows I attend
                countless pitch meetings, writer's meetings, and table-reads. I
                also write short scripts and other pilots in my free time, using
                Final Draft for script format."
              />
            </AutoRotatingCarousel>
              </Grid>
              <Grid item>
                <ArrowDownwardIcon className={styles.arrowAnimation} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grow>
    </Grid>
  );
};

export default LandingPage;
