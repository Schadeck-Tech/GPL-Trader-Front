import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/user";

import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";

PropTypes.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
};

const AppWrapper = ({ classes, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <NavMenu />
      <div className={classes.container}>
        {children}
        <div id="snackbar" />
      </div>
      <Footer />
    </div>
  );
};

export default withStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background:
      "linear-gradient(350deg, rgba(56,56,56,1) 15%, rgba(0,0,0,1) 100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.only("lg")]: {
      height: "100%",
    },
    [theme.breakpoints.only("md")]: {
      height: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "100% !important",
    },
    [theme.breakpoints.only("xs")]: {
      height: "100%",
    },
  },
  container: {
    width: "100%",
    height: "100%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    width: "93.5vw",
    height: "100%",
    left: "6.5vw",
    overflowY: "auto",
    position: "fixed",
  },
}))(AppWrapper);
