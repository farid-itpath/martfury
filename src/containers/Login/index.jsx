import { Box, Container, Paper, Typography } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/MyButton";
import { theme } from "../../themes";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducers/authSlice";
import login from "../../assets/images/login.svg";
import { Formik } from "formik";
import { loginFormSchema, showError } from "../../utils/helper";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box component="img" src={login} sx={{ height: "60vh", width: "40%" }} />
      <Paper
        sx={{
          boxShadow: 5,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginFormSchema}
          onSubmit={(values) =>
            api.auth
              .login(values)
              .then((response) => {
                dispatch(createUser(response.data.data));
                navigate("/");
              })
              .catch((e) => showError("Something went wrong!"))
          }
        >
          {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
            <>
              <MyTextField
                label="Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email}
              />
              <MyTextField
                label="Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />
              <MyButton type="primary" title="Login" onClick={handleSubmit} />
            </>
          )}
        </Formik>
        <Typography
          sx={{
            color: "black",
            ":hover": { color: theme.palette.primary.main },
            marginBottom: 5,
          }}
          onClick={() => navigate("/forgotPassword")}
        >
          Forgot Password
        </Typography>
        <Typography variant="span">
          New to MartFury?
          <Link to="/signup">
            <Typography
              variant="span"
              sx={{
                textDecoration: "underline",
                color: "black",
                ":hover": { color: theme.palette.primary.main },
              }}
            >
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
