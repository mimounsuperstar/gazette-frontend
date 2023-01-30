import {
    CupideonHomeLogo, CupideonHomeSubTitle, CupideonHomeText,
    CupideonHomeTitle,
    CupideonHomeWrapper,
    CupideonLogoWrapper, CupideonStartButton, CupideonStartButtonImage,
    LoveTitle
} from "../styled/CupideonHome.styled";
import PressLogo from "../../admin/assets/logo.svg";
import StartLetter from "../assets/start.png"
import {
    CupideonFormAnswers,
    CupideonFormHand, CupideonFormInput,
    CupideonFormInputContainer, CupideonFormInputWrapperDesktop, CupideonFormInputWrapperMobile,
    CupideonFormTitle,
    CupideonFormTitleCrown,
    CupideonFormTitleCrownFlower, CupideonFormTxtWrapper,
    CupideonFormWrapper, CupideonLetterDecorationMobile, Submit
} from "../styled/CupideonForm.styled";
import RightRose from "../assets/white_rose_crown_left.png";
import LeftRose from "../assets/white_rose_crown_right.png";
import CenterRose from "../assets/roses_crown.png";
import LeftHand from "../assets/left_hand.png";
import RightHand from "../assets/right_hand.png";
import InputBackground from "../assets/form_txt.png";
import LetterDecoMobile from "../assets/letter_flowers.png";
import axios from "axios";
import {apiURL} from "../../admin/api/api";




function CupideonGender(){

    const form = JSON.parse(sessionStorage.getItem("answers"))
    if(form == null || form.mail == ""){
        window.location.replace('https://lagazettedeleon.social/cupideon/')
    }

    axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+sessionStorage.getItem("token")).then(response => {
        axios.get(apiURL + "cupideon/user/check/" + response.data.email).then(rep => {
            if (rep.data.registered == true) {
                window.location.replace('https://lagazettedeleon.social/cupideon/done')
            }
        })
    })



    const next = () => {
        const desktop = document.getElementById("answers-desktop").value
        const mobile = document.getElementById("answers-mobile").value
        if(mobile != "undefined" || desktop != "undefined" ){
            let answer = mobile != "undefined" ? mobile : desktop
            let storage = sessionStorage.getItem("answers")
            storage = JSON.parse(storage)
            storage.gender = answer
            sessionStorage.setItem("answers", JSON.stringify(storage))
            console.log(sessionStorage.getItem("answers"))
            window.location.replace('https://lagazettedeleon.social/cupideon/classe');
        }
    }
    return(
        <CupideonFormWrapper>
            <CupideonFormTitleCrown>
                <CupideonFormTitleCrownFlower src={LeftRose}/>
                <CupideonFormTitleCrownFlower src={CenterRose}/>
                <CupideonFormTitleCrownFlower src={RightRose}/>
            </CupideonFormTitleCrown>
            <CupideonFormTitle>Vous êtes?</CupideonFormTitle>
            <CupideonFormInputContainer>
                <CupideonFormHand src={LeftHand}/>
                <CupideonFormInputWrapperDesktop>
                    <CupideonFormTxtWrapper src={InputBackground}/>
                    <CupideonFormInput id={"answers-desktop"}>
                        <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                        <option value="H">Option A - Un homme</option>
                        <option value="F">Option B - Une femme</option>
                    </CupideonFormInput>
                </CupideonFormInputWrapperDesktop>
                <CupideonLetterDecorationMobile src={LetterDecoMobile}/>
                <CupideonFormHand src={RightHand}/>
            </CupideonFormInputContainer>
            <CupideonFormInputWrapperMobile>
                <CupideonFormTxtWrapper src={InputBackground}/>
                <CupideonFormInput id={"answers-mobile"}>
                    <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                    <option value="H">Option A - Un homme</option>
                    <option value="F">Option B - Une femme</option>
                </CupideonFormInput>
            </CupideonFormInputWrapperMobile>
            <Submit onClick={next}>Continuer</Submit>
        </CupideonFormWrapper>
)
}

export default CupideonGender;