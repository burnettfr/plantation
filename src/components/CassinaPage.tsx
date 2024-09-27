import { Link } from "react-router-dom";
import { Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";

function CassinaPage() {
  return (
    <Grid templateAreas={`"top" "main" "foot"`}>
      <GridItem area="top" pb="20px">
        <HStack justifyContent="center">
          <Text fontSize="4xl">Cassina Details</Text>
        </HStack>
      </GridItem>
      <GridItem area="main">
        <HStack justifyContent="center">
          <Image src="/Cassina.png" boxSize="750px" />
        </HStack>
      </GridItem>
      <GridItem area="foot" pt="30px">
        <HStack justifyContent="center" fontSize="1xl">
          <Text bg="yellow.100" padding="10px" borderRadius={10} color="black">
            <Link to="/">Click to Return to Home Page</Link>
          </Text>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default CassinaPage;
