import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Grid } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: 100,
        justifyContent: "center",
    }
}));

const Footer = () => {
  const styles = useStyles();

  return (
    <AppBar position="relative" className={styles.appBar}>
        <Grid container justify="center" alignContent="center">
            <Grid item>
                <IconButton color="secondary" href="https://www.linkedin.com/in/jennifer-skulski/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color="secondary" href="mailto:jkskulski4@gmail.com">
                    <EmailIcon />
                </IconButton>
            </Grid>
        </Grid>
    </AppBar>
  );
};

export default Footer;
