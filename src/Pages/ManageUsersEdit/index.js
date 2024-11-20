import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Edit() {
  const navigate =useNavigate();
  return (
    <div className="Edit">
      <div className="container mx-auto my-5" style={{maxWidth: "700px"}}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Edit User</h1>
        </div>
        <div className="card mb-2 p-4">
          <form>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="col">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="role" className="form-label">
                Role
              </label>
              <select className="form-control" id="role">
                <option value="">Select an option</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="d-grid">
              <Button
                color="blue"
                label="Update"
                onClick={() => {
                  navigate("#");
                }}
              />
            </div>
          </form>
        </div>
        <div className="text-center">
        <Button
                color="link"
                icon="arrow-left"
                label="Back to Users"
                size="small"
                onClick={() => {
                  navigate("/manage-users");
                }}
              />
        </div>
      </div>
    </div>
  );
}

export default Edit;
