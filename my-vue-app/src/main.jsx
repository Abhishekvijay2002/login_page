import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signuppage from './signuppage.jsx';
import Loginpage from './loginpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signuppage/>
  },
  {
    path: "/login",
    element: <Loginpage/>
  },
  {
    path: "/homepage",
    element: <App/>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
