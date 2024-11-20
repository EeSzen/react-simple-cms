import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Add() {
  const navigate =useNavigate();
  return (
    <div className="Add">
      <div className="container mx-auto my-5" style={{maxWidth: "700px"}}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Add New Post</h1>
        </div>
        <div className="card mb-2 p-4">
          <form>
            <div className="mb-3">
              <label for="post-title" className="form-label">
                Title
              </label>
              <input type="text" className="form-control" id="post-title" />
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="post-content"
                rows="10"
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Button
                color="link"
                icon="arrow-left"
                label="Back to Post"
                size="small"
                onClick={() => {
                  navigate("/manage-post");
                }}
              />
        </div>
      </div>
    </div>
  );
}

export default Add;
