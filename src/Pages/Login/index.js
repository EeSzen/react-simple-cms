import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <div className="container my-5 mx-auto" style={{ maxWidth: "500px" }}>
        <h1 className="h1 mb-4 text-center">Login</h1>

        <div className="card p-4">
          <form method="GET" action="dashboard.html">
            <div className="mb-2">
              <label for="email" className="visually-hidden">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-2">
              <label for="password" className="visually-hidden">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              {/* <button type="submit" className="btn btn-primary">
                Login
              </button> */}
              <Button
                color="blue"
                label="Login"
                onClick={() => {
                  navigate("/dashboard");
                }}
              />
            </div>
          </form>
        </div>

        {/* links  */}
        <div className="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
          <Button
            color="link"
            icon="arrow-left-circle"
            label="Back"
            size="small"
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            color="link"
            icon2="arrow-right-circle"
            label=" Don't have an account? Sign up here"
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

export default Login;
