import Typography from "@mui/material/Typography";

function About() {
  return (
    <>
      <Typography
        spacing="3"
        align="center"
        justifyContent="center"
        variant="h1"
        marginTop={15}
        noWrap
        sx={{
          mr: 1,
          display: { xs: "block", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: { xs: 20, md: 40 },
          letterSpacing: ".2rem",
          color: "#9C6615",
          textDecoration: "none",
        }}
      >
        About Stunners Galleria
      </Typography>

      <h4 className="text-light px-5 text-center">
        We is a Fashion and Beauty enterprise that provides quality and
        affordable products to it's clients right from the comfort of their
        homes .
      </h4>
    </>
  );
}

export default About;
