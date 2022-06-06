import { Route, Routes } from "react-router-dom";
import HomeEstablishment from "./Home";

export function RoutesEstablishment() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeEstablishment />} />
      </Routes>
    </div>
  )
}