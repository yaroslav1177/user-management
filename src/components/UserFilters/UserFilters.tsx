import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilter } from '../../redux/userSlice';

const UserFilters: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ key: name as keyof typeof filters, value }));
  };

  return (
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
  );
};

export default UserFilters;
