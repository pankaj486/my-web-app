import "./components/auth/auth.css";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import SignUpForm from "./components/auth/SignUp";
import NavbarContainer from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainAppDiv = styled.div`
`

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<NavbarContainer />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainAppDiv>
        <AppRoutes />
      </MainAppDiv>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
