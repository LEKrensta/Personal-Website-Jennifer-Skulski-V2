import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import Divider from '@material-ui/core/Divider';

import aboutImage from './assets/about-picture.jpg';

const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    ['@media (max-width:1080px)']: {
      flexDirection: "column"
    }
  },

  title: {
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px"
  },

  divider: {
    margin: "25px"
  },

  image: {
    height: "400px",
    objectFit: "cover",
    margin: "0 50px 0 50px",
    borderRadius: "50px",
    ['@media (max-width:1080px)']: {
      width: "400px",
      margin: "auto",
      marginBottom: "25px"
    },
  },

  button: {
    margin: "25px auto",
    display: "block"
  },
});

const About = () => {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleModelOpen = () => {
    setOpenModal(true);
  };

  const handleModelClose = () => {
    setOpenModal(false);
  };

  return (
    <div id="about">
      <Typography color="primary" variant="h2" className={styles.title}>
        About Me
      </Typography>
      <div className={styles.main}>
        <img src={aboutImage} className={styles.image} />
        <Container>
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
            <Button variant="contained" color="primary" className={styles.button} onClick={handleModelOpen}>
              View My Skills
            </Button>
        </Container>
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
            style={{ backgroundColor: "#414242" }}
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
            style={{ backgroundColor: "#414242" }}
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
            style={{ backgroundColor: "#414242" }}
            title='Photography'
            subtitle="I am passionate about photography, especially when it comes to
            capturing unique perspectives of landscapes when traveling. I work
            with DSLRs and am familiar with editing RAW images using Adobe's
            Photoshop and Lightroom."
          />
          <Slide
            media={<img src='http://www.icons101.com/icon_png/size_256/id_78884/movie.png' />}
            mediaBackgroundStyle={{ backgroundColor: "#fff", height: "calc(100% - 325px)" }}
            style={{ backgroundColor: "#414242" }}
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
            style={{ backgroundColor: "#414242" }}
            title='Writing'
            subtitle="I have four years of experience working as a writer on two
            different comedy shows at Newhouse. For these shows I attend
            countless pitch meetings, writer's meetings, and table-reads. I
            also write short scripts and other pilots in my free time, using
            Final Draft for script format."
          />
        </AutoRotatingCarousel>
      </div>
      <Divider className={styles.divider} />
    </div>
  );
};

export default About;
