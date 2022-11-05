// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
//       <div className="container px-4">
//         <p className="text-sm text-gray-400 text-center">
//           Developed by the
//           <a className="text-blue-600" 
//           href="https://github.com/Bootsbigenough/Threadz" 
//           rel="nofollow">
//             {" "}
//             Threadz team
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//*********************************** */

import React from "react";
import "../../../styles/SocialFollow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="social-container">
        <p>THREADZ &copy; 2022 </p>
        <p>Social Follow</p>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/jamesqquick"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}