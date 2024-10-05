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
        <SimpleGrid columns={5} padding="20px" spacing={10}>
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
          <PlCard
            fileName="/BrooklandCard.png"
            headingName="Brookland"
            detailFileName="/brookland-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
        <SimpleGrid columns={5} padding="20px" spacing={10}>
          <PlCard
            fileName="/CassinaCard.png"
            headingName="Cassina Point"
            detailFileName="/cassina-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/CrawfordCard.png"
            headingName="Crawford"
            detailFileName="/crawford-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/CypressCard.png"
            headingName="Cypress"
            detailFileName="/cypress-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/FrogmoreCard.png"
            headingName="Frogmore"
            detailFileName="/frogmore-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/MiddletonCard.png"
            headingName="Middleton"
            detailFileName="/middleton-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
        <SimpleGrid columns={5} padding="20px" spacing={10}>
          <PlCard
            fileName="/OakIslandCard.png"
            headingName="Oak Island"
            detailFileName="/oakIsland-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/OldHouseCard.png"
            headingName="Old House"
            detailFileName="/oldHouse-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/SeasideCard.png"
            headingName="Seaside"
            detailFileName="/seaside-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/SunnySideCard.png"
            headingName="Sunny Side"
            detailFileName="/sunnySide-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/SwallowBluffCard.png"
            headingName="Swallow Bluff"
            detailFileName="/swallowBluff-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
        <SimpleGrid columns={5} padding="20px" spacing={10}>
          <PlCard
            fileName="/WindsorCard.png"
            headingName="Windsor"
            detailFileName="/windsor-page"
            linkText="Click here for Details"
          />
          <PlCard
            fileName="/WoodruffCard.png"
            headingName="Woodruff"
            detailFileName="/woodruff-page"
            linkText="Click here for Details"
          />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
