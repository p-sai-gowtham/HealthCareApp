import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const HospitalDoctors = () => {
  const { id } = useParams(); // Get the adminId from the URL
  //console.log(id);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch doctors belonging to the selected hospital
    axios
      .get(`http://localhost:4000/api/user/doctors/${id}`)
      .then((response) => {
        setDoctors(response.data.doctors); // Set the doctors data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  return (
    <div className="w-full m-20">
      <h1 className="text-xl font-bold mb-5">Doctors in this Hospital</h1>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
        {doctors.map((doctor, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-[#EAEFFF]" src={doctor.image} alt={doctor.name} />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  doctor.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 rounded-full ${
                    doctor.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></p>
                <p>{doctor.available ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-[#262626] text-lg font-medium">{doctor.name}</p>
              <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalDoctors;
