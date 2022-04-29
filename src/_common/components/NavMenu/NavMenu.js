import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { Flex } from "../";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Links = [
  // {
  //   id: 1,
  //   name: "Inicio",
  //   url: "/plans",
  // },
  {
    id: 2,
    name: "Planos",
    url: "/plans",
  },
  {
    id: 3,
    name: "Contato",
    url: "/plans",
  },
];

const NavMenu = ({ classes }) => {
  return (
    <Flex className={classes.container}>
      <Flex justifyContent="space-between" alignItems="center" width="60%">
        <Flex width="50%">
          <img src={logo} alt="" width={230} />
        </Flex>
        <Flex width="50%" justifyContent="flex-end" alignItems="center">
          {Links.map((link) => (
            <NavLink to={link.url} className={classes.link} key={link.id}>
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/my-account" className={classes.linkAccount}>
            Minha conta
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px 0px",
    marginBottom: "115px",
  },
  link: {
    marginRight: "50px",
    cursor: "pointer",
    color: "white",
    fontWeight: 600,
    fontSize: "1.2rem",
    textDecoration: "none",
  },
  linkAccount: {
    background: "#dadada",
    color: "#1c1c1c",
    fontWeight: 700,
    fontSize: "1rem",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
  },
}))(NavMenu);
