import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../utils/context";

function CreateUser() {
    const location = useLocation();
    const roles = location?.state?.roles;
    const { allowedRoles } = useContext(AppContext);

    console.log("component allowed users", roles);
    console.log("user roles", allowedRoles);

    return(
        <div>
            <h1>Create new user</h1>
        </div>
    );
};

export default CreateUser;
