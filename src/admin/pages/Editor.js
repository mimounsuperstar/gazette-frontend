import {Navigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getPermission, getRank} from "../helpers/redirection";
import Editor__chief from "./chief/Editor__chief";
import Editor__redactor from "./redactors/Editor__redactor";

export function Editor() {

    const [rank, setRank] = useState("");
    const [isRedactor, setIsRedactor] = useState(20);
    const {id} = useParams()

    useEffect(() => {
        getRank()
            .then(resp => {
                setRank(resp)
                if (resp == "redactor") {
                    getPermission(id)
                        .then(resp => {
                            setIsRedactor(resp.data.length)
                        })
                }
            })

    }, []);

    return (
        <>
            {rank == "arriviste" && <Navigate to={"/admin"}/>}
            {rank == "admin" && <Editor__chief/>}
            {rank == "redactor" && isRedactor == 1 && <Editor__redactor/>}
            {rank == "redactor" && isRedactor == 0 && <Navigate to={"/admin/dashboard"}/>}

        </>
    )

}
