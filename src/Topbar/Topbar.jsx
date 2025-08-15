// import logo from "C:/Users/HAMEED/Desktop/Prescripto/frontend/src/assets/images/logo.png";
// import "./Topbar.css";
// function Topbar() {
//   return (
//     <div className="Topbar">
//       <div className="Topbaricon">
//         <img src={logo} alt="" className="Topbarimg" />
//         <p className="Topbartitle">Prescripto</p>
//       </div>
//       <div className="Topbarcenter">
//         <div className="Home">
//           <p className="Homep">Home</p>
//         </div>
//         <div className="AllDoctors">
//           <p className="AllDoctorsp">All Doctors</p>
//         </div>
//         <div className="About">
//           <p className="Aboutp">About</p>
//         </div>
//         <div className="Contact">
//           <p className="Contactp">Contact</p>
//         </div>
//       </div>
//       <div className="create-account-container">
//         <button className="create-account-button">Create Account </button>
//       </div>
//     </div>
//   );
// }

// export default Topbar;
import "./Topbar.css";
import logo from "../src/assets/images/logo.png";
import Home from "../Home/Home";
import AdminPanel from "../Account/AdminPanel";
import { Navigate, useNavigate } from "react-router-dom";
function Topbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  return (
    <div className="TopbarBox">
      <div className="Topbar">
        {/* Logo and Title */}
        <div className="Topbaricon">
          <img src={logo} alt="Prescripto Logo" className="Topbarimg" />
          <p className="Topbartitle">Prescripto</p>
        </div>
        {/* Center Navigation */}
        <div className="Topbarcenter">
          <button className="Home" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button
            className="AllDoctors"
            onClick={() => scrollToSection("all-doctors")}
          >
            All Doctors
          </button>
          <button className="About" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button
            className="Contact"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        {/* Create Account */}
        <div className="create-account-container">
          <button
            className="create-account-button"
            onClick={() => navigate("/AdminPanel")}
          >
            Create Account
          </button>
          <div className="profile-container">
            <div className="profile-button">
              <img
                src="https://via.placeholder.com/35"
                alt="Profile"
                className="profile-img"
              />
              <span className="profile-name">My Account</span>
            </div>

            <div className="profile-dropdown">
              <button>Profile</button>
              <button>Settings</button>
              <button>Logout</button>
            </div>
          </div>
          ;
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}

export default Topbar;
