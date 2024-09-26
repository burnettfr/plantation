import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <div>
      <h1>This is the Second Page</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default SecondPage;
