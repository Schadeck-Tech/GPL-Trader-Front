import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, withStyles } from "@material-ui/core";
import { Formik, Form } from "formik";

import {
  Button,
  Card,
  Flex,
  Loading,
  Typography,
} from "../../_common/components";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

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

  return errors;
};

const Login = ({ classes }) => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post("/auth", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.id);
      navigate("/license-list");
      window.location.reload(true);
    } catch (error) {
      setLoginError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex className={classes.container}>
      <Card className={classes.card}>
        <Typography className={classes.cardTitle}>Login</Typography>
        <Typography>
          Acesse nossa plataforma para verificar suas licenças
        </Typography>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {(bag) => (
            <Form>
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
              <Flex
                center
                className={loginError ? classes.boxError : classes.displayNone}
              >
                <Typography
                  color="red"
                  fontWeight={600}
                  style={{ padding: "5px 0px" }}
                >
                  Erro ao logar - verifique os dados
                </Typography>
              </Flex>
              <Button
                className={classes.button}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Loading isLoading size={24} color="white" />
                ) : (
                  "Entrar"
                )}
              </Button>
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
    alignItems: "center",
    padding: "30px",
    width: "500px",
    height: "100%",
    background: "white",
    borderRadius: "10px",
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "2.1rem",
    color: "#1c1c1c",
  },
  createAccount: {
    color: "#007af7",
    fontWeight: 600,
  },
  displayNone: {
    display: "none",
  },
  boxError: {
    border: "1px solid red",
    margin: "10px 0",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    height: "50px",
    backgroundColor: "#1c1c1c",
    fontSize: "1.2rem",
    color: "white",
    marginTop: "20px",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#1c1c1cf2",
    },
  },
}))(Login);
