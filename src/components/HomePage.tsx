import { Link } from "react-router-dom";
import { Grid, GridItem, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Grid templateAreas={`"top" "main"`}>
      <GridItem area="top">
        <Text fontSize="5xl">Plantations of Edisto Island</Text>
      </GridItem>
      <GridItem area="main">
        <h1>Welcome to the Home Page</h1>
        <Link to="/second-page">Go to the Second Page</Link>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
