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
        <SimpleGrid columns={4} padding="20px" spacing={10}>
          <PlCard
            fileName="/BaileyCard.png"
            headingName="Bailey House"
            detailFileName="/bailey-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/BleakHallCard.png"
            headingName="Bleak Hall"
            detailFileName="/bleakHall-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/BlueHouseCard.png"
            headingName="Blue House"
            detailFileName="/blueHouse-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/BrickHouseCard.png"
            headingName="Brick House"
            detailFileName="/brickHouse-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
        <SimpleGrid columns={4} padding="20px" spacing={10}>
          <PlCard
            fileName="/BrooklandCard.png"
            headingName="Brookland"
            detailFileName="/brookland-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/CassinaCard.png"
            headingName="Cassina"
            detailFileName="/cassina-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
