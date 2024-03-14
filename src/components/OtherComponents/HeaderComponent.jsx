import React from "react";
import LogoutButton from "../OtherComponents/LogoutButton.jsx";
import { MenuComponent } from "./MenuComponent.jsx";

export default function HeaderComponent() {
    return (
        <div className="header">
            <h1>
                <MenuComponent /> <LogoutButton />
            </h1>
        </div>
    );
}
