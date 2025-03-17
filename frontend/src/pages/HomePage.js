import React, { useState } from "react";

const cities = [
  { name: "Indore", image: "https://www.holidify.com/images/compressed/3551.jpg" },
  { name: "Jabalpur", image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/06/Dhuandhar-Waterfall-Madhya-Pradesh2.jpg" },
  { name: "Bhopal", image: "https://th.bing.com/th/id/OIP._Rl7Fsyzk3mu697tm9r50wHaDz?rs=1&pid=ImgDetMain" },
];

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      {/* City Selection Popup */}
      {!selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Select Your City</h2>
            <div className="grid grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
                  onClick={() => setSelectedCity(city)}
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <p className="mt-2 font-medium">{city.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-orange-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
          <h1 className="text-2xl font-bold">PoojaPath</h1>
          <nav>
            <ul className="flex space-x-6 items-center">
              {selectedCity && (
                <li className="relative">
                  {/* City Display */}
                  <div
                    className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-orange-700 transition"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{selectedCity.name}</span>
                    <span className="ml-2 text-xs bg-white text-orange-800 px-2 py-1 rounded-md">
                      Change City
                    </span>
                  </div>

                  {/* Dropdown */}
                  {showDropdown && (
                    <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md p-3 w-48 z-50">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-gray-200 transition"
                          onClick={() => {
                            setSelectedCity(city);
                            setShowDropdown(false);
                          }}
                        >
                          <img
                            src={city.image}
                            alt={city.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{city.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              )}
              <li><a href="#" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300">Services</a></li>
              <li><a href="#" className="hover:text-yellow-300">About</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-3xl font-bold text-orange-800 mb-6">
          Welcome to PoojaPath
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Dashboard content will be implemented here.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-4 mt-8 text-center text-sm opacity-80">
        <p>&copy; {new Date().getFullYear()} PoojaPath. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
