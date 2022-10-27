import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Developed by the
          <a className="text-blue-600" 
          href="https://github.com/Bootsbigenough/Threadz" 
          rel="nofollow">
            {" "}
            Threadz team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;