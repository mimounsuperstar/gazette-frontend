import {Navigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getRank} from "../helpers/redirection";
import TeamManager__chief from "./chief/TeamManager__chief";

export function Manage() {

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
            {rank == "admin" && <TeamManager__chief/>}
            {rank == "redactor" && <Navigate to={"/admin/dashboard"}/>}
        </>
    )

}
