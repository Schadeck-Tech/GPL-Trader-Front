import React, { useState } from "react";
import { Menu, MenuItem, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { Flex } from "../";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Button from "../Button";

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
    name: "Início",
    url: "/plans",
  },
  {
    id: 3,
    name: "Planos",
    url: "/plans",
  },
];

const NavMenu = ({ classes }) => {
  const token = localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (e) => {
    if (e === 1) {
      localStorage.setItem("token", "");
      navigate("/plans");
      window.location.reload(true);
    } else if (e === 0) {
      navigate("/license-list");
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Flex className={classes.container}>
      <Flex className={classes.content}>
        <Flex className={classes.img}>
          <img src={logo} alt="" width={230} />
        </Flex>
        <Flex className={classes.navigation}>
          {Links.map((link) => (
            <NavLink to={link.url} className={classes.link} key={link.id}>
              {link.name}
            </NavLink>
          ))}
          {token === "" || token === null ? (
            <NavLink to="/my-account" className={classes.linkAccount}>
              Acessar
            </NavLink>
          ) : (
            <>
              <Button
                className={classes.linkAccount}
                width="30%"
                onClick={handleClick}
              >
                Minha conta
              </Button>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={(e) => handleMenu(e.target.value)} value={0}>
                  Licenças
                </MenuItem>
                <MenuItem onClick={(e) => handleMenu(e.target.value)} value={1}>
                  Sair
                </MenuItem>
              </Menu>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  img: {
    width: "50% !important",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      width: "100% !important",
    },
  },
  content: {
    width: "60% !important",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("lg")]: {
      width: "95% !important",
    },
    [theme.breakpoints.only("md")]: {
      width: "95% !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px 0px",
    marginBottom: "115px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
    },
  },
  navigation: {
    width: "50% !important",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
      width: "100% !important",
      marginTop: "35px",
    },
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
      width: "100% !important",
      marginTop: "35px",
    },
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
    fontSize: "1.1rem",
    fontWeight: 700,
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    "&:hover": {
      transform: "unset",
      backgroundColor: "white",
    },
  },
}))(NavMenu);
