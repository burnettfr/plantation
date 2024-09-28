import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  fileName: string;
  headingName: string;
  detailFileName: string;
  linkText: string;
}

const PlCard = ({ fileName, headingName, detailFileName, linkText }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={fileName} h="200px" />
        <CardBody bg="yellow.600" color="whiteAlpha.900">
          <HStack justifyContent="center">
            <Heading fontSize="2xl" pb="10px">
              {headingName}
            </Heading>
          </HStack>
          <HStack justifyContent="center" bg="blue.700" borderRadius={10}>
            <Link to={detailFileName}>{linkText}</Link>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default PlCard;
