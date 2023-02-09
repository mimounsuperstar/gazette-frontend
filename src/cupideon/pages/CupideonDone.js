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




function CupideonDone(){

    const form = JSON.parse(sessionStorage.getItem("answers"))
    if(form == null || form.mail == ""){

    } else {
        window.location.replace('https://lagazettedeleon.social/cupideon/')
    }

    axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+sessionStorage.getItem("token")).then(response => {
        axios.get(apiURL + "cupideon/user/check/" + response.data.email).then(rep => {
            if (rep.data.registered == false) {
                window.location.replace('https://lagazettedeleon.social/cupideon/')
            }
        })
    })

    return(
        <CupideonFormWrapper>
            <CupideonFormTitleCrown>
                <CupideonFormTitleCrownFlower src={LeftRose}/>
                <CupideonFormTitleCrownFlower src={CenterRose}/>
                <CupideonFormTitleCrownFlower src={RightRose}/>
            </CupideonFormTitleCrown>
            <CupideonFormTitle>Rendez-vous le 14 février!</CupideonFormTitle>
        </CupideonFormWrapper>
    )
}

export default CupideonDone;