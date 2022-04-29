import React from "react";
import PropTypes from "prop-types";
import { Checkbox, TextField, withStyles } from "@material-ui/core";
import { Formik, Form } from "formik";

import { Button, Card, Flex, Typography } from "../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  nationalityId: "",
  confirmation: false,
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Campo obrigatório *";
    return errors;
  }

  if (!values.password) {
    errors.password = "Campo obrigatório *";
    return errors;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Campo obrigatório *";
    return errors;
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Senhas diferentes";
    return errors;
  }

  if (!values.nationalityId) {
    errors.nationalityId = "Campo obrigatório *";
    return errors;
  }

  if (!values.confirmation) {
    errors.confirmation = "Campo obrigatório *";
    return errors;
  }

  return errors;
};

const Register = ({ classes }) => {
  return (
    <Flex className={classes.container}>
      <Card className={classes.card}>
        <Typography className={classes.cardTitle}>Registrar conta</Typography>
        <Typography>
          Já tem uma conta?{" "}
          <Typography className={classes.createAccount}>Fazer login</Typography>
        </Typography>
        <Formik initialValues={initialValues} validate={validate}>
          {(bag) => (
            <Form>
              <TextField
                variant="outlined"
                fullWidth
                className={classes.marginTop35}
                id="fullname"
                name="fullname"
                label="Nome completo"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.fullname}
                onChange={bag.handleChange}
                error={bag.touched.fullname && Boolean(bag.errors.fullname)}
                helperText={bag.touched.fullname && bag.errors.fullname}
              />
              <TextField
                variant="outlined"
                fullWidth
                className={classes.marginTop20}
                id="email"
                name="email"
                label="Email"
                type="email"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.email}
                onChange={bag.handleChange}
                error={bag.touched.email && Boolean(bag.errors.email)}
                helperText={bag.touched.email && bag.errors.email}
              />
              <TextField
                variant="outlined"
                fullWidth
                className={classes.marginTop20}
                id="password"
                type="password"
                name="password"
                label="Senha"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.password}
                onChange={bag.handleChange}
                error={bag.touched.password && Boolean(bag.errors.password)}
                helperText={bag.touched.password && bag.errors.password}
              />

              <TextField
                variant="outlined"
                fullWidth
                className={classes.marginTop20}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                label="Confirmar senha"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.confirmPassword}
                onChange={bag.handleChange}
                error={
                  bag.touched.confirmPassword &&
                  Boolean(bag.errors.confirmPassword)
                }
                helperText={
                  bag.touched.confirmPassword && bag.errors.confirmPassword
                }
              />
              <Flex className={classes.marginTop12}>
                <Checkbox
                  size="small"
                  checked={bag.values.confirmation}
                  name="confirmation"
                  value={bag.values.confirmation}
                  onChange={bag.handleChange}
                  error={
                    bag.touched.confirmation && Boolean(bag.errors.confirmation)
                  }
                  helperText={
                    bag.touched.confirmation && bag.errors.confirmation
                  }
                />

                <Typography for="scales" fontSize={14}>
                  Eu concordo com os Termos e Condições e com a Política de
                  Privacidade
                </Typography>
              </Flex>
              {bag.errors.confirmation && (
                <Flex>
                  <Typography className={classes.typography2}>
                    Campo obrigatório *
                  </Typography>
                </Flex>
              )}
              <Button className={classes.button}>Registrar</Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Flex>
  );
};

export default withStyles((theme) => ({
  marginTop12: {
    marginTop: 12,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop35: {
    marginTop: 50,
  },
  "@keyframes fadeIn": {
    from: {
      opacity: "0",
    },
    to: { opacity: "1" },
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    animation: `$fadeIn 2s`,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    width: "500px",
    height: "600px",
    background: "white",
    borderRadius: "10px",
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "2.1rem",
    color: "#06061e",
  },
  createAccount: {
    color: "#007af7",
    fontWeight: 600,
  },
  button: {
    width: "100%",
    height: "50px",
    backgroundColor: "#06061e",
    color: "white",
    marginTop: "50px",
  },
}))(Register);
