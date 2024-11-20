import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Badge from "../../components/badge";

function ManagePost() {
  const navigate = useNavigate();
  return (
    <div className="ManagePost">
      <div className="container mx-auto my-5" style={{ maxWidth: " 700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Posts</h1>
          <div className="text-end">
            <Button
              color="blue"
              label="Add New Post"
              size="small"
              onClick={() => {
                navigate("/manage-post/add");
              }}
            />
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col" style={{ width: "40%" }}>
                  Title
                </th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5</th>
                <td>Post 5</td>
                <td>
                  <Badge color="yellow" label="Pending Review" />
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="blue"
                      icon="eye"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                    <Button
                      color="grey"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-post/edit");
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
                <th scope="row">4</th>
                <td>Post 4</td>
                <td>
                  <Badge color="green" label="Publish" />
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="blue"
                      icon="eye"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                    <Button
                      color="grey"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-post/edit");
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
                <th scope="row">3</th>
                <td>Post 3</td>
                <td>
                  <Badge color="green" label="Publish" />
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="blue"
                      icon="eye"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                    <Button
                      color="grey"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-post/edit");
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
                <td>Post 2</td>
                <td>
                  <Badge color="green" label="Publish" />
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="blue"
                      icon="eye"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                    <Button
                      color="grey"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-post/edit");
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
                <td>Post 1</td>
                <td>
                  <Badge color="green" label="Publish" />
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      color="blue"
                      icon="eye"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("#");
                      }}
                    />
                    <Button
                      color="grey"
                      icon="pencil"
                      size="small"
                      m="2"
                      onClick={() => {
                        navigate("/manage-post/edit");
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

export default ManagePost;
