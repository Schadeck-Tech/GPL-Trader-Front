import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

import { Button, Card, Flex, Typography } from "../../../../_common/components";
import { Edit, EditRounded } from "@material-ui/icons";
import moment from "moment";
import ModalNewLicense from "../ModalNewLicense";
import ModalUpdateLicense from "../ModalUpdateLicense";

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

const data = [
  {
    id: 1,
    created_at: "2022-04-14T17:43:16.393Z",
    active_at: "2022-04-14T17:43:16.393Z",
    license_code: "59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",
    account: 55987,
    type: "DEFINITIVA",
  },
  {
    id: 2,
    created_at: "2022-04-14T17:43:16.393Z",
    active_at: "2022-04-14T17:43:16.393Z",
    license_code: "59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",
    account: 55987,
    type: "DEFINITIVA",
  },
  {
    id: 3,
    created_at: "2022-04-14T17:43:16.393Z",
    active_at: "2022-04-14T17:43:16.393Z",
    license_code: "59f5cadf-ca2f-4bf5-bb91-5e58eb6faf79",
    account: 55987,
    type: "DEFINITIVA",
  },
];

const LicenseList = ({ classes }) => {
  const [openModalNewLicense, setOpenModalNewLicense] = useState(false);
  const [openModalUpdateLicense, setOpenModalUpdateLicense] = useState(false);

  const handleNewLicense = () => {
    setOpenModalNewLicense(true);
  };

  const handleUpdateLicense = () => {
    setOpenModalUpdateLicense(true);
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <ModalNewLicense
        open={openModalNewLicense}
        onClose={() => setOpenModalNewLicense(false)}
      />
      <ModalUpdateLicense
        open={openModalUpdateLicense}
        onClose={() => setOpenModalUpdateLicense(false)}
      />
      <Typography fontSize="3rem" fontWeight={600} color="white">
        Suas licenças
      </Typography>
      <Typography color="white" style={{ margin: "10px 0 20px 0" }}>
        Aqui você pode ativar ou editar uma licença
      </Typography>

      <Flex
        width="60%"
        justifyContent="flex-start"
        style={{ margin: "25px 0" }}
      >
        <Button className={classes.button} onClick={handleNewLicense}>
          Ativar licença
        </Button>
      </Flex>
      <Flex
        width="60%"
        justifyContent="center"
        style={{ background: "gray", borderRadius: "8px", padding: "3px" }}
      >
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
            {data.map((dat) => (
              <TableRow key={dat.id} className={classes.tableRow}>
                <TableCell align="center" className={classes.tableBorderBottom}>
                  <Typography fontSize="0.85rem">
                    {moment(dat.active_at).format("DD/MM/YYYY")}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableBorderBottom}>
                  <Typography fontSize="0.85rem">
                    {moment(dat.created_at).format("DD/MM/YYYY")}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography fontWeight={600}>{dat.license_code}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600}>{dat.account}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600}>{dat.type}</Typography>
                </TableCell>
                <TableCell
                  align="center"
                  className={`${classes.tableCellRadiusRight}`}
                >
                  <Button
                    className={classes.btEdit}
                    onClick={handleUpdateLicense}
                  >
                    <EditRounded fontSize="small" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
    width: "5% !important",
    height: "30px",
    borderRadius: "2px",
    border: "1px solid #dbdada",
  },
}))(LicenseList);
