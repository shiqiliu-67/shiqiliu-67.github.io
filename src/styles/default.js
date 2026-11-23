const primeColor = "var(--color-text-primary)";
const accentColor = "var(--color-accent)";
const heading = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: primeColor,
};
const link = {
  color: "var(--color-link)",
  textDecorationColor: "var(--color-link-underline)",
  textUnderlineOffset: "0.16em",
  "&:hover": {
    color: accentColor,
    textDecorationColor: "currentColor",
  },
};

const styles = {
  primeColor,
  accentColor,
  link,
  h1: {
    ...heading,
    fontSize: { xs: "2.65rem", md: "3.35rem" },
  },
  h2: {
    ...heading,
    fontSize: { xs: "1.65rem", md: "1.9rem" },
    pb: 1.25,
    mb: 1.5,
    borderBottom: "1px solid var(--color-border)",
  },
  h3: {
    ...heading,
    fontSize: "1.25rem",
    lineHeight: 1.3,
  },
  body1: {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    lineHeight: 1.65,
    letterSpacing: "normal",
    color: primeColor,
  },
  body2: {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    lineHeight: 1.6,
    letterSpacing: "normal",
    color: "var(--color-text-secondary)",
  },
};

export default styles;
