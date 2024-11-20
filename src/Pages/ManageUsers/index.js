import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Badge from "../../components/badge";

function ManageUsers() {
  const navigate = useNavigate();
  return (
    <div className="ManageUsers">
      <div className="container mx-auto my-5" style={{maxWidth: "700px"}}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Users</h1>
          <div className="text-end">
            {/* <a href="manage-users-add.html" className="btn btn-primary btn-sm">
              Add New User
            </a> */}
            <Button
                color="blue"
                label="Add New User"
                size="small"
                onClick={() => {
                  navigate("/manage-user/add");
                }}
              />
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col" className="text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>Jack</td>
                <td>jack@gmail.com</td>
                <td>
                  <Badge color="green"label="User"/>
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="green"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/edit");
                      }}
                    />
                    <Button
                      color="yellow"
                      icon="key"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/changepsw");
                      }}
                    />
                    <Button
                      color="red"
                      icon="trash"
                      size="small"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jane</td>
                <td>jane@gmail.com</td>
                <td>
                  <Badge color="turquoise"label="Editor"/>
                </td>
                <td className="text-end">
                  <div className="buttons">
                  <Button
                      color="green"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/edit");
                      }}
                    />
                    <Button
                      color="yellow"
                      icon="key"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/changepsw");
                      }}
                    />
                    <Button
                      color="red"
                      icon="trash"
                      size="small"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>john@gmail.com</td>
                <td>
                  <Badge color="blue"label="Admin"/>
                </td>
                <td className="text-end">
                  <div className="buttons">
                  <Button
                      color="green"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/edit");
                      }}
                    />
                    <Button
                      color="yellow"
                      icon="key"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-user/changepsw");
                      }}
                    />
                    <Button
                      color="red"
                      icon="trash"
                      size="small"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Button
                color="link"
                label="Back to Dashboard"
                icon="arrow-left"
                size="small"
                onClick={() => {
                  navigate("/dashboard");
                }}
              />
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
