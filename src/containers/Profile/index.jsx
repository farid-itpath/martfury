import { Box, Button, Container, Typography } from "@mui/material";
import myPhoto from "./../../assets/images/myphoto.jpeg";

import { BackToHome } from "../../components";
import { useSelector } from "react-redux";
export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        minHeight: "100vh",
        flexWrap: "wrap",
      }}
    >
      <BackToHome />
      <Box component="img" src={myPhoto} sx={{ height: 300 }} />
      <Box width={"50%"}>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "30vh",
          }}
        >
          <Box>
            <Typography variant="body1">Name</Typography>
            <Typography variant="body">email</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {user.user.firstName + " " + user.user.lastName}
            </Typography>
            <Typography variant="body">{user.user.email}</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
}
