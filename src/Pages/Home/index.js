import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Card from "../../components/card";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="container mx-auto my-5" style={{ maxWidth: "500px" }}>
        <h1 className="h1 mb-4 text-center">My Blog</h1>
    
        <Card title="Post 4" desc="Here's some content about post 4" />
        <Card title="Post 3" desc="Here's some content about post 3" />
        <Card title="Post 2" desc="Here's some content about post 2" />
        <Card title="Post 1" desc="Here's some content about post 1" />

        <div className="mt-4 d-flex justify-content-center gap-3">
          <Button
            color="link"
            label="Login"
            size="small"
            onClick={() => {
              navigate("/login");
            }}
          />
          <Button
            color="link"
            label="Sign Up"
            size="small"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
