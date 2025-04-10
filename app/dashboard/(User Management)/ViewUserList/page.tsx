"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa';

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users"; // یک API نمونه

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm border border-gray-200">
      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
        <div className="rounded-full bg-blue-200 p-2">
          <FaUser className="text-blue-700 text-xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      </div>
      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
        <div>
          <strong>نام کاربری:</strong> {user.username}
        </div>
        <div>
          <strong>ایمیل:</strong> {user.email}
        </div>
        <div>
          <strong>تلفن:</strong> {user.phone}
        </div>
        <div>
          <strong>وبسایت:</strong> {user.website}
        </div>
        {user.company && (
          <div>
            <strong>شرکت:</strong> {user.company.name}
          </div>
        )}
      </div>
    </div>
  );
};
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(USERS_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-8 text-gray-600">در حال بارگیری کاربران...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-600">خطا در بارگیری کاربران: {error}</p>;
  }

  if (users.length === 0) {
    return <p className="text-center mt-8 text-gray-600">هیچ کاربری موجود نیست.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">لیست کاربران</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserListPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">لیست کاربران</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;