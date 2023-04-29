import axios from 'axios';

const API_URL = "http://localhost:8080";

const register = (values) => {
    console.log(values)
    return axios.post(API_URL + "/api/v1/laboratories/save",values,{headers:{'Content-Type': 'application/json' },});
  };

  const login = (values) => {
    return axios
      .post(API_URL + "/api/v1/laboratories/login",values,{headers: { 'Content-Type': 'application/json' },})
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("role",response.data.rol);
        }else{}
        return response.data;
      });
  };

  const logout = () => {
    localStorage.clear();};


      const AuthService = {
        register,
        login,
        logout
      }

      export default AuthService;