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
import {useParams} from "react-router-dom";
import {changePassword} from "../api/passwordApiCall";

export const ForgotPasswordValidationPopup = React.forwardRef((props, ref) => {
    const {token} = useParams()

    async function resetPassword(e) {
        e.preventDefault()
        const pass1 = document.querySelector("#pass-1")
        const pass2 = document.querySelector("#pass-2")
        const goodWrapper = document.querySelector("#good-container-1")
        const errorWrapper = document.querySelector("#error-container-1")
        if (pass1.value === pass2.value) {
            const request = await changePassword(token, pass1.value)

            if (request) {
                document.querySelector("#error-container-1").style.display = "none"
                goodWrapper.style.display = "block"
                goodWrapper.innerText = "Mot de passe changé avec succès"
            } else {
                document.querySelector("#good-container-1").style.display = "none"
                errorWrapper.style.display = "block"
                errorWrapper.innerText = "Votre lien n'est pas reconnu. Veuillez vérifier."
            }
        } else {
            document.querySelector("#good-container-1").style.display = "none"
            errorWrapper.style.display = "block"
            errorWrapper.innerText = "Vos mots de passe ne correspondent pas. Veuillez vérifier."
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
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"pass-1"} type={"password"} placeholder={"Nouveau mot de passe"}/>
                    <AdminInputIcon className="bi bi-key-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"pass-2"} type={"password"}
                                    placeholder={"Vérification du nouveau mot de passe"}/>
                    <AdminInputIcon className="bi bi-key-fill"/>
                </AdminTextInputWrapper>
                <ErrorContainer mrgd={true} id={"error-container-1"}/>
                <GoodContainer mrgd={true} id={"good-container-1"}/>
                <AdminButton popup={true} onClick={resetPassword}>
                    Réinitialiser votre mot de passe
                </AdminButton>
            </PopupContent>
        </PopupWrapper>
    );
})
