import React from 'react';
import {PopupContent, PopupExitButton, PopupWrapper} from "../styled/Popup.styled";
import {
    AdminButton,
    AdminH1,
    AdminInputIcon,
    AdminTextInput,
    AdminTextInputWrapper,
    ErrorContainer,
    GoodContainer
} from "../styled/Common.styled";
import {registerUser} from "../api/userApiCalls";

export const NewRedactorPopup = React.forwardRef((props, ref) => {
    async function handleRegister(e) {
        e.preventDefault()
        const firstName = document.querySelector("#first-name").value
        const lastName = document.querySelector("#last-name").value
        const email = document.querySelector("#email").value

        const goodWrapper = document.querySelector("#good-container-1")
        const errorWrapper = document.querySelector("#error-container-1")

        const request = await registerUser(firstName, lastName, email)
        console.log(request)

        if (request) {
            errorWrapper.style.display = "none"
            goodWrapper.style.display = "block"
            goodWrapper.innerText = "Rédacteur enregistré avec succès."
        } else {
            goodWrapper.style.display = "none"
            errorWrapper.style.display = "block"
            errorWrapper.innerText = "Erreur interne. Peut être que le rédacteur existe?"
        }
    }

    function forgotDisppear() {
        ref.current.style.display = "none"
    }

    return (
        <PopupWrapper shown={props.shown} ref={ref}>
            <PopupContent medium={true}>
                <PopupExitButton onClick={forgotDisppear}><i className="bi bi-x-lg"></i></PopupExitButton>
                <AdminH1 centered={true} popup={true}>Nouveau rédacteur</AdminH1>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"last-name"} type={"text"} placeholder={"Nom de famille"}/>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"first-name"} type={"text"} placeholder={"Prénom(s)"}/>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"email"} type={"mail"} placeholder={"Adresse e-mail"}/>
                    <AdminInputIcon className="bi bi-envelope-fill"/>
                </AdminTextInputWrapper>
                <ErrorContainer mrgd={true} id={"error-container-1"}/>
                <GoodContainer mrgd={true} id={"good-container-1"}/>
                <AdminButton popup={true} onClick={handleRegister}>
                    Valider
                </AdminButton>
            </PopupContent>
        </PopupWrapper>
    );
})
