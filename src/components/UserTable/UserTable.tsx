import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NoResults from '../NoResults/NoResults';

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);

  return (
    <>
      {users.length === 0 ? (
        <NoResults />
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
    </>
  );
};

export default UserTable;
