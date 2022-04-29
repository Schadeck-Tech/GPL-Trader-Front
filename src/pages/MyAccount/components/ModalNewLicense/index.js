import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalNewLicense from "./ModalNewLicense";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const ModalLicense = ({ open, onClose, classes, nextStep }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
    >
      <ModalNewLicense nextStep={nextStep} onClose={onClose} />
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 20, maxWidth: 500, maxHeight: 480 },
}))(ModalLicense);
