const primeColor = "var(--color-text-primary)";
const SecondColor = "var(--color-text-secondary)";
const accentColor = "var(--color-accent)";
const link = {
  color: "var(--color-link)",
  "&:hover": {
    color: accentColor,
    textDecoration: "underline",
  },
};

const styles = {
  primeColor,
  SecondColor,
  accentColor,
  link,
  authorLink: {
    fontFamily: "Arial",
    fontSize: "20px",
    ...link,
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
    textAlign: "left",
    fontSize: "17.5px",
    fontFamily: "Arial",
    color: SecondColor,
  },
  body2: {
    textAlign: "left",
    fontSize: "14px",
    fontFamily: "Arial",
    color: SecondColor,
  },
};

export default styles;
