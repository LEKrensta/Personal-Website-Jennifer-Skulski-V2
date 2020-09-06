import React from "react";
import { AppBar, Typography, Button, Grid, useScrollTrigger, Slide } from "@material-ui/core";

const HideOnScroll = (props) => {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const NavBar = () => (
    <HideOnScroll>
        <AppBar position="sticky">
            <Grid container justify="space-evenly">
                <Grid container item xs={8} justify="center" alignContent="center">
                    <Typography variant="h5">
                        Jennifer Skulski
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button size="large" color="secondary" href="#landing-page">
                        Home
                    </Button>
                    <Button size="large" color="secondary" href="#reel">
                        Reel
                    </Button>
                    <Button size="large" color="secondary" href="#portfolio">
                        Portfolio
                    </Button>
                    <Button size="large" color="secondary" href="#about">
                        About
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
    </HideOnScroll>
);

export default NavBar;