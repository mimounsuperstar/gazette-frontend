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
import {addEdition} from "../api/contentApiCall";

export const NewEditionPopup = React.forwardRef((props, ref) => {
    async function resetPassword(e) {
        e.preventDefault()
        const title = document.querySelector("#title")
        const response = await addEdition(title.value)
        const goodWrapper = document.querySelector("#good-container-1")
        const errorWrapper = document.querySelector("#error-container-1")
        if (response) {
            document.querySelector("#error-container-1").style.display = "none"
            goodWrapper.style.display = "block"
            goodWrapper.innerText = "Édition créee. Vous pouvez désormais attribuer des tâches."
        } else {
            document.querySelector("#good-container-1").style.display = "none"
            errorWrapper.style.display = "block"
            errorWrapper.innerText = "Il y a eu une erreur. Veuillez réessayer."
        }
    }

    function forgotDisppear() {
        ref.current.style.display = "none"
    }

    return (
        <PopupWrapper shown={props.shown} ref={ref}>
            <PopupContent>
                <PopupExitButton onClick={forgotDisppear}><i className="bi bi-x-lg"></i></PopupExitButton>
                <AdminH1 centered={true} popup={true}>Nouvelle édition</AdminH1>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"title"} type={"text"} placeholder={"Titre de l'édition"}/>
                    <AdminInputIcon className="bi bi-fonts"/>
                </AdminTextInputWrapper>
                <ErrorContainer mrgd={true} id={"error-container-1"}/>
                <GoodContainer mrgd={true} id={"good-container-1"}/>
                <AdminButton popup={true} onClick={resetPassword}>
                    Valider
                </AdminButton>
            </PopupContent>
        </PopupWrapper>
    );
})
