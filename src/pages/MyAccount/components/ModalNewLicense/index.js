import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalNewLicense from "./ModalNewLicense";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  nextStep: PropTypes.func,
  id: PropTypes.string,
  license_code: PropTypes.string,
};

const ModalLicense = ({
  open,
  onClose,
  classes,
  nextStep,
  id,
  license_code,
}) => {
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
      <ModalNewLicense
        nextStep={nextStep}
        onClose={onClose}
        id={id}
        license_code={license_code}
      />
    </Dialog>
  );
};

export default withStyles((theme) => ({
  paper: {
    borderRadius: 20,
    maxWidth: 500,
    maxHeight: 480,
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
}))(ModalLicense);
