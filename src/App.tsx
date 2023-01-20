import "./components/auth/auth.css";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import SignUpForm from "./components/auth/SignUp";
import NavbarContainer from "./components/navbar/Navbar";
import DashboardPage from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainAppDiv = styled.div`
`

function App() {
  return (
    <BrowserRouter>
    <NavbarContainer />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
