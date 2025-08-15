// import Topbar from "../Topbar/Topbar";
// import Contact from "./Contact";
// import "./Home.css";
// import doctor from "C:/Users/HAMEED/Desktop/Prescripto/frontend/src/assets/images/doctor.png";
// function Home() {
//   const doctors = [
//     { name: "Dr. John Doe", type: "General Physician", available: true },
//     { name: "Dr. Jane Smith", type: "Cardiologist", available: false },
//     { name: "Dr. Mark Wilson", type: "Neurologist", available: true },
//     { name: "Dr. Emily Davis", type: "Dermatologist", available: false },
//     { name: "Dr. Peter Parker", type: "Pediatrician", available: true },
//     { name: "Dr. Bruce Wayne", type: "Orthopedist", available: true },
//     { name: "Dr. Clark Kent", type: "Gastroenterologist", available: false },
//     { name: "Dr. Diana Prince", type: "Gynecologist", available: true },
//   ];
//   return (
//     <>
//       <Topbar />
//       <div>
//         <div className="box">
//           <div className="label">
//             <p className="labeltext">Book Appointment With Trusted People</p>
//             <div className="labelsubbox">
//               <div>hi</div>
//               <p className="labelsub">simply go throught this</p>
//             </div>
//             <button className="labelbutton">
//               Book Oppintment<a href="">-)clcik</a>
//             </button>
//           </div>
//           <div>
//             <img src={doctor} alt="the special" className="doctors" />
//           </div>
//         </div>
//         <div className="specailist">
//           <p className="specialisttitle">Find By Specailist</p>
//           <p className="specialistdesp">
//             Simply browse through our fantastic doctors to ur problems
//           </p>
//           <div className="specialzation">
//             <div className="generalphysian">
//               <img src={doctor} alt="" />
//               <p className="gpt">General Physician</p>
//             </div>
//             <div className="gynocologist">
//               <img src={doctor} alt="" />
//               <p className="gt">Gynocolgist</p>
//             </div>
//             <div className="Dermatology">
//               <img src={doctor} alt="" />
//               <p className="dt">Dermatologist</p>
//             </div>
//             <div className="Pedatricion">
//               <img src={doctor} alt="" />
//               <p className="pt">Pedatricion</p>
//             </div>
//             <div className="Neurologist">
//               <img src={doctor} alt="" />
//               <p className="nt">Neurologist</p>
//             </div>
//           </div>
//         </div>
//         <div className="doctors-container">
//           <p className="doctors-title">All Doctors</p>
//           <p className="doctors-description">
//             Browse our list of expert doctors below:
//           </p>
//           <div className="doctors-collection">
//             {doctors.map((doctor1, index) => (
//               <div className="doctor-card" key={index}>
//                 <img
//                   src={doctor}
//                   alt={`${doctor1.name}`}
//                   className="doctor-img"
//                 />
//                 <div
//                   className={`doctor-status ${
//                     doctor1.available ? "available" : "unavailable"
//                   }`}
//                 ></div>
//                 <p className="doctor-name">{doctor1.name}</p>
//                 <p className="doctor-type">{doctor1.type}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Home;

import Topbar from "../Topbar/Topbar";
import "./Home.css";
import doctor from "../assets/images/doctor.png";

function Home() {
  const doctors = [
    { name: "Dr. John Doe", type: "General Physician", available: true },
    { name: "Dr. Jane Smith", type: "Cardiologist", available: false },
    { name: "Dr. Mark Wilson", type: "Neurologist", available: true },
    { name: "Dr. Emily Davis", type: "Dermatologist", available: false },
    { name: "Dr. Peter Parker", type: "Pediatrician", available: true },
    { name: "Dr. Bruce Wayne", type: "Orthopedist", available: true },
    { name: "Dr. Clark Kent", type: "Gastroenterologist", available: false },
    { name: "Dr. Diana Prince", type: "Gynecologist", available: true },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navigation */}
      <Topbar />
      {/* Book Appointment Section */}
      <div id="book-appointment" className="box">
        <div className="label">
          <p className="labeltext">Book Appointment With Trusted People</p>
          <div className="labelsubbox">
            <div>hi</div>
            <p className="labelsub">simply go throught this</p>
          </div>
          <button
            className="labelbutton"
            onClick={() => scrollToSection("specialists")}
          >
            Book Oppintment<a href="">-)clcik</a>
          </button>
        </div>
        <div>
          <img src={doctor} alt="the special" className="doctors" />
        </div>
      </div>

      {/* Specialists Section */}
      <div id="specialists" className="specailist">
        <p className="specialisttitle">Find By Specialist</p>
        <p className="specialistdesp">
          Simply browse through our fantastic doctors to ur problems
        </p>
        <div className="specialzation">
          <div className="generalphysian">
            <img src={doctor} alt="" />
            <p className="gpt">General Physician</p>
          </div>
          <div className="gynocologist">
            <img src={doctor} alt="" />
            <p className="gt">Gynecologist</p>
          </div>
          <div className="Dermatology">
            <img src={doctor} alt="" />
            <p className="dt">Dermatologist</p>
          </div>
          <div className="Pedatricion">
            <img src={doctor} alt="" />
            <p className="pt">Pediatrician</p>
          </div>
          <div className="Neurologist">
            <img src={doctor} alt="" />
            <p className="nt">Neurologist</p>
          </div>
        </div>
      </div>

      {/* All Doctors Section */}
      <div id="all-doctors" className="doctors-container">
        <p className="doctors-title">All Doctors</p>
        <p className="doctors-description">
          Browse our list of expert doctors below:
        </p>
        <div className="doctors-collection">
          {doctors.map((doctor1, index) => (
            <div className="doctor-card" key={index}>
              <img
                src={doctor}
                alt={`${doctor1.name}`}
                className="doctor-img"
              />
              <div
                className={`doctor-status ${
                  doctor1.available ? "available" : "unavailable"
                }`}
              ></div>
              <p className="doctor-name">{doctor1.name}</p>
              <p className="doctor-type">{doctor1.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="section about-section">
        <h2>About Us</h2>
        <p>
          Prescripto is your trusted healthcare partner. Our mission is to
          provide seamless healthcare services, connecting patients with
          top-notch doctors across multiple specialties. Your health is our
          priority.
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us at:</p>
        <ul>
          <li>Email: support@prescripto.com</li>
          <li>Phone: +1-800-123-4567</li>
          <li>Address: 123 Health Lane, Wellness City, HC 45678</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
