"use client";
import axios from "axios";
import { useState, useEffect } from "react";

async function getUser() {
  try {
    const res = await axios.get("https://reqres.in/api/users");
    const users = res?.data?.data;
    return users;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

async function updateUser(id, updatedData) {
  try {
    const res = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
    console.log("User updated:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

async function deleteUser(id) {
  try {
    const res = await axios.delete(`https://reqres.in/api/users/${id}`);
    console.log("User deleted:", res.status);
    return res.status;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

export default function Page() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const userData = await getUser();
      setUsers(userData);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const handleUpdate = async (id) => {
    const updatedData = {
      first_name: "Updated",
      last_name: "User",
      email: "updateduser@example.com",
    };
    const updatedUser = await updateUser(id, updatedData);
    if (updatedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
    }
  };

  const handleDelete = async (id) => {
    const status = await deleteUser(id);
    if (status === 204) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-8">User Data</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.length > 0 ? (
            users.map((user) => (
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                key={user.id}
              >
                <img
                  src={user.avatar}
                  className="w-full h-48 object-cover"
                  alt="Avatar"
                />
                <div className="p-6">
                  <h5 className="text-xl font-bold text-black mb-2">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Email:{" "}
                    <a className="text-indigo-600 hover:underline" href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleUpdate(user.id)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}
