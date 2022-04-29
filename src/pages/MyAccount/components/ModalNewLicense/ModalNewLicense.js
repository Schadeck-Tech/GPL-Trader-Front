import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { Flex, Typography, Card, Button } from "../../../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
};

const ModalNewLicense = ({ classes, onClose }) => {
  return (
    <Card className={classes.card}>
      <Button
        variant="icon"
        onClick={() => onClose()}
        className={classes.closeIcon}
      >
        <CloseIcon />
      </Button>
      <DialogTitle disableTypography className={classes.title}>
        Ative sua licença
      </DialogTitle>
      <DialogContent>
        <Flex width="100%" flexDirection="column">
          <TextField
            variant="outlined"
            fullWidth
            className={classes.marginTop20}
            id="license"
            name="license"
            label="Licença"
            type="license"
            InputLabelProps={{ shrink: true }}
            size="small"
            // value={bag.values.email}
            // onChange={bag.handleChange}
            // error={bag.touched.email && Boolean(bag.errors.email)}
            // helperText={bag.touched.email && bag.errors.email}
          />
          <TextField
            variant="outlined"
            fullWidth
            className={classes.marginTop20}
            id="account"
            type="account"
            name="account"
            label="Id da conta metatrader"
            InputLabelProps={{ shrink: true }}
            size="small"
            // value={bag.values.password}
            // onChange={bag.handleChange}
            // error={bag.touched.password && Boolean(bag.errors.password)}
            // helperText={bag.touched.password && bag.errors.password}
          />
        </Flex>
      </DialogContent>
      <DialogActions>
        <Flex width="100%" center>
          <Button className={classes.button}>Ativar</Button>
        </Flex>
      </DialogActions>
    </Card>
  );
};

export default withStyles((theme) => ({
  marginTop20: {
    marginTop: 20,
  },
  card: {
    position: "relative",
    background: "white",
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    height: 350,
  },
  title: {
    color: "#1c1c1c",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  button: {
    width: "95%",
    backgroundColor: "#1c1c1c",
    color: "white",
  },
  closeIcon: {
    position: "absolute",
    right: "0px",
    top: "15px",
    cursor: "pointer",
    "&:hover": {
      transform: "unset",
      backgroundColor: "white",
    },
  },
}))(ModalNewLicense);
