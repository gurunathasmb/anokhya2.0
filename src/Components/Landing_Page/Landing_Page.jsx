// import "./Landing_Page.css";
// //import Alert_mssg from '../../Components/Alert_mssg/Alert_mssg'

// import logo from "../../Assets/LPMV/Logo.png";
// import banner from "../../Assets/LPMV/Banner.png";

// ("use client");
// import { color, motion } from "framer-motion";
// import { AuroraBackground } from "../ui/background";


// export default function Homee() {
  
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="body" id="Home">
//           <div>
//             {/* <Alert_mssg message="The tickets for Deploy it and Hack My Pc are currently unavailable at this moment." duration={8000} />  */}
//           </div>

//           <div className="home_m">
//             <div className="home_m_top_left">
//               <h3>TECH FEST 2024</h3>
//               <p>EVENTS WORKSHOPS TECH-TALKS</p>
//               <p style={{ color: "yellow" }}>8th - 9th MAY 2024</p>
//             </div>
//             <div className="home_m_logo">
//               <img src={logo} alt="" />
//             </div>
//             <div className="home_m_banner">
//               <img src={banner} alt="" />
//             </div>
//             <div className="home_m_buttons">
//               <a href="/Anokhya.pdf">BROCHURE</a>
//               <a href="#Events">EVENTS</a>
//               <a href="#Timeline">TIMELINE</a>
//             </div>
//             <div className="home_m_info">
//               <p style={{color:"white"}}>Brought to you by</p>
//               <h4 style={{textAlign:"center"}}>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h4>
//               <h5 style={{textAlign:"center",color:"white"}}>Department of Artificial Intelligence & Machine Learning</h5>
//             </div>
//             <div className="home_m_links">
//               <div>
//                 <a href="https://www.instagram.com/_anokhya?igsh=MTR5Y3lhejA1NHZpMw==">
//                   <i
//                     className="fa-brands fa-instagram"
//                     style={{ color: "#ffffff" }}
//                   ></i>
//                 </a>
//               </div>
//               <div>
//                 <a href="https://discord.com/invite/Mg6Re2Kt">
//                   <i
//                     className="fa-brands fa-discord"
//                     style={{ color: "#ffffff" }}
//                   ></i>
//                 </a>
//               </div>
//               <div>
//                 <a href="mailto:techfest@anokhya.com">
//                   <i
//                     className="fa-solid fa-envelope"
//                     style={{ color: "#ffffff" }}
//                   ></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }
import "./Landing_Page.css"; // Adjust the path if necessary
import logo from "../../Assets/LPMV/Logo.png";
import banner from "../../Assets/LPMV/2.gif"
("use client");
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/background";
import React, { useEffect, useState } from 'react';

export default function Homee() {
  const images = [
    'Anokhyalogo.jpg', // Replace with actual image paths
    'Anokhyalogo.jpg',
    'Anokhyalogo.jpg',
    'Anokhyalogo.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="body" id="Home">
          <div>
            {/* Uncomment if you want to use the alert message */}
            {/* <Alert_mssg message="The tickets for Deploy it and Hack My Pc are currently unavailable at this moment." duration={8000} /> */}
          </div>

          <div className="home_m">
            <div className="home_m_top_left">
              <h3>TECH FEST 2024</h3>
              <p>EVENTS WORKSHOPS TECH-TALKS</p>
              <p style={{ color: "yellow" }}>8th - 9th MAY 2024</p>
            </div>
            <div className="home_m_logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="home_m_banner">
               <img src={banner} alt="Banner" /> 
            </div>
            <div className="home_m_buttons">
              <a href="/Anokhya.pdf">BROCHURE</a>
              <a href="#Events">EVENTS</a>
              <a href="#Timeline">TIMELINE</a>
            </div>
            <div className="home_m_info">
              <p style={{ color: "white" }}>Brought to you by</p>
              <h4 style={{ textAlign: "center" }}>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h4>
              <h5 style={{ textAlign: "center", color: "white" }}>Department of Artificial Intelligence & Machine Learning</h5>
            </div>
            <div className="home_m_links">
              <div>
                <a href="https://www.instagram.com/_anokhya?igsh=MTR5Y3lhejA1NHZpMw==">
                  <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
              <div>
                <a href="https://discord.com/invite/Mg6Re2Kt">
                  <i className="fa-brands fa-discord" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
              <div>
                <a href="mailto:techfest@anokhya.com">
                  <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}