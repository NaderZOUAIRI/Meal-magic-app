import React , {useEffect, useState} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import hamBurgerIcon from "../images/hamburger.jpg";

//custom-hook
import useForm from "../hooks/forms";
import { loginAction } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  title: {
    margin: "10px 0px 10px 0px",
  },
  hamBurger: {
    height: 200,
    width: 240,
  },
}));

export default function Login({match}) {
  const classes = useStyles();

  const { loading, serverError, errors, signUpSuccess } = useSelector(
    (state) => state.UI
  );
  const [token, setToken] = useState("");
  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/auth/token/verify",
      data: { token },
    })
      .then((response) => {
        toast.success("activated");
      })
      .catch((error) => {
        toast.error("servor error ");
      });
  };
  useEffect(() => {
    let token = match.params.token;
    setToken(token);
  }, []);

  return (
    <Grid container className={classes.form}>
        <ToastContainer/>
      <Grid item sm />
      <Grid item sm style={{ marginBottom: 34 }}>
        <img
          src={hamBurgerIcon}
          alt="hamBurger"
          className={classes.hamBurger}
        />
        <Typography variant="h3" className={classes.title}>
          Login
        </Typography>
        
         
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}

            onClick={(e) => {
                clickSubmit(e);
              }}
          >
            activate
           
          </Button>
          <br />
          <small className={classes.small}>
            don't have an account ? sign up <Link to="/login">here</Link>
          </small>
        
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
