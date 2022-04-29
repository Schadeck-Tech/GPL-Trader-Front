import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { Flex, Typography } from "../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Home = ({ classes }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Typography
        fontSize="3rem"
        fontWeight={600}
        color="white"
        style={{ marginBottom: "25px" }}
      >
        Página inicial
      </Typography>
    </Flex>
  );
};

export default withStyles((theme) => ({}))(Home);
