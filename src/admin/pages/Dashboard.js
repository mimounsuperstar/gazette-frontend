import {Navigate} from "react-router-dom";
import DashboardEditions__chief from "./chief/DashboardEditions__chief";
import React, {useEffect, useState} from "react";
import {getRank} from "../helpers/redirection";
import DashboardEditions__redactor from "./redactors/DashboardEditions__redactor";

export function Dashboard() {

    const [rank, setRank] = useState("");
    useEffect(() => {
        getRank()
            .then(resp => {
                setRank(resp)
            }, [])
    });

    return (
        <>
            {rank == "arriviste" && <Navigate to={"/admin"}/>}
            {rank == "admin" && <DashboardEditions__chief/>}
            {rank == "redactor" && <DashboardEditions__redactor/>}
        </>
    )

}
