import { Box, Button, Container, Typography } from "@mui/material";
import myPhoto from "./../../assets/images/myphoto.jpeg";
export default function Profile() {
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
            <Typography variant="body1">Contact No.</Typography>
            <Typography variant="body">email</Typography>
          </Box>
          <Box>
            <Typography variant="body1">Farid</Typography>
            <Typography variant="body1">1234567789</Typography>
            <Typography variant="body">farid@gmail.com</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
}
