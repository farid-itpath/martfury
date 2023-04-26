import { Container } from "@mui/material";

export default function Profile() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Profile Component</h1>
    </Container>
  );
}
