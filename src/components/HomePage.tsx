import { Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

function HomePage() {
  return (
    <Grid templateAreas={`"top" "main"`}>
      <GridItem area="top">Top of Page</GridItem>
      <GridItem area="main">
        <h1>Welcome to the Home Page</h1>
        <Link to="/second-page">Go to the Second Page</Link>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
