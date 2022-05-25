import App from './App'
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Locator from './pages/locator/';
import Locatario from './pages/locatario/';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="locator" element={<Locator/>}/> 
      <Route path="locatario" element={<Locatario/>}/> 
    </Routes>
  </BrowserRouter>
);