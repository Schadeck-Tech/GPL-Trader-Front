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
    name: "Inicio",
    url: "/plans",
  },
  {
    id: 3,
    name: "Plans",
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
