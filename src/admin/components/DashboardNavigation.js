import React from 'react';
import {
        DashboardLogo,
        DashboardNavigationWrapper,
        LogOutButton,
        LogOutItem,
        NavigationButton,
        NavigationList,
        NavigationListItem
} from "../styled/Dashboard.styled";
import PressLogo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom";

function DashboardNavigation(props) {
    const navigate = useNavigate()

    function disconnect() {
        sessionStorage.removeItem("req_token")
        navigate("/admin")
    }

    return (
        <DashboardNavigationWrapper>
            <DashboardLogo src={PressLogo}/>
            <NavigationList>
                <NavigationListItem><NavigationButton href={"/admin/dashboard"}
                                                      active={props.active == "home" ? true : false}> <i
                    className="bi bi-pencil-fill"></i> Gérer les publications</NavigationButton></NavigationListItem>
                {!props.basic && <NavigationListItem><NavigationButton href={"/admin/manage"}
                                                                       active={props.active == "team" ? true : false}>
                    <i className="bi bi-people-fill"></i> Gérer l'équipe</NavigationButton></NavigationListItem>}
                <LogOutItem><LogOutButton onClick={disconnect}> <i className="bi bi-door-open-fill"></i> Se déconnecter</LogOutButton></LogOutItem>
            </NavigationList>
        </DashboardNavigationWrapper>
    );
}

export default DashboardNavigation;