import React from 'react';
import {PopupContent, PopupExitButton, PopupWrapper} from "../styled/Popup.styled";
import {
    AdminButton,
    AdminH1,
    AdminInputIcon,
    AdminP,
    AdminTextInput,
    AdminTextInputWrapper
} from "../styled/Common.styled";
import {sendForgotMail} from "../api/passwordApiCall";

export const ForgotPasswordFormPopup = React.forwardRef((props, ref) => {
    async function resetPasswordMail(e) {
        e.preventDefault()
        const query = document.querySelector("#mail-field")
        const request = await sendForgotMail(query.value)
        const container = document.querySelector("#mail-wrapper")
        if (request) {
            container.style.background = "#83fc62"
            container.style.borderColor = "#1a832b"
            query.style.color = "#1a832b"
        } else {
            container.style.background = "#fc6262"
            container.style.borderColor = "#831a1a"
            query.style.color = "#831a1a"
        }
    }

    function forgotDisppear() {
        ref.current.style.display = "none"
    }

    return (
        <PopupWrapper shown={props.shown} ref={ref}>
            <PopupContent>
                <PopupExitButton onClick={forgotDisppear}><i className="bi bi-x-lg"></i></PopupExitButton>
                <AdminH1 centered={true} popup={true}>Mot de passe oublié</AdminH1>
                <AdminTextInputWrapper id={"mail-wrapper"} popup={true}>
                    <AdminTextInput id={"mail-field"} type={"text"} placeholder={"Identifiant rédacteur"}/>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminP>
                    Un e-mail de réinitialisation vous sera envoyé sur l’adresse renseignée lors de votre candidature à
                    La Gazette de Léon. Veuillez vérifier votre boîte de réception ainsi que vos spams.
                </AdminP>
                <AdminButton onClick={resetPasswordMail}>
                    Réinitialiser votre mot de passe
                </AdminButton>
            </PopupContent>
        </PopupWrapper>
    );
})
