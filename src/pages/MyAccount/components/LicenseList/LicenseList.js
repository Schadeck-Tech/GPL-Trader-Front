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
import {
  Card,
  Flex,
  Loading,
  Typography,
} from "../../../../_common/components";
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
  const [loading, setLoading] = useState(false);
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
    if (token === "" || token === null) {
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
      setLoading(true);
      const result = await api.post("/license", {
        client_id: id,
      });
      setLicenseData(result.data);
    } catch (error) {
      openSnackbar("Erro ao carregar licenças", "error");
    } finally {
      setLoading(false);
    }
    // const data = [
    //   {
    //     id: "1234",
    //     created_at: "2022-05-03 17:39:01.241",
    //     active_at: "2022-05-03 17:39:01.241",
    //     license_code: "66dbf354-a0e2-4834-b5f2-24bbf5c43ff0",
    //     account: null,
    //     type: "DEFINITIVA",
    //   },
    //   {
    //     id: "123",
    //     created_at: "2022-05-03 17:39:01.241",
    //     active_at: "2022-05-03 17:39:01.241",
    //     license_code: "66dbf354-a0e2-4834-b5f2-24bbf5c43ff0",
    //     account: 123123123,
    //     type: "DEFINITIVA",
    //   },
    // ];
    // setLicenseData(data);
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
      {licenseData.length === 0 ? (
        <Flex className={classes.cardMobile}>
          <Typography className={classes.noLicenseMsgMobile}>
            Você ainda não tem licenças ativas
          </Typography>
        </Flex>
      ) : (
        licenseData.map((dat) => (
          <Flex className={classes.cardMobile}>
            <Flex
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Flex flexDirection="column" alignItems="flex-start">
                <Typography fontWeight={700}>Data de compra</Typography>
                <Typography>
                  {moment(dat.created_at).format("DD/MM/YYYY")}
                </Typography>
              </Flex>
              <Flex flexDirection="column" alignItems="flex-end">
                <Typography fontWeight={700}>Data de ativação</Typography>
                <Typography>
                  {moment(dat.active_at).format("DD/MM/YYYY")}
                </Typography>
              </Flex>
            </Flex>
            <Flex
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Flex flexDirection="column" alignItems="flex-start">
                <Typography fontWeight={700}>Conta</Typography>
                <Typography>{dat.account}</Typography>
              </Flex>
              <Flex flexDirection="column" alignItems="flex-end">
                <Typography fontWeight={700}>Tipo</Typography>
                <Typography>{dat.type}</Typography>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Typography fontWeight={700}>Licença</Typography>
              <Typography>{dat.license_code}</Typography>
            </Flex>
            {dat.account === null ? (
              <Typography
                className={classes.btEdit}
                onClick={() => handleNewLicense(dat.id, dat.license_code)}
                style={{ backgroundColor: "green" }}
              >
                Ativar
              </Typography>
            ) : (
              <Typography
                className={classes.btEdit}
                onClick={() =>
                  handleUpdateLicense(dat.id, dat.license_code, dat.account)
                }
                style={{ backgroundColor: "#ff5722" }}
              >
                Editar
              </Typography>
            )}
          </Flex>
        ))
      )}

      {loading ? (
        <Loading isLoading size={24} color="white" />
      ) : (
        <Flex className={classes.tableContainer}>
          {licenseData.length === 0 ? (
            <Typography className={classes.noLicenseMsg}>
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
                        {dat.active_at === null
                          ? "Não ativo"
                          : moment(dat.active_at).format("DD/MM/YYYY")}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography fontWeight={600}>
                        {dat.license_code}
                      </Typography>
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
      )}
    </Flex>
  );
};

export default withStyles((theme) => ({
  cardMobile: {
    display: "none",
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "90vw",
      justifyContent: "space-between",
      maxWidth: "350px",
      background: "white",
      height: "300px",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "25px",
    },
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column",
      width: "90vw",
      justifyContent: "space-between",
      maxWidth: "350px",
      background: "white",
      height: "300px",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "25px",
    },
  },
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
    [theme.breakpoints.only("sm")]: {
      width: "100% !important",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100% !important",
    },
  },
  noLicenseMsg: {
    fontSize: "1.5rem",
    color: "white",
    padding: "15px 0",
  },
  noLicenseMsgMobile: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1rem",
    color: "black",
    padding: "15px 0",
  },
  tableContainer: {
    width: "60%",
    justifyContent: "center",
    background: "gray",
    borderRadius: "8px",
    padding: "3px",
    marginTop: "25px",
    [theme.breakpoints.only("md")]: {
      width: "95%",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
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
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: "5px 20px",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "center",
      padding: "5px 20px",
      fontSize: "1.2rem",
    },
  },
}))(LicenseList);
