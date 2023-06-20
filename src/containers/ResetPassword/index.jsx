import { Container, Paper } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MyButton, MyTextField } from "../../components";
import { Formik } from "formik";
import {
  resetPasswordFormSchema,
  showError,
  showSuccess,
} from "../../utils/helper";
import { api } from "../../api";
import { useTheme } from "@emotion/react";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = useTheme();
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
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={resetPasswordFormSchema}
          onSubmit={(values) =>
            api.auth
              .resetPassword({
                password: values.password,
                token: searchParams.get("token"),
              })
              .then((response) => {
                showSuccess(response.data.message);
                navigate("/login");
              })
              .catch((error) => showError(error.message.message))
          }
        >
          {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
            <>
              <MyTextField
                label="New Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />
              <MyTextField
                label="Confirm New Password"
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <MyButton
                type="primary"
                title="Submit"
                // disabled={!valid}
                onClick={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
