import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setUsers } from '../../redux/userSlice';
import UserFilters from '../UserFilters/UserFilters';
import UserTable from '../UserTable/UserTable';
import Loader from '../Loader/Loader';

const UserManagement: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch(setUsers(data)));

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="p-28">
      <h1 className="text-center mb-12 text-7xl animate__animated animate__fadeIn">User Management</h1>
      <UserFilters />
      <UserTable />
    </div>
  );
};

export default UserManagement;
