import { Container, Paper, useTheme } from "@mui/material";
import React, { useState } from "react";
import { MyButton, MyTextField } from "../../components";
import { api } from "../../api";
import { showError, showSuccess } from "../../utils/helper";

export default function ForgotPassword() {
  const theme = useTheme();
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.background.main,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.background.light,
        }}
      >
        <MyTextField
          label="Email"
          onChange={(e) => {
            setValid(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(
                e.target.value
              ) && e.target.value.length !== 0
            );
            setEmail(e.target.value);
          }}
        />
        <MyButton
          type="primary"
          title="Send Link"
          disabled={!valid}
          onClick={() =>
            api.auth
              .forgotPassword({
                email: email,
                siteurl: "http://localhost:3000/resetPassword",
              })
              .then((response) => showSuccess(response.data.message))
              .catch((error) => showError(error.message.message))
          }
        />
      </Paper>
    </Container>
  );
}
