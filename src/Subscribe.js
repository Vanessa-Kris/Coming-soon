import React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import Container from "@mui/material/Container";

function Subscribe() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,

          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              name="phone_number"
              rules={{ validate: matchIsValidTel }}
              render={({ field, fieldState }) => (
                <MuiTelInput
                  {...field}
                  fullWidth
                  id="phone_number"
                  label="Phone Number"
                  autoComplete="primary-phone-number"
                  forceCallingCode
                  focusOnSelectCountry
                  placeholder="Phone Number"
                  // onlyCountries={availableCountries}
                  defaultCountry={"CM"}
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
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
  );
}

export default Subscribe;
