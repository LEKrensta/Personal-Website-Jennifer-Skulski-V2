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

import thumbnail1 from "./assets/portfolio/thumbnails/bobbi-ross-thumbnail.png";
import thumbnail2 from "./assets/portfolio/thumbnails/blue-goes-to-college-thumbnail.png";
import thumbnail3 from "./assets/portfolio/thumbnails/twas-the-night-before-showtime-thumbnail.png";
import thumbnail4 from "./assets/portfolio/thumbnails/one-shot-commercial-thumbnail.PNG";
import thumbnail5 from "./assets/portfolio/thumbnails/interview-thumbnail.png";
import thumbnail6 from "./assets/portfolio/thumbnails/writer-cold-open.png";
import thumbnail7 from "./assets/portfolio/thumbnails/kids-thumbnail.png";

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

const StudioBVideos = () => {
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
   * This is indeed a really inefficient way of rendering these. Could probably make a JSON object of all video details and use React.Fragment?
   */
  return (
    <div id="StudioBVideos" className={styles.grid}>
      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("CNB-IqVr1e4")}>
          <CardMedia
            className={styles.media}
            image={thumbnail1}
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
        <CardActionArea onClick={() => handleDialogOpen("TJh0dRx-MpQ")}>
          <CardMedia
            className={styles.media}
            image={thumbnail2}
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

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("Kh7CTqSwpMo")}>
          <CardMedia
            className={styles.media}
            image={thumbnail3}
            title="Twas the Night Before Showtime"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Twas the Night Before Showtime
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A rhyming Cold Open written for the Christmas episode of
              Syracuse's student-run comedy show, Live From Studio B.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("p4toBXQxvWI")}>
          <CardMedia
            className={styles.media}
            image={thumbnail4}
            title="Live From Studio B- One Shot Commercial"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Live From Studio B- One Shot Commercial
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We wrote, acted, blocked, and produced this ad for Syracuse's
              student-run comedy show, Live From Studio B. The whole video was
              shot in one take.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("JKjMMdo3QtU")}>
          <CardMedia
            className={styles.media}
            image={thumbnail5}
            title="The Return of Jaques Dijon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The Return of Jaques Dijon
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The questionable film critic, Jaques Dijon, is back again as a
              guest on Studio B. This time, he has brought his apprentice,
              Michelle Poupon.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("yfbvAnRhxt8")}>
          <CardMedia
            className={styles.media}
            image={thumbnail6}
            title="Writer’s Room Cold Open"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Writer’s Room Cold Open
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A Cold Open written for our third season premiere of Syracuse's
              student-run comedy show, Live From Studio B.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea onClick={() => handleDialogOpen("iTJnm5i7DZ4")}>
          <CardMedia
            className={styles.media}
            image={thumbnail7}
            title="Things We Thought When We Were Kids"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Things We Thought When We Were Kids
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A short comedy segment written and performed by the writers of
              Live From Studio B.
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

export default StudioBVideos;
