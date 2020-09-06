import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import script1 from "./assets/portfolio/scripts/Rick and Morty Spec.pdf";
import script2 from "./assets/portfolio/scripts/Conspiracy Craze.pdf";
import script3 from "./assets/portfolio/scripts/Cross Roads.pdf";
import script4 from "./assets/portfolio/scripts/Every Night's A Fortnite.pdf";
import script5 from "./assets/portfolio/scripts/Olympus Manor Pilot.pdf";
import script6 from "./assets/portfolio/scripts/Steve and Blue Go to College.pdf";
import script7 from "./assets/portfolio/scripts/Undercover Host.pdf";

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

const ScriptCards = () => {
  const styles = useStyles();
  return (
    <div id="ScriptCards" className={styles.grid}>
      <Card className={styles.root}>
        <CardActionArea href={script1} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rick and Morty Spec
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rick and Jerry compete in planning the greatest family road-trip
              of all time.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea href={script2} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Conspiracy Craze Pilot
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An original sit-com pilot episode. A paranoid group of conspiracy
              theorists end up in group therapy working out their irrational
              fears only to band together to discover some theories of their
              own.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea href={script3} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cross Roads
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This short script follows the man responsible for painting the two
              yellow lines on the road as he becomes delayed in his work when he
              crosses paths with the cross-walk painter.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea href={script4} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Every Night's A Fortnite
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A comedy sketch reimagining the popular video game, Fortnite to
              take place on a college campus.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea href={script5} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Olympus Manor Pilot
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An original sit-com pilot episode. The Greek Gods and Goddesses
              trade their mountain for a mansion as they become reality TV stars
              in Los Angeles.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={styles.root}>
        <CardActionArea href={script6} download>
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
        <CardActionArea href={script7} download>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Undercover Host
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A comedy sketch written for Syracuse’s student-run comedy show,
              Live From Studio B. From the makers of Undercover Boss comes the
              college party edition, “Undercover Host.”
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ScriptCards;
