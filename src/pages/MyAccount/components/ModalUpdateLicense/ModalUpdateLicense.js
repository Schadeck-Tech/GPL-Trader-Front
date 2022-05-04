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

import { Flex, Card, Button, Loading } from "../../../../_common/components";
import { useSnackbar } from "../../../../_common/hooks";
import { Form, Formik } from "formik";
import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  id: PropTypes.string,
  license_code: PropTypes.string,
  account: PropTypes.string,
};

const initialValues = {
  new_account: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.new_account) {
    errors.new_account = "Campo obrigatório";
    return errors;
  }

  return errors;
};

const ModalUpdateLicense = ({
  classes,
  onClose,
  id,
  license_code,
  account,
}) => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar] = useSnackbar();

  const handleUpdateLicense = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post("/license/update", {
        id: id,
        account: Number(values.new_account),
      });
      openSnackbar(data.msg, "success");
      onClose();
      window.location.reload(true);
    } catch (error) {
      onClose();
      openSnackbar("Erro ao ativar a licença", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={classes.card}>
      <Button
        variant="icon"
        onClick={() => onClose()}
        className={classes.closeIcon}
      >
        <CloseIcon />
      </Button>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleUpdateLicense}
      >
        {(bag) => (
          <Form>
            <DialogTitle disableTypography className={classes.title}>
              Alterar licença
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
                  value={license_code}
                  disabled
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.marginTop20}
                  id="account"
                  type="account"
                  name="account"
                  label="Conta atual"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  value={account}
                  disabled
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.marginTop20}
                  id="new_account"
                  type="new_account"
                  name="new_account"
                  label="Conta nova"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  value={bag.values.new_account}
                  onChange={bag.handleChange}
                  error={
                    bag.touched.new_account && Boolean(bag.errors.new_account)
                  }
                  helperText={bag.touched.new_account && bag.errors.new_account}
                />
              </Flex>
            </DialogContent>
            <DialogActions>
              <Flex width="100%" center>
                <Button
                  type="submit"
                  disabled={loading}
                  className={classes.button}
                >
                  {loading ? (
                    <Loading isLoading size={24} color="white" />
                  ) : (
                    "Alterar"
                  )}
                </Button>
              </Flex>
            </DialogActions>
          </Form>
        )}
      </Formik>
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
    height: 420,
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
}))(ModalUpdateLicense);
