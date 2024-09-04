import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilter, resetFilters } from "../../redux/userSlice";

const UserFilters: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ key: name as keyof typeof filters, value }));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const inputsConfig = [
    { name: "name", placeholder: "Search by name" },
    { name: "username", placeholder: "Search by username" },
    { name: "email", placeholder: "Search by email" },
    { name: "phone", placeholder: "Search by phone" },
  ];

  return (
    <div className="mb-4 animate__animated animate__fadeIn">
      {inputsConfig.map((input) => (
        <input
          key={input.name}
          type="text"
          name={input.name}
          placeholder={input.placeholder}
          value={filters[input.name as keyof typeof filters]}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
      ))}
      <button
        onClick={handleResetFilters}
        className="border hover:border-black bg-black hover:bg-white text-white hover:text-black p-2 ml-2 w-[150px] transition transform ease-in-out"
      >
        Reset
      </button>
    </div>
  );
};

export default UserFilters;
