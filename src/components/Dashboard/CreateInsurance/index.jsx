import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../utils/context";

function CreateInsurance() {
    const location = useLocation();
    const roles = location.state.roles;
    const { allowedRoles } = useContext(AppContext);

    console.log("component allowed users", roles);
    console.log("user roles", allowedRoles);

    return(
        <div>
            <h1>Create Insurance</h1>
        </div>
    );
};

export default CreateInsurance;
