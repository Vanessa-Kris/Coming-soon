import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import Container from "@mui/material/Container";

function Subscribe() {
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography
        spacing="3"
        align="center"
        justifyContent="center"
        variant="h2"
        className="mt-5"
        noWrap
        sx={{
          mr: 1,
          display: { xs: "block", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: { xs: 14, md: 21 },
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Subscribe to our Newsletter
      </Typography>
      <p
        className="text-light text-center mt-3"
        style={{ fontFamily: "monospace" }}
      >
        Be the first to get updates on new arrivals and discount sales
      </p>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Name
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{ mb: 1, input: { color: "white" } }}
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
            </Grid>

            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Email
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{ mb: 1, input: { color: "white" } }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  Color="#fff"
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid name="phone_number" sx={{ mt: 1 }} />
              <MuiTelInput
                sx={{ input: { color: "white" } }}
                value={value}
                onChange={handleChange}
                id="phone_number"
                autoComplete="primary-phone-number"
                forceCallingCode
                focusOnSelectCountry
                placeholder="Phone Number"
                // onlyCountries={availableCountries}
                defaultCountry={"CM"}
                Color="#fff"
                fullWidth
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Subscribe;
