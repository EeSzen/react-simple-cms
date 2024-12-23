import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="Dashboard">
      <div className="container mx-auto my-5" style={{ maxWidth: "800px" }}>
        <h1 className="h1 mb-4 text-center">Dashboard</h1>
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i
                      className="bi bi-pencil-square"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </div>
                  Manage Posts
                </h5>
                <div className="text-center mt-3">
                  <Button
                    color="blue"
                    label="Access"
                    size="small"
                    onClick={() => {
                      navigate("/manage-post");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </div>
                  Manage Users
                </h5>
                <div className="text-center mt-3">
                  <Button
                    color="blue"
                    label="Access"
                    size="small"
                    onClick={() => {
                      navigate("/manage-users");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Button
            color="link"
            icon="arrow-left"
            label="Back"
            size="small"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
