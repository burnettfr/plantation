import { Link } from "react-router-dom";
import { Grid, GridItem, SimpleGrid, Text, HStack } from "@chakra-ui/react";
import PlCard from "./Card";

function HomePage() {
  return (
    <Grid templateAreas={`"top" "main"`}>
      <GridItem area="top" pb="20px">
        <HStack justifyContent="center">
          <Text fontSize="5xl">Plantations of Edisto Island</Text>
        </HStack>
      </GridItem>
      <GridItem area="main">
        <SimpleGrid columns={4} padding="10px" spacing={10}>
          <PlCard
            fileName="/BaileyCard.png"
            headingName="Bailey House"
            detailFileName="/bailey-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/BleakHallCard.png"
            headingName="Bleak Hall"
            detailFileName="/bailey-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
        <Link to="/second-page">Go to the Second Page</Link>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
