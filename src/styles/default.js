const primeColor = "#363636";
const SecondColor = "#808080";

const styles = {
  primeColor,
  SecondColor,
  authorLink: {
    fontFamily: "Arial",
    fontSize: "20px",
    color: "#00B803",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  h1: {
    fontSize: "36px",
    fontFamily: "Arial",
    textAlign: "left",
    // fontWeight: "bold",
    color: primeColor,
  },
  h2: {
    fontSize: "30px",
    fontFamily: "Arial",
    textAlign: "left",
    // fontWeight: "bold",
    color: primeColor,
  },
  h3: {
    fontSize: "20px",
    fontFamily: "Arial",
    textAlign: "left",
    fontWeight: "bold",
    color: primeColor,
  },
  body1: {
    fontSize: "17.5px",
    fontFamily: "Arial",
    color: SecondColor,
  },
  body2: {
    fontSize: "14px",
    fontFamily: "Arial",
    color: SecondColor,
  },
};

export default styles;
