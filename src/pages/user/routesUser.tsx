import { Route, Routes } from "react-router-dom";
import HomeUser from "./Home";


export function RoutesUser() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser/>}/> 
    </Routes>
  )
}