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
import { useSnackbar } from "../../../../_common/hooks";
import { Flex, Card, Button, Loading } from "../../../../_common/components";
import { Formik, Form } from "formik";
import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string,
  license_code: PropTypes.string,
};

const initialValues = {
  account: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.account) {
    errors.account = "Campo obrigatório";
    return errors;
  }

  return errors;
};

const ModalNewLicense = ({ classes, onClose, id, license_code }) => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar] = useSnackbar();

  const handleNewLicense = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post("/license/active", {
        id: id,
        account: values.account,
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
        onSubmit={handleNewLicense}
      >
        {(bag) => (
          <Form>
            <DialogTitle disableTypography className={classes.title}>
              Ative sua licença
            </DialogTitle>
            <DialogContent>
              <Flex width="100%" flexDirection="column">
                <TextField
                  variant="outlined"
                  fullWidth
                  className={classes.marginTop20}
                  id="license_code"
                  name="license_code"
                  label="Código da licença"
                  type="license_code"
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
                  type="number"
                  name="account"
                  label="Id da conta metatrader"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  value={bag.values.account}
                  onChange={bag.handleChange}
                  error={bag.touched.account && Boolean(bag.errors.account)}
                  helperText={bag.touched.account && bag.errors.account}
                />
              </Flex>
            </DialogContent>
            <DialogActions>
              <Flex width="100%" center>
                <Button
                  className={classes.button}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Loading isLoading size={24} color="white" />
                  ) : (
                    "Ativar"
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
    height: 350,
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
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
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "#1c1c1cf2",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
    },
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
