import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Dashboard() {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 200
        }}>
            <Sidebar />
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 800,
                height: 400,
                border: "solid black 2px",
            }}>
                <Outlet />
            </div>
        </div>
    )
};

export default Dashboard;
