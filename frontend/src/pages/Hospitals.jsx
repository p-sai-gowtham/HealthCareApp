import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
 
const Hospitals = () => {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate();
  const { token } = useContext(AppContext);
 
  useEffect(() => {
    axios
.get("http://localhost:4000/api/user/hospitals", { headers: { token } })
      .then((response) => {
        setAdmins(response.data.hospitals);
      })
      .catch((error) => {
        console.error("There was an error fetching the admins!", error);
      });
  }, []);
 
  const handleRedirect = (adminId) => {
    navigate(`/hospital/${adminId}`);
  };
 
  // Filter hospitals based on search input
  const filteredHospitals = admins.filter((admin) =>
    admin.hospitalName.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Hospital Admins</h1>
      
      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-96 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
 
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((admin) => (
            <div
              key={admin._id}
              onClick={() => handleRedirect(admin._id)}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-900">{admin.hospitalName}</h2>
              <p className="text-gray-600 mt-2">{admin.address}</p>
              <p className="text-gray-600 mt-1">📞 {admin.phone}</p>
              <p className="text-gray-700 mt-3">{admin.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No hospitals found.</p>
        )}
      </div>
    </div>
  );
};
 
export default Hospitals;