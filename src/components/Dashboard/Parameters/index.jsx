import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../utils/context";

function Settings() {
    const location = useLocation();
    const roles = location?.state?.roles;
    const { allowedRoles } = useContext(AppContext);

    console.log("component allowed users", roles);

    function designater(userRole) {
        let designation;

        if (userRole) {
            userRole.forEach((role) => {
                designation = role;
            })
        } else {
            designation = "Unknow User"
        }
        
        return designation;
    };

    return(
        <div>
            <h1>{`${designater(roles, allowedRoles)} Settings`}</h1>
        </div>
    );
};

export default Settings;
