import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchUsers } from "./redux/userThunks";
import Loader from "./components/Loader/Loader";
import UserFilters from "./components/UserFilters/UserFilters";
import UserTable from "./components/UserTable/UserTable";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    dispatch(fetchUsers());

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <div className="p-28">
        <h1 className="text-center mb-12 text-7xl animate__animated animate__fadeIn">
          User Management
        </h1>
        <UserFilters />
        <UserTable />
      </div>
    </div>
  );
};

export default App;
