import {
    CupideonFormAnswers,
    CupideonFormHand,
    CupideonFormInput,
    CupideonFormInputContainer,
    CupideonFormInputWrapperDesktop, CupideonFormInputWrapperMobile,
    CupideonFormTitle,
    CupideonFormTitleCrown,
    CupideonFormTitleCrownFlower,
    CupideonFormTxtWrapper,
    CupideonFormWrapper, CupideonLetterDecorationMobile, Submit
} from "../styled/CupideonForm.styled";
import LeftRose from "../assets/white_rose_crown_right.png";
import CenterRose from "../assets/roses_crown.png";
import RightRose from "../assets/white_rose_crown_left.png";
import LeftHand from "../assets/left_hand.png";
import InputBackground from "../assets/form_txt.png";
import LetterDecoMobile from "../assets/letter_flowers.png";
import RightHand from "../assets/right_hand.png";
import {questionsData} from "../helpers/questions";
import axios from "axios";
import {apiURL} from "../../admin/api/api";

function CupideonQuestions(props){
    const questionId = props.question - 1
    const form = JSON.parse(sessionStorage.getItem("answers"))
    if(form == null || form.answers[questionId-1] == ""){
        if(questionId-1<=0){
            window.location.replace('http://localhost:3000/cupideon/classe/')
        } else {
            window.location.replace('http://localhost:3000/cupideon/question/'+(questionId-1).toString())
        }
    }
    const next = () => {
        const desktop = document.getElementById("answers-desktop").value
        const mobile = document.getElementById("answers-mobile").value
        if(mobile != "undefined" || desktop != "undefined" ){
            let answer = mobile != "undefined" ? mobile : desktop
            let storage = sessionStorage.getItem("answers")
            storage = JSON.parse(storage)
            storage.answers[questionId] = answer
            sessionStorage.setItem("answers", JSON.stringify(storage))
            if(questionId != 22){
                window.location.replace('http://localhost:3000/cupideon/question/'+(questionId+2).toString());
            } else {
                let storage = sessionStorage.getItem("answers")
                storage = JSON.parse(storage)
                const data = {
                    mail: storage.mail,
                    first_name: storage.first_name,
                    last_name: storage.last_name,
                    classe: storage.classe,
                    q1: storage.answers[0],
                    q2: storage.answers[1],
                    q3: storage.answers[2],
                    q4: storage.answers[3],
                    q5: storage.answers[4],
                    q6: storage.answers[5],
                    q7: storage.answers[6],
                    q8: storage.answers[7],
                    q9: storage.answers[8],
                    q10: storage.answers[9],
                    q11: storage.answers[10],
                    q12: storage.answers[11],
                    q13: storage.answers[12],
                    q14: storage.answers[13],
                    q15: storage.answers[14],
                    q16: storage.answers[15],
                    q17: storage.answers[16],
                    q18: storage.answers[17],
                    q19: storage.answers[18],
                    q20: storage.answers[19],
                    q21: storage.answers[20],
                    q22: storage.answers[21],
                    q23: storage.answers[22]
                }
                if(storage.gender == "H"){
                    axios.post(apiURL + "cupideon/boys/add/", data).then(()=>{
                        //window.location.replace('http://localhost:3000/cupideon/done');
                    })
                } else if(storage.gender == "F"){
                    axios.post(apiURL + "cupideon/girls/add/", data).then(()=>{
                        //window.location.replace('http://localhost:3000/cupideon/done');
                    })
                }
            }
        }
    }

    return(
        <CupideonFormWrapper>
            <CupideonFormTitleCrown>
                <CupideonFormTitleCrownFlower src={LeftRose}/>
                <CupideonFormTitleCrownFlower src={CenterRose}/>
                <CupideonFormTitleCrownFlower src={RightRose}/>
            </CupideonFormTitleCrown>
            <CupideonFormTitle>{props.question.toString() + ". " + questionsData[questionId].name}</CupideonFormTitle>
            <CupideonFormInputContainer>
                <CupideonFormHand src={LeftHand}/>
                <CupideonFormInputWrapperDesktop>
                    <CupideonFormTxtWrapper src={InputBackground}/>
                    <CupideonFormInput id={"answers-desktop"}>
                        <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                        {questionsData[questionId].questions.map(question => {
                            return (
                                <>
                                    <option value={question[0]}>Option {question[0]} - {question[1]}</option>
                                </>
                            )
                        })}
                    </CupideonFormInput>
                </CupideonFormInputWrapperDesktop>
                <CupideonLetterDecorationMobile src={LetterDecoMobile}/>
                <CupideonFormHand src={RightHand}/>
            </CupideonFormInputContainer>
            <CupideonFormInputWrapperMobile>
                <CupideonFormTxtWrapper src={InputBackground}/>
                <CupideonFormInput id={"answers-mobile"}>
                    <option value="undefined" selected disabled hidden>-- CHOISIR UNE RÉPONSE --</option>
                    {questionsData[questionId].questions.map(question => {
                        return (
                            <>
                                <option value={question[0]}>Option {question[0]} - {question[1]}</option>
                            </>
                        )
                    })}
                </CupideonFormInput>
            </CupideonFormInputWrapperMobile>
            <Submit onClick={next}>Continuer</Submit>
        </CupideonFormWrapper>
        )

}

export default CupideonQuestions;