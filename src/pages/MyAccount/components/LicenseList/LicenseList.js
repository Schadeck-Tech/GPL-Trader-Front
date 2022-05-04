import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

import { useSnackbar } from "../../../../_common/hooks";
import { Button, Flex, Typography } from "../../../../_common/components";
import { EditRounded } from "@material-ui/icons";
import moment from "moment";
import ModalNewLicense from "../ModalNewLicense";
import ModalUpdateLicense from "../ModalUpdateLicense";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const header = [
  {
    id: 1,
    name: "Data de compra",
  },
  {
    id: 2,
    name: "Data ativação",
  },
  {
    id: 3,
    name: "Licença",
  },
  {
    id: 4,
    name: "Conta",
  },
  {
    id: 5,
    name: "Tipo",
  },
  {
    id: 6,
    name: "Ação",
  },
];

const LicenseList = ({ classes }) => {
  const [openModalNewLicense, setOpenModalNewLicense] = useState(false);
  const [openModalUpdateLicense, setOpenModalUpdateLicense] = useState(false);
  const [openSnackbar] = useSnackbar();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState([]);
  const [licenseId, setLicenseId] = useState("");
  const [licenseCode, setLicenseCode] = useState("");
  const [account, setAccount] = useState(0);

  useEffect(() => {
    if (token === "") {
      navigate("/my-account");
    } else {
      navigate("/license-list");
      getLicenseData();
    }
  }, [token, navigate]);

  const handleNewLicense = (id, license_code) => {
    setOpenModalNewLicense(true);
    setLicenseId(id);
    setLicenseCode(license_code);
  };

  const handleUpdateLicense = (id, license_code, account) => {
    setOpenModalUpdateLicense(true);
    setLicenseId(id);
    setLicenseCode(license_code);
    setAccount(account);
  };

  const getLicenseData = async () => {
    try {
      const result = await api.get("/license", {
        client_id: id,
      });
      setLicenseData(result.data);
    } catch (error) {
      openSnackbar("Erro ao carregar licenças", "error");
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <ModalNewLicense
        open={openModalNewLicense}
        onClose={() => setOpenModalNewLicense(false)}
        id={licenseId}
        license_code={licenseCode}
      />
      <ModalUpdateLicense
        open={openModalUpdateLicense}
        onClose={() => setOpenModalUpdateLicense(false)}
        id={licenseId}
        license_code={licenseCode}
        account={account}
      />
      <Typography fontSize="3rem" fontWeight={600} color="white">
        Suas licenças
      </Typography>
      <Typography color="white" style={{ margin: "10px 0 20px 0" }}>
        Aqui você pode ativar ou editar uma licença
      </Typography>

      {/* <Flex
        width="60%"
        justifyContent="flex-start"
        style={{ margin: "25px 0" }}
      >
        <Button className={classes.button} onClick={handleNewLicense}>
          Ativar licença
        </Button>
      </Flex> */}
      <Flex
        width="60%"
        justifyContent="center"
        style={{
          background: "gray",
          borderRadius: "8px",
          padding: "3px",
          marginTop: "25px",
        }}
      >
        {licenseData.length === 0 ? (
          <Typography
            fontSize="1.5rem"
            color="white"
            style={{ padding: "15px 0" }}
          >
            Você ainda não tem licenças ativas
          </Typography>
        ) : (
          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ background: "#151a301a" }}>
                {header.map((tableHead) => (
                  <TableCell
                    align="center"
                    key={tableHead.name}
                    className={classes.tableHeader}
                  >
                    <Typography fontSize="0.95rem" fontWeight={700}>
                      {tableHead.name}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {licenseData.map((dat) => (
                <TableRow key={dat.id} className={classes.tableRow}>
                  <TableCell
                    align="center"
                    className={classes.tableBorderBottom}
                  >
                    <Typography fontSize="0.85rem">
                      {moment(dat.created_at).format("DD/MM/YYYY")}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableBorderBottom}
                  >
                    <Typography fontSize="0.85rem">
                      {moment(dat.active_at).format("DD/MM/YYYY")}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography fontWeight={600}>{dat.license_code}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight={600}>{dat.account}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontSize="0.9rem">{dat.type}</Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    className={`${classes.tableCellRadiusRight}`}
                  >
                    {dat.account === null ? (
                      <Typography
                        className={classes.btEdit}
                        onClick={() =>
                          handleNewLicense(dat.id, dat.license_code)
                        }
                        style={{ backgroundColor: "green" }}
                      >
                        Ativar
                      </Typography>
                    ) : (
                      <Typography
                        className={classes.btEdit}
                        onClick={() =>
                          handleUpdateLicense(
                            dat.id,
                            dat.license_code,
                            dat.account
                          )
                        }
                        style={{ backgroundColor: "#ff5722" }}
                      >
                        Editar
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  flex: {
    justifyContent: "space-between",
    width: "60%",
    height: "65px",
    borderRadius: "5px",
    padding: "20px 45px",
    marginBottom: "5px",
    backgroundColor: "white",
    color: "#1c1c1c",
    fontWeight: 500,
  },
  table: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "3px solid gray",
  },
  button: {
    width: "225px",
    height: "45px",
    // backgroundColor: "#d1eef3",

    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#1c1c1c",
    marginTop: "20px",
    borderRadius: "5px",
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "white",
    },
  },
  btEdit: {
    fontSize: "0.90rem",
    borderRadius: "10px",
    padding: "2px 20px",
    color: "white",
    cursor: "pointer",
  },
}))(LicenseList);
