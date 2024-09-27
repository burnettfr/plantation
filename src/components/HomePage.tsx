import { Link } from "react-router-dom";
import { Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import PlCard from "./Card";

function HomePage() {
  return (
    <Grid templateAreas={`"top" "main"`}>
      <GridItem area="top">
        <HStack justifyContent="center">
          <Text fontSize="5xl">Plantations of Edisto Island</Text>
        </HStack>
      </GridItem>
      <GridItem area="main">
        <h1>Welcome to the Home Page</h1>
        <PlCard />
        <Link to="/second-page">Go to the Second Page</Link>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
