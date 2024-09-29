import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal.tsx'; 
import logoImage from './images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleGeneralInfoClick = () => {
    navigate('/view-emergency-uses');
    toggleDropdown();
    setIsMenuOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <style>
        {`
          @font-face {
            font-family: 'BlackCobra';
            src: url('/fonts/black-cobra.regular.ttf') format('truetype');
          }
          .aragya-logo {
            font-family: 'RetroQesmo', sans-serif;
          }
        `}
      </style>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Brand Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-semibold aragya-logo">ARAGYA</span>
        </div>

        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map((tab) => (
            <div key={tab} className="relative">
              {tab === 'General Information' ? (
                <>
                  <button
                    onClick={handleGeneralInfoClick}
                    className={`text-white hover:text-gray-200 transition-colors duration-300 ${
                      location.pathname.startsWith('/view-emergency-uses') ||
                      location.pathname.startsWith('/view-parameters')
                        ? 'font-bold'
                        : ''
                    }`}
                  >
                    {tab}
                  </button>

                  {(location.pathname.startsWith('/view-emergency-uses') ||
                    location.pathname.startsWith('/view-parameters')) && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full transition-all duration-300"
                      style={{
                        height: '4px',
                        borderRadius: '10px',
                      }}
                    />
                  )}

                  <button onClick={toggleDropdown} className="ml-2 text-white focus:outline-none">
                    ▼
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple rounded-md shadow-lg py-1 z-20">
                      <Link
                        to="/view-emergency-uses"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-white hover:bg-custom-dark-purple hover:bg-opacity-75"
                      >
                        View Emergency Uses
                      </Link>
                      <Link
                        to="/view-parameters"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-white hover:bg-custom-dark-purple hover:bg-opacity-75"
                      >
                        View Parameters
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={tab === 'Home' ? '/' : `/${tab.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-gray-200 transition-colors duration-300 ${
                    location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` ||
                    (tab === 'Home' && location.pathname === '/')
                      ? 'font-bold'
                      : ''
                  }`}
                >
                  {tab}
                </Link>
              )}

              
              {(location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` ||
                (tab === 'Home' && location.pathname === '/')) && (
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full transition-all duration-300"
                  style={{
                    height: '4px',
                    borderRadius: '10px',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={openModal}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
          >
            Patient DBMS
          </button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map((tab) => (
            <div key={tab}>
              {tab === 'General Information' ? (
                <>
                  <button
                    onClick={handleGeneralInfoClick}
                    className={`block w-full text-left text-white px-4 py-2 transition-colors duration-300 ${
                      location.pathname.startsWith('/view-emergency-uses') ||
                      location.pathname.startsWith('/view-parameters')
                        ? 'bg-gray-800'
                        : ''
                    }`}
                  >
                    {tab}
                  </button>

                  <button onClick={toggleDropdown} className="ml-2 text-white focus:outline-none">
                    ▼
                  </button>

                  {isDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        to="/view-emergency-uses"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block text-white hover:bg-gray-800 px-4 py-2"
                      >
                        View Emergency Uses
                      </Link>
                      <Link
                        to="/view-parameters"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block text-white hover:bg-gray-800 px-4 py-2"
                      >
                        View Parameters
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={tab === 'Home' ? '/' : `/${tab.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left text-white px-4 py-2 transition-colors duration-300 ${
                    location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` ||
                    (tab === 'Home' && location.pathname === '/')
                      ? 'bg-gray-800'
                      : ''
                  }`}
                >
                  {tab}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4">
            <button
              onClick={openModal} 
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              Patient DBMS
            </button>
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Modal component */}
    </nav>
  );
};

export default Navbar;
