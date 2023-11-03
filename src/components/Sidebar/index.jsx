import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/context";

function Sidebar() {
    const { allowedRoles } = useContext(AppContext);

    const sidebarLinks = [
        {
            to: '/dashboard/home',
            text: "Home",
            allowedUsers: ["admin", "particulier"]
        },
        {
            to: '/dashboard/create_insurance',
            text: "Create insurance",
            allowedUsers: ["particulier"]
        },
        {
            to: '/dashboard/get_insurance',
            text: "Get my insurances",
            allowedUsers: ["particulier"]
        },
        {
            to: '/dashboard/create_user',
            text: "Create user",
            allowedUsers: ["admin"]
        },
        {
            to: '/dashboard/settings',
            text: "Settings",
            allowedUsers: ["admin", "particulier"]
        }
    ];

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            height: 400,
            border: "solid black 2px",
            gap: 30
        }}>
            <h1 style={{
                marginBottom: 40
            }} >Sidebar</h1>

            {sidebarLinks.map((link, index) => {
                if (allowedRoles.some((role) => link.allowedUsers.includes(role))) {
                    return (
                        <Link
                            key={`${index}-${link.to}`}
                            to={link.to}
                            state={{roles: link.allowedUsers}}
                        >
                            {link.text}
                        </Link>
                    );
                }

                return null;
            })}
        </div>
    );
}

export default Sidebar;
