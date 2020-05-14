import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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

const PhotoCards = () => {
  const styles = useStyles();
  return (
    <div id="PhotoCards" className={styles.grid}>
      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PhotoCards;
