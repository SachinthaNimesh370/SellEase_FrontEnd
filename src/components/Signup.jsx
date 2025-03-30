import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Signup.module.css";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "Admin",
  },
  {
    value: "EUR",
    label: "Cashier",
  },
];

export default function Signup() {
  return (
    <div className={styles.signupcontainer}>
      <Box className={styles.box}>
        <div>
          <div>
            <TextField
              id="outlined-email-input"
              label="Name"
              type="Email"
              autoComplete="current-password"
            />
          </div>

          <div>
            <TextField
              id="outlined-email-input"
              label="Email Address"
              type="Email"
              autoComplete="current-password"
            />
          </div>

          <div>
            <TextField
              id="outlined-select-role"
              select
              label="Role"
              defaultValue=""
              helperText="Please select your Role"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <TextField
              id="outlined-email-input"
              label="Password"
              type="Email"
              autoComplete="current-password"
            />
          </div>

          <div>
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </div>
      </Box>
      <div className={styles.buttoncontainer}>
        <Button className={styles.signupbutton} variant="contained">
          Sign up
        </Button>
      </div>
    </div>
  );
}
