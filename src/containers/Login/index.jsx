import { Container, Paper, Typography } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/MyButton";
import { theme } from "../../themes";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
export default function Login() {
  const [formData, setFormData] = useState();
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    api.auth
      .login(formData)
      .then((response) => {
        localStorage.setItem("loggedInUser", response.data.user.id);
        localStorage.setItem("token", response.data.token);
        setLoggedInUser(response.data.user.id);
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
