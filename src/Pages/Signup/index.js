import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="Signup">
      <div className="container my-5 mx-auto" style={{maxWidth: "500px"}}>
        <h1 className="h1 mb-4 text-center">Sign Up a New Account</h1>

        <div className="card p-4">
          <form method="GET" action="dashboard.html">
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3">
              <label for="confirm_password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                name="confirm_password"
              />
            </div>
            <div className="d-grid">
              <Button
                color="blue"
                label="Sign Up"
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
          </form>
        </div>

        {/* links  */}
        <div className="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
          <Button
                color="link"
                label="Go Back"
                icon="arrow-left-circle"
                size="small"
                onClick={() => {
                  navigate("/post");
                }}
              />
          <Button
                color="link"
                label="Already have an account? Login here"
                icon2="arrow-right-circle"
                size="small"
                onClick={() => {
                  navigate("/login");
                }}
              />
        </div>
      </div>
    </div>
  );
}

export default Signup;
