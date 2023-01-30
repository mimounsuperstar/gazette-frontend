import {
    CupideonHomeLogo, CupideonHomeSubTitle, CupideonHomeText,
    CupideonHomeTitle,
    CupideonHomeWrapper,
    CupideonLogoWrapper, CupideonStartButton, CupideonStartButtonImage,
    LoveTitle
} from "../styled/CupideonHome.styled";
import PressLogo from "../../admin/assets/logo.svg";
import StartLetter from "../assets/start.png"
import {useGoogleLogin} from "@react-oauth/google";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import {checkContestant} from "../../admin/api/cupideon";
import {apiURL} from "../../admin/api/api";

function CupideonHome(){
        const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+tokenResponse.access_token).then(response => {
                axios.get(apiURL + "cupideon/user/check/" + response.data.email).then(rep => {
                  if(rep.data.registered == false){
                      sessionStorage.setItem("token", tokenResponse.access_token)
                      sessionStorage.setItem("answers", `
                {
                    "gender": "",
                    "classe": "",
                    "first_name": "${response.data.given_name}",
                    "last_name": "${response.data.family_name}",
                    "mail": "${response.data.email}",
                    "answers": ["","","","","","","","","","","","","","","","","","","","","","",""]
                }
            `)
                      window.location.replace('https://lagazettedeleon.social/cupideon/gender')
                  } else {
                      window.location.replace('https://lagazettedeleon.social/cupideon/done')
                  }
              })
            })
        },
    });

    return(
        <CupideonHomeWrapper>
            <CupideonHomeText>
                <CupideonHomeTitle>Cupidéon</CupideonHomeTitle>
                <CupideonHomeSubTitle>Répondez à 25 questions, Cupidon trouve votre âme sœur et recevez une lettre avec son nom le jour de la Saint-Valentin !</CupideonHomeSubTitle>
                <CupideonStartButton onClick={() => login()}>
                    <CupideonStartButtonImage src={StartLetter}/>
                </CupideonStartButton>
            </CupideonHomeText>
        </CupideonHomeWrapper>
    )
}

export default CupideonHome