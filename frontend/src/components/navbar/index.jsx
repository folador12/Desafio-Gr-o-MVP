import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { UserCard } from "../userCard";
import { parseCookies } from "nookies";

export const Navbar = ({ onSearchChange, search }, ctx) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isUserCardVisible, setIsUserCardVisible] = useState(false);
  const [userObject, setUserObject] = useState({});

  const router = useRouter();

  const isHomePage = router.pathname === "/restaurants";

  useEffect(() => {
    const { user: user } = parseCookies(ctx);
    if (user) {
      setUserObject(JSON.parse(user));
    }
  }, []);

  const handleSearchClick = () => {
    if (isHomePage) {
      setIsSearchVisible(!isSearchVisible);
    }
  };

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleUserClick = () => {
    setIsUserCardVisible(!isUserCardVisible);
  };

  const closeUserCard = () => {
    setIsUserCardVisible(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex justify-around items-center h-14">
          <button
            className={`p-2 rounded-full ${
              isHomePage ? "bg-red-500 text-white" : "text-gray-500"
            }`}
            onClick={() => router.push("/restaurants")}
          >
            <FaHome size={24} />
          </button>
          <button
            onClick={handleSearchClick}
            className={`p-2 text-gray-500 ${
              isSearchVisible ? "rounded-full bg-gray-300" : ""
            } `}
          >
            <FaSearch size={24} />
          </button>
          <button
            onClick={handleUserClick}
            className={`p-2 text-gray-500 ${
              isUserCardVisible ? "rounded-full bg-gray-300" : ""
            } `}
          >
            <FaUser size={24} />
          </button>
        </div>
      </nav>
      {isSearchVisible && (
        <div className="fixed top-0 left-0 right-0 flex justify-center">
          <div className="flex items-center p-2 rounded-full">
            <input
              type="text"
              placeholder="Filtro"
              className="p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={search}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
      {isUserCardVisible && (
        <UserCard
          name={userObject.name}
          email={userObject.email}
          cpf={userObject.cpf}
          onClose={closeUserCard}
        />
      )}
    </>
  );
};
