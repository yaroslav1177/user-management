import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setFilter, setUsers } from '../../redux/userSlice';

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const filters = useSelector((state: RootState) => state.users.filters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch(setUsers(data)));
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ key: name as keyof typeof filters, value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-4xl">Loading...</div>
      </div>
    );
  }


  return (
    <div className="p-28">
      <h1 className="text-center mb-12 text-7xl animate__animated animate__fadeIn">User Management</h1>
      <div className="mb-4 animate__animated animate__fadeIn">
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          value={filters.name}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          value={filters.username}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Search by email"
          value={filters.email}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Search by phone"
          value={filters.phone}
          onChange={handleFilterChange}
          className="border p-2"
        />
      </div>
      {users.length === 0 ? (
        <div className="text-center text-gray-500 text-4xl mt-10 animate__animated animate__fadeIn">Unfortunately, there are no results...</div>
      ) : (
        <table className="min-w-full table-fixed border border-gray-200 animate__animated animate__fadeIn">
          <thead>
            <tr className="bg-gray-300">
              <th className="border-b border-r-2 p-2 w-1/4">Name</th>
              <th className="border-b border-r-2 p-2 w-1/4">Username</th>
              <th className="border-b border-r-2 p-2 w-1/4">Email</th>
              <th className="border-b p-2 w-1/4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-400 hover:text-white transition transform ease-in-out animate__animated animate__fadeIn">
                <td className="border-b border-r-2 p-2 w-1/4">{user.name}</td>
                <td className="border-b border-r-2 p-2 w-1/4">{user.username}</td>
                <td className="border-b border-r-2 p-2 w-1/4">{user.email}</td>
                <td className="border-b p-2 w-1/4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
