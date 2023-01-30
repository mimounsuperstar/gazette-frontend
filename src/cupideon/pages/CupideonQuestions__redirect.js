import {questionsData} from "../helpers/questions";
import {useParams} from "react-router-dom";
import Error404 from "../../admin/pages/Error404";
import CupideonQuestions from "./CupideonQuestions";
import axios from "axios";
import {apiURL} from "../../admin/api/api";

function CupideonQuestions__redirect(){
    axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+sessionStorage.getItem("token")).then(response => {
        axios.get(apiURL + "cupideon/user/check/" + response.data.email).then(rep => {
            if (rep.data.registered == true) {
                window.location.replace('http://localhost:3000/cupideon/done')
            }
        })
    })
    let { id } = useParams();
    return(
        <>
            {parseInt(id)<=questionsData.length ? <CupideonQuestions question={parseInt(id)}/> : <Error404/>}
        </>
    )
}

export default CupideonQuestions__redirect;