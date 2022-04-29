import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { Loading } from "../../";

const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        width: 223,
        textTransform: "none",
        background: "white",
        boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: 8,
        color: "black",
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "1rem",
        transition: ".5s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:disabled": {
          color: "white",
          background: "grey",
          cursor: "not-allowed",
        },
      },
      root: {},
    },
  },
});

PropTypes.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const Contained = ({
  children,
  background,
  color,
  width,
  height,
  borderRadius,
  fontSize,
  style,
  loading,
  disabled,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        style={{
          background,
          color,
          width,
          height,
          borderRadius,
          fontSize,
          ...style,
        }}
        {...props}
        disabled={disabled || loading}
      >
        {loading ? <Loading isLoading size={24} color="white" /> : children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Contained;
