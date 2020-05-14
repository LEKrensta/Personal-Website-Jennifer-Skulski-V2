import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Button } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

const NavBar = () => {
    const styles = useStyles();

    return (
        <AppBar position="sticky" className={styles.appBar}>
            <IconButton href="#landing-page">
                <HomeIcon color="secondary" />
            </IconButton>
            <Button size="large" color="secondary" href="#about">
                About
            </Button>
            <Button size="large" color="secondary" href="#portfolio">
                Portfolio
            </Button>
        </AppBar>
    )
};

export default NavBar;