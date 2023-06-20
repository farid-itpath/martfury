import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import { MyButton, MyTextField } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import signup from "../../assets/images/signup.svg";
import { Formik } from "formik";
import { showError, showSuccess, signupFormSchema } from "../../utils/helper";

export default function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate();
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
      <Box component="img" src={signup} sx={{ height: "60vh", width: "40%" }} />
      <Paper
        sx={{
          boxShadow: 5,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.background.light,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupFormSchema}
          onSubmit={(values) =>
            api.auth
              .register(values)
              .then((response) => {
                if (response.data.status === 200) {
                  showSuccess(response.data.message);
                  navigate("/login");
                } else {
                  showError("something went wrong");
                }
              })
              .catch((error) => showError(error.message.message))
          }
        >
          {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
            <>
              <MyTextField
                label="Enter Firstname"
                onChange={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={touched.firstName && errors.firstName}
              />
              <MyTextField
                label="Enter Lastname"
                onChange={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={touched.lastName && errors.lastName}
              />
              <MyTextField
                label="Enter Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email}
              />
              <MyTextField
                label="Enter Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />
              <MyTextField
                label="Enter Confirm Password"
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <MyButton type="primary" title="Sign Up" onClick={handleSubmit} />
            </>
          )}
        </Formik>
        <Typography sx={{ color: theme.palette.primary.contrastText }}>
          Already have an account?
        </Typography>
        <Link to="/login">
          <Typography
            sx={{
              textDecoration: "underline",
              ":hover": { color: theme.palette.primary.main },
              color: theme.palette.primary.contrastText,
            }}
          >
            Login
          </Typography>
        </Link>
      </Paper>
    </Container>
  );
}
