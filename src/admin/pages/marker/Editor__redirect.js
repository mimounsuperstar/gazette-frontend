import {Navigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Editor__marker from "./Editor__marker";
import {getRank} from "../../helpers/redirection";

export function Editor__redirect() {

    const [rank, setRank] = useState("non");
    useEffect(() => {
        getRank()
            .then(resp => {
                setRank(resp)
            })

    }, []);

    return (
        <>
            {rank != "marker" && rank != "non" && <Navigate to={"/admin"}/>}
            {rank == "marker" && <Editor__marker/>}

        </>
    )

}
