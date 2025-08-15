import React from "react";
import Home from "./Home/Home.jsx";
import Contacts from "./Home/Contact.jsx";
import Topbar from "./Topbar/Topbar.jsx";
import AdminPanel from "./Account/AdminPanel.jsx";
import Doctor from "./Account/Doctors.jsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Topbar />
      <AdminPanel />
     
      <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
