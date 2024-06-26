import React, { useState, useEffect } from 'react';
import SideLink from '../components/SideLink';
import { Outlet } from 'react-router-dom';
import Usersk from '../components/Usersk';
import Products from '../components/Products';
import Setting from '../components/Setting';
import History from '../components/History';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from '../components/DashboardHome'
const Dashboard = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const togglePagesMenu = () => {
    setIsPagesMenuOpen(!isPagesMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeSideMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);


  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };


  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);


  
  return (
    <>
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
          {/* Dekstop  */}
          <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
              <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                AlMuslim
              </a>
              <ul className="mt-6">
                <SideLink Title="Dashboard" LinkTo="/dashboard" Icon="FaHome"/>
              </ul>
              <ul>
                <SideLink Title="User" LinkTo="/dashboard/User" Icon="FaUserFriends"/>
                <SideLink Title="History" LinkTo="/dashboard/History" Icon="FaHistory"/>
                <SideLink Title="Product" LinkTo="/dashboard/products" Icon="FaProductHunt"/>
                <SideLink Title="Account" LinkTo="/dashboard/account" Icon="FaCog"/>
              </ul> 
            </div>
          </aside>
          {/* Dekstop end */}
          <div
            className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${
              isSideMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 150ms ease-in-out',
              display: isSideMenuOpen ? 'flex' : 'none',
            }}></div>
          {/* Mobile  */}
          <aside
          className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden ${
            isSideMenuOpen ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSideMenu();}}>

            <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
              Windmill
            </a>
            <ul className="mt-6">
              <SideLink LinkTo="/dashboard" Icon="FaHome" Title="Dashboard"/>
            </ul>
            <ul>
                <SideLink Title="User" LinkTo="/dashboard/User" Icon="FaUserFriends"/>
                <SideLink Title="History" LinkTo="/dashboard/History" Icon="FaHistory"/>
                <SideLink Title="Product" LinkTo="/dashboard/products" Icon="FaProductHunt"/>
                <SideLink Title="Account" LinkTo="/dashboard/account" Icon="FaCog"/>
              </ul> 
          </div>
      </aside>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div
            className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
          >
            {/* <!-- Mobile hamburger --> */}
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSideMenu}
              aria-label="Menu">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
            <div className="flex justify-center flex-1 lg:mr-32">
      <div className="relative w-full max-w-xl mr-6 focus-within:text-black">
        <div className="absolute inset-y-0 flex items-center pl-2">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          className="w-full pl-8 pr-2 py-3 text-sm text-gray-900 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-900 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
          type="text"
          placeholder="Search for projects"
          aria-label="Search"
        />
      </div>
      <li className="relative">
      <button
        className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
        onClick={toggleProfileMenu}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            closeProfileMenu();
          }
        }}
        aria-label="Account"
        aria-haspopup="true"
      >
        <img
          className="object-cover w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
          alt=""
          aria-hidden="true"
        />
      </button>
      {isProfileMenuOpen && (
        <ul
          className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
          aria-label="submenu"
          onClick={closeProfileMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeProfileMenu();
            }
          }}
        >
          <li className="flex">
            <a
              className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="#"
            >
              <svg
                className="w-4 h-4 mr-3"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>Profile</span>
            </a>
          </li>
          <li className="flex">
            <a
              className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="#"
            >
              <svg
                className="w-4 h-4 mr-3"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li className="flex">
            <a
              className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="#"
            >
              <svg
                className="w-4 h-4 mr-3"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Log out</span>
            </a>
          </li>
        </ul>
      )}
    </li>
    </div>
            </div>
            </header>
            <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
          <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="User" element={<Usersk />} />
          <Route path="history" element={<History />} />
          <Route path="products" element={<Products />} />
          <Route path="account" element={<Setting />} />
          </Routes>
        <Outlet />
            </div>
            </main>
            </div>
          {/* Mobile end */}
      </div>
    </>
  );
}

export default Dashboard;
