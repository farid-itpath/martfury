import { Container, Paper, Typography } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/MyButton";
import { theme } from "../../themes";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducers/authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const handleLogin = () => {
    api.auth
      .login(formData)
      .then((response) => {
        dispatch(createUser(response.data));
        navigate("/");
      })
      .catch((e) => console.log("Something went wrong!", e));
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ boxShadow: 5, padding: 5 }}>
        <Typography variant="h4">Login</Typography>
        <MyTextField
          label="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <MyTextField
          label="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <MyButton type="primary" title="Login" onClick={handleLogin} />
        <Typography>New to MartFury?</Typography>
        <Link to="/signup">
          <Typography
            sx={{
              textDecoration: "underline",
              color: "black",
              ":hover": { color: theme.palette.primary.main },
            }}
          >
            Sign Up
          </Typography>
        </Link>
      </Paper>
    </Container>
  );
}
