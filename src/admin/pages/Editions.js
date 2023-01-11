import {Navigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getRank} from "../helpers/redirection";
import EditionManager__chief from "./chief/EditionManager__chief";
import EditionManager__redactor from "./redactors/EditionManager__redactor";

export function Editions() {

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
            {rank == "admin" && <EditionManager__chief/>}
            {rank == "redactor" && <EditionManager__redactor/>}
        </>
    )

}
