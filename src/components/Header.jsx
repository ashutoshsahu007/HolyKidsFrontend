import React from "react";

function Header() {
  return (
    <div>
      <div className="w-screen bg-white h-auto md:h-26 flex flex-col md:flex-row items-center justify-start md:py-0">
        <img
          src="logo.jpg"
          alt="DAV Public School Logo"
          className="w-20 md:w-40 ml-4 md:ml-32"
        />
        <p className="ml-4 my-2 md:ml-8 text-xl md:text-5xl font-serif text-gray-800 text-center md:text-left">
          HOLY FAITH HIGH SCHOOL LALGANJ, VAISHALI - 844121 (BIHAR)
        </p>
      </div>
    </div>
  );
}

export default Header;
