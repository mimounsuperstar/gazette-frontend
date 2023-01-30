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




function CupideonClasse(){

    axios.get("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+sessionStorage.getItem("token")).then(response => {
        axios.get(apiURL + "cupideon/user/check/" + response.data.email).then(rep => {
            if (rep.data.registered == true) {
                window.location.replace('http://localhost:3000/cupideon/done')
            }
        })
    })

    const form = JSON.parse(sessionStorage.getItem("answers"))
    if(form == null || form.gender == ""){
        window.location.replace('http://localhost:3000/cupideon/gender')
    }

    const next = () => {
        const desktop = document.getElementById("answers-desktop").value
        const mobile = document.getElementById("answers-mobile").value
        if(mobile != "undefined" || desktop != "undefined" ){
            let answer = mobile != "undefined" ? mobile : desktop
            let storage = sessionStorage.getItem("answers")
            storage = JSON.parse(storage)
            storage.classe = answer
            sessionStorage.setItem("answers", JSON.stringify(storage))
            window.location.replace('http://localhost:3000/cupideon/question/1');
        }
    }
    return(
        <CupideonFormWrapper>
            <CupideonFormTitleCrown>
                <CupideonFormTitleCrownFlower src={LeftRose}/>
                <CupideonFormTitleCrownFlower src={CenterRose}/>
                <CupideonFormTitleCrownFlower src={RightRose}/>
            </CupideonFormTitleCrown>
            <CupideonFormTitle>Quelle est votre classe?</CupideonFormTitle>
            <CupideonFormInputContainer>
                <CupideonFormHand src={LeftHand}/>
                <CupideonFormInputWrapperDesktop>
                    <CupideonFormTxtWrapper src={InputBackground}/>
                    <CupideonFormInput id={"answers-desktop"}>
                        <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                        <option value="undefined_T" disabled>- Terminales -</option>
                        <option value="T1">Terminale 1</option>
                        <option value="T2">Terminale 2</option>
                        <option value="T3">Terminale 3</option>
                        <option value="T4">Terminale 4</option>
                        <option value="T5">Terminale 5</option>
                        <option value="T6">Terminale 6</option>
                        <option value="T7">Terminale 7</option>
                        <option value="TSTMG1">Terminale STMG 1</option>
                        <option value="TSTMG2">Terminale STMG 2</option>
                        <option value="undefined_P" disabled>- Premières -</option>
                        <option value="P1">Première 1</option>
                        <option value="P2">Première 2</option>
                        <option value="P3">Première 3</option>
                        <option value="P4">Première 4</option>
                        <option value="P5">Première 5</option>
                        <option value="P6">Première 6</option>
                        <option value="P7">Première 7</option>
                        <option value="P8">Première 8</option>
                        <option value="P9">Première 9</option>
                        <option value="PSTMG1">Première STMG 1</option>
                        <option value="PSTMG2">Première STMG 2</option>
                        <option value="undefined_S" disabled>- Secondes -</option>
                        <option value="S1">Seconde 1</option>
                        <option value="S2">Seconde 2</option>
                        <option value="S3">Seconde 3</option>
                        <option value="S4">Seconde 4</option>
                        <option value="S5">Seconde 5</option>
                        <option value="S6">Seconde 6</option>
                        <option value="S7">Seconde 7</option>
                        <option value="S8">Seconde 8</option>
                        <option value="S9">Seconde 9</option>
                    </CupideonFormInput>
                </CupideonFormInputWrapperDesktop>
                <CupideonLetterDecorationMobile src={LetterDecoMobile}/>
                <CupideonFormHand src={RightHand}/>
            </CupideonFormInputContainer>
            <CupideonFormInputWrapperMobile>
                <CupideonFormTxtWrapper src={InputBackground}/>
                <CupideonFormInput id={"answers-mobile"}>
                    <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                    <option value="undefined_T" disabled>- Terminales -</option>
                    <option value="T1">Terminale 1</option>
                    <option value="T2">Terminale 2</option>
                    <option value="T3">Terminale 3</option>
                    <option value="T4">Terminale 4</option>
                    <option value="T5">Terminale 5</option>
                    <option value="T6">Terminale 6</option>
                    <option value="T7">Terminale 7</option>
                    <option value="TSTMG1">Terminale STMG 1</option>
                    <option value="TSTMG2">Terminale STMG 2</option>
                    <option value="undefined_P" disabled>- Premières -</option>
                    <option value="P1">Première 1</option>
                    <option value="P2">Première 2</option>
                    <option value="P3">Première 3</option>
                    <option value="P4">Première 4</option>
                    <option value="P5">Première 5</option>
                    <option value="P6">Première 6</option>
                    <option value="P7">Première 7</option>
                    <option value="P8">Première 8</option>
                    <option value="P9">Première 9</option>
                    <option value="PSTMG1">Première STMG 1</option>
                    <option value="PSTMG2">Première STMG 2</option>
                    <option value="undefined_S" disabled>- Secondes -</option>
                    <option value="S1">Seconde 1</option>
                    <option value="S2">Seconde 2</option>
                    <option value="S3">Seconde 3</option>
                    <option value="S4">Seconde 4</option>
                    <option value="S5">Seconde 5</option>
                    <option value="S6">Seconde 6</option>
                    <option value="S7">Seconde 7</option>
                    <option value="S8">Seconde 8</option>
                    <option value="S9">Seconde 9</option>
                </CupideonFormInput>
            </CupideonFormInputWrapperMobile>
            <Submit onClick={next}>Continuer</Submit>
        </CupideonFormWrapper>
    )
}

export default CupideonClasse