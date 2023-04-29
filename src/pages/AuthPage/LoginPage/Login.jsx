import FormInput from '../../../components/FormInput'
import AuthService from '../../../services/auth.service';
import {useState} from 'react';
import { useNavigate,useLocation} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import "./Login.css";



const Login =() => {

  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home/laborant";



  const [user, setUser] = useState({
    laborant_id: "",
    password: ""
  });

  // const [successful, setSuccessful] = useState(false);
  // const [message, setErrMsg] = useState("");

  const inputs =[
    {
      id: 1,
      name: "laborant_id",
      type: "text",
      placeholder: "laborant_id",
      errorMessage:
        "laborant_id should be 3-16 characters and shouldn't include any special character!",
      label: "laborant_id",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ]


  const handleSubmit = (e) => {
    // setErrMsg("");
    // setSuccessful(false);
    e.preventDefault();

    console.log("test login")

    try{
      AuthService.login(user).then( (response)=>{

        if(response.status===false){
        }else{
          const accessToken = localStorage.getItem("token");
          const role = localStorage.getItem("role")
          setAuth({accessToken,role});
          console.log("setAuth : ",setAuth)
          navigate(from,{replace:true});
        }
        console.log(response)
      })
    }catch(error){
      console.error(error);
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={user[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login