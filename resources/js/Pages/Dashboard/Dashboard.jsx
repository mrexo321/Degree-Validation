import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar";
import React from "react";

export default function Dashboard(props) {
    console.log("dashboard", props);
    return (
        <div className="flex justify-between">
            <div>
                <DashboardSidebar />
            </div>
        </div>
    );
}
