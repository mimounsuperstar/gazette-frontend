import React, {useEffect, useState} from 'react';
import {PopupContent, PopupExitButton, PopupWrapper} from "../styled/Popup.styled";
import {
    AdminButton,
    AdminH1,
    AdminInputIcon,
    AdminListInput,
    AdminTextInput,
    AdminTextInputWrapper,
    ErrorContainer,
    GoodContainer
} from "../styled/Common.styled";
import {getReportersList} from "../api/userApiCalls";
import {tags} from "../helpers/vars";
import {addArticle} from "../api/contentApiCall";

export const NewTaskPopup = React.forwardRef((props, ref) => {
    function resetPassword(e) {
        e.preventDefault()
    }

    function forgotDisppear() {
        ref.current.style.display = "none"
    }

    const [reporters, setReporters] = useState([{
        "id": 0,
        "username": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "groups": [0]
    }]);

    useEffect(() => {
        getReportersList().then(resp => {
            setReporters(resp)
        })
    }, []);

    async function addTask(e) {
        e.preventDefault()
        const reporter1 = parseInt(document.querySelector("#redactor1").value)
        let reporter2 = parseInt(document.querySelector("#redactor2").value)
        const marker = parseInt(document.querySelector("#marker").value)
        const tag = document.querySelector("#tag").value
        const title = document.querySelector("#title").value
        console.log(reporter1)
        const goodWrapper = document.querySelector("#good-container-1")
        const errorWrapper = document.querySelector("#error-container-1")

        if (reporter1 == "FORDBIDDEN" || marker == "FORDBIDDEN" || tag == "FORDBIDDEN" || title == "") {
            goodWrapper.style.display = "none"
            errorWrapper.style.display = "block"
            errorWrapper.innerText = "Des parties du formulaire sont manquantes."
        } else {
            if (reporter2 == "BLANK") {
                reporter2 = 0
            }
            const resp = await addArticle(reporter1, reporter2, tag, title, marker, parseInt(props.edition))
            console.log(resp)
            if (resp) {
                errorWrapper.style.display = "none"
                goodWrapper.style.display = "block"
                goodWrapper.innerText = "Article crée avec succès."
            } else {
                goodWrapper.style.display = "none"
                errorWrapper.style.display = "block"
                errorWrapper.innerText = "Erreur interne."
            }
        }
    }


    return (
        <PopupWrapper shown={props.shown} ref={ref}>
            <PopupContent big={true}>
                <PopupExitButton onClick={forgotDisppear}><i className="bi bi-x-lg"></i></PopupExitButton>
                <AdminH1 centered={true} popup={true}>Nouvelle tâche</AdminH1>
                <AdminTextInputWrapper popup={true}>
                    <AdminListInput id={"redactor1"}>
                        <option value={"FORDBIDDEN"}>-- Sélectionnez un rédacteur --</option>
                        {reporters.map(reporter => <option key={reporter.id}
                                                           value={reporter.id}>{reporter.first_name} {reporter.last_name}</option>)}
                    </AdminListInput>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminListInput id={"redactor2"}>
                        <option value={"BLANK"}>-- Aucun second rédacteur --</option>
                        {reporters.map(reporter => <option key={reporter.id}
                                                           value={reporter.id}>{reporter.first_name} {reporter.last_name}</option>)}
                    </AdminListInput>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminListInput id={"tag"}>
                        <option value={"FORDBIDDEN"}>-- Sélectionnez une rubrique --</option>
                        {tags.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
                    </AdminListInput>
                    <AdminInputIcon className="bi bi-tag-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminListInput id={"marker"}>
                        <option value={"FORDBIDDEN"}>-- Sélectionnez un correcteur --</option>
                        {reporters.map(reporter => reporter.groups.includes(5) && <option key={reporter.id}
                                                                                          value={reporter.id}>{reporter.first_name} {reporter.last_name}</option>)}
                    </AdminListInput>
                    <AdminInputIcon className="bi bi-person-fill"/>
                </AdminTextInputWrapper>
                <AdminTextInputWrapper popup={true}>
                    <AdminTextInput id={"title"} type={"text"} placeholder={"Titre temporaire de l'article"}/>
                    <AdminInputIcon className="bi bi-fonts"/>
                </AdminTextInputWrapper>
                <ErrorContainer mrgd={true} id={"error-container-1"}/>
                <GoodContainer mrgd={true} id={"good-container-1"}/>
                <AdminButton popup={true} onClick={addTask}>
                    Valider
                </AdminButton>
            </PopupContent>
        </PopupWrapper>
    );
})
