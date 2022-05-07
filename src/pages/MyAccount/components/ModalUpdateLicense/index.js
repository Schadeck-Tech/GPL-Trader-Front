import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalUpdateLicense from "./ModalUpdateLicense";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  nextStep: PropTypes.func,
  id: PropTypes.string,
  license_code: PropTypes.string,
  account: PropTypes.string,
};

const ModalLicense = ({
  open,
  onClose,
  classes,
  nextStep,
  id,
  license_code,
  account,
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
      <ModalUpdateLicense
        nextStep={nextStep}
        onClose={onClose}
        id={id}
        license_code={license_code}
        account={account}
      />
    </Dialog>
  );
};

export default withStyles((theme) => ({
  paper: {
    borderRadius: 20,
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      height: "380px",
    },
  },
}))(ModalLicense);
