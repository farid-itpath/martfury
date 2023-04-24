import { Container, Paper, Typography } from "@mui/material";
import { MyButton, MyTextField } from "../../Components";
import { theme } from "../../themes";
import { Link } from "react-router-dom";

export default function SignUp() {
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
        <Typography variant="h4">Sign Up</Typography>
        <MyTextField label="Enter Username" />
        <MyTextField label="Enter Email" />
        <MyTextField label="Enter Password" />
        <MyTextField label="Enter Confirm Password" />
        <MyButton type="primary" title="Sign Up" />
        <Typography>Already have an account?</Typography>
        <Link to="/login">
          <Typography
            sx={{
              textDecoration: "underline",
              color: "black",
              ":hover": { color: theme.palette.primary.main },
            }}
          >
            Login
          </Typography>
        </Link>
      </Paper>
    </Container>
  );
}
