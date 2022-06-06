import { App } from './App'
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { RoutesUser } from './pages/user/routesUser';
import { RoutesEstablishment } from './pages/establishment/routesEstablishment';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='establishment/*' element={<RoutesEstablishment/>}/>
      <Route path='user/*' element={<RoutesUser/>}></Route>
    </Routes>
  </BrowserRouter>
);