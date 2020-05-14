import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";

import thumbnail1 from "./assets/portfolio/thumbnails/ufc-hype-thumbnail.jpeg";
import thumbnail2 from "./assets/portfolio/thumbnails/an-eye-for-beauty-thumbnail.png";
import thumbnail3 from "./assets/portfolio/thumbnails/avant-garde-films-thumbnail.png";
import thumbnail4 from "./assets/portfolio/thumbnails/i-want-to-hold-your-hand-thumbnail.png";
import thumbnail5 from "./assets/portfolio/thumbnails/jerry-promo-thumbnail.png";
import thumbnail6 from "./assets/portfolio/thumbnails/k9-thumbnail.png";
import thumbnail7 from "./assets/portfolio/thumbnails/lego-big-bang-thumbnail.png";
import thumbnail8 from "./assets/portfolio/thumbnails/poisoned-thumbnail.png";
import thumbnail9 from "./assets/portfolio/thumbnails/bobbi-ross-thumbnail.png";
import thumbnail10 from "./assets/portfolio/thumbnails/blue-goes-to-college-thumbnail.png";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "50px",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  root: {
    margin: "25px",
    maxWidth: "345px",
  },

  media: {
    height: "140px",
  },
});

const VideoCards = () => {
  const styles = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const handleDialogOpen = (id) => {
    setVideoId(id);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  /**
   * This is indeed a really inefficient way of rendering these, but ran out of time
   */
  return (
    <div id="VideoCards" className={styles.grid}>
      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("ViWwWWKmXfM")}>
          <CardMedia
            className={styles.media}
            image={thumbnail1}
            title="UFC Hype Video"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              UFC Hype Video
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A Test Edit created during my post-production internship at Malka
              Media in Santa Monica during the Fall 2019 semester. (Organized
              hours of footage to create a 60 second UFC promo in Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("cx76L0rlZl8")}>
          <CardMedia
            className={styles.media}
            image={thumbnail2}
            title="An Eye for Beauty"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              An Eye for Beauty
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An artistic montage capturing the soul of a filmmaker. (Edited in
              Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("xQBR6pBNJaU")}>
          <CardMedia
            className={styles.media}
            image={thumbnail3}
            title="Avant-Garde Films"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Avant-Garde Films
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The title sequence introducing the production company: Avant-Garde
              Films (Edited in Adobe After Effects)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("Mr_sNVeQw00")}>
          <CardMedia
            className={styles.media}
            image={thumbnail4}
            title="I Want to Hold Your Hand"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              I Want to Hold Your Hand
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An S.I. Newhouse TRF 205 Production (Worked as the sole editor,
              putting together dailies and full cuts in Premiere Pro and editing
              sound in Adobe Audition)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("O6dh4vl6S1o")}>
          <CardMedia
            className={styles.media}
            image={thumbnail5}
            title='"Jerry" Promo'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              "Jerry" Promo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A local, adored postal worker who love nothing goes down a dark
              path upon realizing that he is short on money. Stay tuned for the
              comedic murder mystery, "Jerry." (A short trailer edited in
              Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("TctBtbiOHqc")}>
          <CardMedia
            className={styles.media}
            image={thumbnail6}
            title="Fear to Freedom: A Dog Trainer's Journey"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Fear to Freedom: A Dog Trainer's Journey
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Charles Warren, owner and head trainer of Collective K9 Training
              in Syracuse, NY, was afraid of dogs until he was 22 years old.
              Watch as Charles discusses how he turned his fear into freedom by
              discovering his true passion for dog training. (A short
              documentary I helped film and produce then fully edited in
              Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("9a3IDerTgmA")}>
          <CardMedia
            className={styles.media}
            image={thumbnail7}
            title="Lego Big Bang Theory"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lego Big Bang Theory
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A lego version of Sheldon Cooper's glorious explanation of the
              game Rock, Paper, Scissors, Lizard, Spock. Consisting of around
              460 individual pictures to bring you a stop motion video.
              (Photographed then edited in Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("H1YiJghqO28")}>
          <CardMedia
            className={styles.media}
            image={thumbnail8}
            title="Poisoned"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Poisoned
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              There's no better way to start your day than with some coffee...
              well unless its been tampered with... (A short sequence edited in
              Premiere Pro)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("CNB-IqVr1e4")}>
          <CardMedia
            className={styles.media}
            image={thumbnail9}
            title="Bobbi and Ross"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bobbi and Ross
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sibling duo, Bobbi and Ross, own a record store and are
              desperately trying to get rid of all Micahel Jackson merchandise.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("wYtnQOzQd0o")}>
          <CardMedia
            className={styles.media}
            image={thumbnail10}
            title="Steve and Blue Go to College"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Steve and Blue Go to College
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A comedy sketch parodying Blue’s Clues written for Syracuse’s
              student-run comedy show, Live From Studio B. Looks like Blue is
              all grown up. I wonder how Steve will feel about that…
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="lg">
        <DialogContent>
          <YouTube videoId={videoId} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideoCards;
