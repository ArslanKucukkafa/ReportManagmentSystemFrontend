import './App.css';
import {Route,BrowserRouter as Router, Routes ,Link as NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthLayout from "./pages/AuthPage/AuthLayout"
import Login from "./pages/AuthPage/LoginPage/Login"
import Register from "./pages/AuthPage/RegisterPage/Register"
import PrivateRoutes from "./components/PrivateRoutes"
import HomeLayout from "./pages/HomePage/HomeLayout"
import Laborant from "./pages/HomePage/LaborantPage/Laborant"
import Admin from "./pages/HomePage/AdminPage/Admin"

function App() {
  return (   
    <div className="App">
      <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>
            <Route path="/home" element={<HomeLayout/>}>
              <Route path="laborant" element={<Laborant/>}/>
            </Route>
            <Route path = "/admin" element={<Admin/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
