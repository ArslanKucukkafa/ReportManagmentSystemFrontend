import { useLocation,Navigate, Outlet } from "react-router-dom";
const RequireAuth = ({allowedRoles}) =>{
    const location = useLocation();

    return(
            allowedRoles?.includes(localStorage.getItem("role"))
            ?<Outlet/>
            :localStorage.getItem("accesToken")
                ?<Navigate to="error" state={{from:location}} replace/>
                :<Navigate to="/login" state={{from:location}} replace/>
    );
}

export default RequireAuth