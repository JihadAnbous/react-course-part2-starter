import useAuth from "./hooks/useAuth";
import UserListPage from "./UserList";
import { Navigate, Outlet } from "react-router-dom";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
