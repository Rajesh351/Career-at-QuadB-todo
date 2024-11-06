import React, { useState } from 'react';
import { FaTasks, FaCalendarDay, FaStar, FaListAlt, FaUser, FaPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import CircleChart from './redux/raj';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from './redux/authSlice';

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login/logout status
  const [showMenu, setShowMenu] = useState(false);  // State to toggle menu visibility
  const dispatch=useDispatch();
  const { login } = useSelector(store => store.auth);
  // Toggle login/logout
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    dispatch(setLogin(!login))
    setShowMenu(false);  // Close the menu after action
  };

  // Toggle the visibility of the profile menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-1/5 bg-green-50 p-4 flex flex-col items-center space-y-5">
      <div className="flex flex-col items-center relative">
        {/* Profile Image */}
        <img
          src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="Profile"
          className="rounded-full w-16 h-16 cursor-pointer"
          onClick={toggleMenu}  // Toggle menu when profile is clicked
        />
        <p className="text-lg mt-2">Hey, ABCD</p>

        {/* Profile Menu */}
        {showMenu && (
          <div className="absolute top-20 bg-white border shadow-lg rounded-lg w-32 text-center">
            <div className="py-2 cursor-pointer hover:bg-gray-100" onClick={toggleLoginStatus}>
              {isLoggedIn ? (
                <>
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </>
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Login
                </>
              )}
            </div>
            <div className="py-2 cursor-pointer hover:bg-gray-100">
              <FaUser className="mr-2" />
              My Profile
            </div>
          </div>
        )}
      </div>

      <div className="w-full space-y-5">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex items-center text-gray-800 cursor-pointer hover:bg-green-100 p-2 rounded-md">
            <FaTasks className="mr-2 text-lg" />
            <span>All Tasks</span>
          </div>
          <div className="flex items-center text-gray-800 cursor-pointer hover:bg-green-100 p-2 rounded-md">
            <FaCalendarDay className="mr-2 text-lg" />
            <span>Today</span>
          </div>
          <div className="flex items-center text-gray-800 cursor-pointer hover:bg-green-100 p-2 rounded-md">
            <FaStar className="mr-2 text-lg" />
            <span>Important</span>
          </div>
          <div className="flex items-center text-gray-800 cursor-pointer hover:bg-green-100 p-2 rounded-md">
            <FaListAlt className="mr-2 text-lg" />
            <span>Planned</span>
          </div>
          <div className="flex items-center text-gray-800 cursor-pointer hover:bg-green-100 p-2 rounded-md">
            <FaUser className="mr-2 text-lg" />
            <span>Assigned to me</span>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white p-4 rounded-lg text-blue-600 font-semibold cursor-pointer">
          <FaPlus className="mr-2 text-lg" />
          <span>Add list</span>
        </div>
      </div>

      <CircleChart />
    </div>
  );
};

export default Sidebar;
