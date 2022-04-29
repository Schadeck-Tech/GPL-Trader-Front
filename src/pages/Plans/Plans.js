import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { Button, Card, Flex, Typography } from "../../_common/components";
import forexImg from "../../assets/forex.png";
import { Check } from "@material-ui/icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const ITEMS = [
  {
    id: 1,
    title: "LICENÇA METATRADER 4",
    price: "R$ 497,00",
    description: [
      "LICENÇA DEFINITIVA",
      "Contas Demo ilimitadas",
      "Sem mensalidade",
      "Direito a atualizações",
    ],
    url: "https://clkdmg.site/pay/gpl-trader",
  },
  {
    id: 2,
    title: "LICENÇA METATRADER 4",
    price: "R$ 497,00",
    description: [
      "LICENÇA DEFINITIVA",
      "Contas Demo ilimitadas",
      "Sem mensalidade",
      "Direito a atualizações",
    ],
    url: "https://clkdmg.site/pay/gpl-trader",
  },
  {
    id: 3,
    title: "LICENÇA METATRADER 4",
    price: "R$ 497,00",
    description: [
      "LICENÇA DEFINITIVA",
      "Contas Demo ilimitadas",
      "Sem mensalidade",
      "Direito a atualizações",
    ],
    url: "https://clkdmg.site/pay/gpl-trader",
  },
];

const Plans = ({ classes }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Typography
        fontSize="3rem"
        fontWeight={600}
        color="white"
        style={{ marginBottom: "25px" }}
      >
        Planos
      </Typography>
      <Flex width="60%" className={classes.container}>
        {ITEMS.map((item) => (
          <Card className={classes.card}>
            <img src={forexImg} alt="Forex box plan" width={130} />
            <Typography className={classes.cardTitle}>{item.title}</Typography>
            <Typography className={classes.price}>{item.price}</Typography>
            <Flex flexDirection="column">
              {item.description.map((name) => (
                <Typography className={classes.description}>
                  <Check className={classes.icon} /> {name}
                </Typography>
              ))}
            </Flex>
            <Button
              className={classes.button}
              onClick={() => window.open(item.url, "_blank")}
            >
              COMPRAR
            </Button>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  "@keyframes animateToLeft": {
    from: {
      left: "-300px",
      opacity: "0",
    },
    to: { left: 0, opacity: "1" },
  },
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
    animation: `$animateToLeft 1s`,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px 30px",
    alignItems: "center",
    width: "30%",
    height: "600px",
    background: "white",
    // borderTopRightRadius: "35px",
    // borderBottomLeftRadius: "35px",
    borderRadius: "20px",
  },
  cardTitle: {
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "#1c1c1c",
  },
  icon: {
    color: "#00d72e",
    marginRight: "5px",
  },
  price: {
    fontWeight: 800,
    fontSize: "2rem",
    textAlign: "left",
    color: "#1c1c1c",
  },
  description: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontWeight: 500,
    lineHeight: "37px",
  },
  button: {
    width: "100%",
    height: "50px",
    backgroundColor: "#1c1c1c",
    color: "white",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#1c1c1cf2",
    },
  },
}))(Plans);
