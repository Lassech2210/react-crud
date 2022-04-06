import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navigation from "./Components/Navigation"
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
import ListUsers from "./Components/ListUsers";
/* import NotFound from "./Components/NotFound"
<Route path="*" element={<NotFound />} /> */

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/update/:user_id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;