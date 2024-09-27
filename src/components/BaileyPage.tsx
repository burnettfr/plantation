import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

function BaileyPage() {
  return (
    <div>
      <h1>This is the Second Page</h1>
      <Image src="/Bailey.png" boxSize="600px" />
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default BaileyPage;
