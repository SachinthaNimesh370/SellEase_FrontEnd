import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Signup.module.css";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";

const currencies = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "cashier",
    label: "Cashier",
  },
];

export default function Signup() {
  return (
    <div className={styles.signupcontainer}>
      <Box className={styles.box1}>
        <div>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
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
      </Box>

      <Box className={styles.box2}>
        <div>
          <div>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              id="outlined-email-input"
              label="Name"
              type="Email"
              autoComplete="current-password"
            />
          </div>

          <div>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              id="outlined-email-input"
              label="Email Address"
              type="Email"
              autoComplete="current-password"
            />
          </div>

          <div>
            <Password />
          </div>
          <div>
            <ConfirmPassword />
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
