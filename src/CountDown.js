import Countdown from "react-countdown";
import Typography from "@mui/material/Typography";

function CountDown() {
  return (
    <>
      <Typography
        spacing="3"
        align="center"
        justifyContent="center"
        variant="h2"
        noWrap
        sx={{
          mr: 1,
          display: { xs: "block", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: { xs: 20, md: 80 },
          letterSpacing: ".2rem",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        We are coming soon!
      </Typography>

      <Typography
        align="center"
        justifyContent="center"
        variant="h1"
        noWrap
        sx={{
          mr: 1,
          display: { xs: "block", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: { xs: 30, md: 150 },
          letterSpacing: ".3rem",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <Countdown date={Date.now() + 10000 * 60 * 60 * 60} />
      </Typography>
    </>
  );
}
export default CountDown;
