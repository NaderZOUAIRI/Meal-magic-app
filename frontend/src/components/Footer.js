import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e8ede1",
    marginTop: 40,
    height: "42vh",
    textAlign: "center",
  },
  innerCont: {
    margin: "74px 40px 40px 40px",
  },
  resources: {
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
}));

export default function Footer() {
  const { authenticated } = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} sm={2} className={classes.innerCont}>
        {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
            

            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h4" component="p">
              Meal Magic for Business
            </Typography>
            <Typography variant="body1" component="p">
              Get more out of your business, without losing focus on what is
              most important — delighting your customers
            </Typography>
            <br />
            <Link to="/addrestaurant">
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.innerCont}>
        <Typography variant="h5" component="p">
          Meal Magic NewsLetter
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 28 }}>
          Stay updated with new offers from Meal Magic
        </Typography>
        <TextField label="Your Email address" variant="outlined" />
        <Button className={classes.buttonStyleTwo}>SEND</Button>
      </Grid>
    </Grid>
  );
}
