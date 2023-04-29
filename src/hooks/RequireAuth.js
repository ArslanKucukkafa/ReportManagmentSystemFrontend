import { useLocation,Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({allowedRoles}) =>{
    const {auth} = useAuth();
    const location = useLocation();

    console.log(auth.role,auth.accessToken,"<-----Hello")
    return(
            console.log("deneme Require auth",allowedRoles?.includes(auth?.role)),
            allowedRoles?.includes(auth?.role)
            ?<Outlet/>
            :auth?.accessToken
                ?<Navigate to="error" state={{from:location}} replace/>
                :<Navigate to="/login" state={{from:location}} replace/>
    );
}

export default RequireAuth