import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";

const PlCard = () => {
  return (
    <>
      <h1>Test Card</h1>
      <Card>
        <Image src="/BaileyCard.png" />
        <CardBody>
          <HStack justifyContent="center">
            <Heading fontSize="2xl">Bailey House</Heading>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default PlCard;
