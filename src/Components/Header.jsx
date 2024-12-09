import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white flex justify-between items-center px-[120px] py-4 fixed w-full z-50">
      <h1 className="text-2xl font-bold">YakoubDev</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary">
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
