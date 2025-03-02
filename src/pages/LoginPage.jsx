import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/LoginPageBackGround.jpg"; // Import your local image

const providers = [{ id: "credentials", name: "Email and password" }];

// Branding object for customizing the login page
const BRANDING = {
  logo: (
    <img
      src="https://mui.com/static/logo.svg" // You can replace this with your logo URL
      alt="MUI logo"
      style={{ height: 24 }}
    />
  ),
  title: "My Custom App", // Customize the title of your app
};

const signIn = async (provider, formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = formData?.get("email");
      const password = formData?.get("password");

      // Example credentials (replace with real validation logic)
      const validEmail = "user@example.com";
      const validPassword = "password123";

      // Compare the entered credentials
      if (email === validEmail && password === validPassword) {
        resolve({
          type: "CredentialsSignin",
          error: "",
        });
        alert("Login successful!");
        // Redirect on successful login
        window.location.href = "/drawer"; // or use navigate("/dashboard") if using react-router
      } else {
        resolve({
          type: "CredentialsSignin",
          error: "Invalid credentials.",
        });
        alert("Invalid credentials.");
      }
    }, 300);
  });
};

export default function LoginPage() {
  const theme = useTheme();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use imported image
    backgroundSize: "cover", // Ensure the image covers the entire page
    backgroundPosition: "center", // Position the image at the center
    height: "100vh", // Ensure the container takes the full height of the viewport
    display: "flex", // Make the content inside the container centered
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  };

  const transparentFormStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
    borderRadius: "8px", // Optional: rounding the corners for aesthetics
    padding: "20px", // Add some padding to the form for spacing
    width: "100%", // Ensure the form takes the full width (can be customized)
    maxWidth: "400px", // Optional: max width to make the form more compact
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: shadow for a more refined look
  };

  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <div style={backgroundStyle}>
        <div style={transparentFormStyle}>
          <SignInPage
            signIn={signIn}
            providers={providers}
            slotProps={{
              emailField: {
                autoFocus: false,
                autoComplete: "new-email", // 🚀 Trick browser by using a non-standard name
                inputProps: {
                  name: "disable-autofill-email", // 🚀 Random name to prevent autofill
                  "aria-hidden": "true",
                },
              },
              passwordField: {
                autoComplete: "new-password", // 🚀 Trick browser to prevent autofill
                inputProps: {
                  name: "disable-autofill-password", // 🚀 Random name to prevent autofill
                  "aria-hidden": "true",
                },
              },
              form: {
                noValidate: true, // 🚀 Prevent browser from enforcing built-in validation
                autoComplete: "off", // 🚀 Disable autofill for the entire form
              },
            }}
          />
        </div>
      </div>
    </AppProvider>
  );
}
