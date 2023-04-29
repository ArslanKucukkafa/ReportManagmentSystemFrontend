import './App.css';
import {Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthLayout from "./pages/AuthPage/AuthLayout"
import Login from "./pages/AuthPage/LoginPage/Login"
import Register from "./pages/AuthPage/RegisterPage/Register"
import HomeLayout from "./pages/HomePage/HomeLayout"
import Laborant from "./pages/HomePage/LaborantPage/Laborant"
import Admin from "./pages/HomePage/AdminPage/Admin"
import UnexpectedError from "./pages/ErrorPage/UnexpectedError"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import RequireAuth from './hooks/RequireAuth';
import ReportDetail from './pages/HomePage/LaborantPage/ReportDetail';

const ROLES = {
  'laborant': "LABORANT",
  'admin': "ADMIN"
}

function App() {
  return (   
    <div className="App">
      <div className='container mt-3'>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="*" element={<UnexpectedError/>}/>
            </Route>
            {/* Protected Routes */}
            <Route path="/home" element={<HomeLayout/>}>
              <Route element={<RequireAuth allowedRoles={[ROLES.laborant]}/>}>
                <Route path = "laborant" element={<Laborant/>}/>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin]}/>}>
                <Route path = "admin" element={<Admin/>}/>
              </Route>
            </Route>
            {/* catch all */}
            <Route path='detail' element={<ReportDetail/>}/>
            <Route path='error' element={<ErrorPage/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
