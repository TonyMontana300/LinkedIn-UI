import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserCard from "../posts/UserCard";
import { API_URL } from "../../../server/utils/api";

const Connections = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/api/users`);
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="px-3 pt-2 pb-4 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between items-center pb-2">
        <h2 className="">Connections you may know</h2>
        <Link
          to="#"
          className="text-gray-800 font-medium hover:bg-[#F3F3F3] px-1 py-1 rounded-sm transition-all ease-in-out duration-200"
        >
          Show all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default Connections;
