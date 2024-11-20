import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Post from "./Pages/Post";
import ManagePost from "./Pages/ManagePost";
import ManageUsers from "./Pages/ManageUsers";
import ManagePostAdd from "./Pages/ManagePostAdd";
import ManagePostEdit from "./Pages/ManagePostEdit";
import ManageUsersAdd from "./Pages/ManageUsersAdd";
import ManageUsersEdit from "./Pages/ManageUsersEdit";
import ManageUsersChangePsw from "./Pages/ManageUsersChangePsw";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/manage-post" element={<ManagePost/>}/>
          <Route path="/manage-users" element={<ManageUsers/>}/>

          <Route path="/manage-post/add" element={<ManagePostAdd/>}/>
          <Route path="/manage-post/edit" element={<ManagePostEdit/>}/>
          <Route path="/manage-user/add" element={<ManageUsersAdd/>}/>
          <Route path="/manage-user/edit" element={<ManageUsersEdit/>}/>
          <Route path="/manage-user/changepsw" element={<ManageUsersChangePsw/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
