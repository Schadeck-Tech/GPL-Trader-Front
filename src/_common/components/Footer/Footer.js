import React, { useState } from "react";
import { Menu, MenuItem, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { Flex } from "../";
import Typography from "../Typography";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Footer = ({ classes }) => {
  return (
    <Flex className={classes.container}>
      <Typography color="white">Copyright © GPL Trader - 2022</Typography>
    </Flex>
  );
};

export default withStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "10px 0px",
  },
}))(Footer);
