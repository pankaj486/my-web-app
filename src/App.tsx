import "./components/auth/auth.css";
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import SignUpForm from "./components/auth/SignUp";
import NavbarContainer from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const MainAppDiv = styled.div`
// `

// function AppRoutes () {
//   return (
//     <Routes>
//       <Route path="/" element={<NavbarContainer />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/signup" element={<SignUpForm />} />
//     </Routes>
//   );
// }

function App() {
  return (
    <BrowserRouter>
    <NavbarContainer />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
