import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducers/authSlice";
import login from "../../assets/images/login.svg";
import { Formik } from "formik";
import { loginFormSchema, showError } from "../../utils/helper";
export default function Login() {
  const theme = useTheme();
  const dispatch = useDispatch();
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
        flexWrap: "wrap",
      }}
    >
      <Box
        component="img"
        src={login}
        sx={{ width: { xs: "60%", sm: "40%" } }}
      />
      <Paper
        sx={{
          boxShadow: 5,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.light,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Login
        </Typography>
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
            color: theme.palette.primary.contrastText,
            ":hover": { color: theme.palette.primary.main },
            marginBottom: 5,
          }}
          onClick={() => navigate("/forgotPassword")}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="span"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          New to MartFury?
          <Link to="/signup">
            <Typography
              variant="span"
              sx={{
                textDecoration: "underline",
                color: theme.palette.primary.contrastText,
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
