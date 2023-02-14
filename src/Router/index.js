import { Navigate, Route, Routes } from "react-router-dom";

// pages
import Login from '../Pages/Login'
import Signup from '../Pages/SingUp'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import UserList from "../Pages/UserList";
import UserDetails from "../Pages/UserDetails";

export function NotAuthorized(props) {
  return (
    <>
      <Routes>
        <Route index element={<Login login={props.login} />} />
        <Route path='/signup' element={<Signup  login={props.login} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export function Authorized(props) {
  return (
    <>
      <Routes>
        <Route index element={<Home logout={props.logout} />} />
        <Route path='/usersList' element={<UserList />} />
        <Route path='/usersList/:id' element={<UserDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
