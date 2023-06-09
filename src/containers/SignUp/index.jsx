import { Container, Paper, Typography } from "@mui/material";
import { MyButton, MyTextField } from "../../components";
import { theme } from "../../themes";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api";
import { useSnackbar } from "notistack";

export default function SignUp() {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSignUp = () => {
    api.auth.register(formData).then((response) => {
      if (response.data.status === 200) {
        enqueueSnackbar(response.data.message, {
          variant: "success",
        });
        navigate("/login");
      } else {
        enqueueSnackbar(response.message.message, { variant: "error" });
      }
    });
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
        <Typography variant="h4">Sign Up</Typography>
        <MyTextField
          label="Enter Firstname"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <MyTextField
          label="Enter Lastname"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <MyTextField
          label="Enter Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <MyTextField
          label="Enter Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <MyTextField label="Enter Confirm Password" />
        <MyButton type="primary" title="Sign Up" onClick={handleSignUp} />
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
