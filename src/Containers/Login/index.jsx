import { Container, Paper, Typography } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/MyButton";
import { theme } from "../../themes";
import { Link } from "react-router-dom";

export default function Login() {
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
        <MyTextField label="Username" />
        <MyTextField label="Password" />
        <MyButton type="primary" title="Login" />
        <Typography>New to MartFury?</Typography>
        <Link to="/signup">
          <Typography
            sx={{
              textDecoration: "underline",
              color: 'black',
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
