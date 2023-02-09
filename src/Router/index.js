import { Navigate, Route, Routes } from "react-router-dom";

// pages
import Login from '../Pages/Login'
import Signup from '../Pages/SingUp'
import Home from '../Pages/Home'


export function NotAuthorized() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export function Authorized() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path='' element={< />} />
        <Route path='' element={< />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
