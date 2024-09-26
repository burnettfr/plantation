import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/second-page">Go to the Second Page</Link>
    </div>
  );
}

export default HomePage;
