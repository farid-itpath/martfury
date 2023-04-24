import { Container, useTheme, Box, Grid } from "@mui/material";
import { Products } from "../../utils/data";
import MyCard from "../../Components/MyCard";

export default function Home() {
  const appTheme = useTheme();
  return (
    <>
      {/* Box for pushing out the content of Home from fixed navbar underneath */}
      <Box sx={appTheme.mixins.toolbar} />
      <Grid container spacing={2} my={2}>
        {Products.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <MyCard name={item.name} image={item.image} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
