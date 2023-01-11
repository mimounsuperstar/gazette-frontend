import React, {useEffect, useRef, useState} from 'react';
import {
    DashboardContent,
    DashboardWrapper,
    EditionDetails,
    EditionMore,
    EditionQueue,
    EditionStatus,
    EditionTitle,
    ManagingArticlesContainer,
    ManagingEditionWrapper
} from "../../styled/Dashboard.styled";
import DashboardNavigation from "../../components/DashboardNavigation";
import {AdminButton, AdminH1, AdminH2, ErrorContainer, GoodContainer} from "../../styled/Common.styled";
import {NewTaskPopup} from "../../components/NewTaskPopup";
import {useParams} from "react-router-dom";
import {listArticles, publishEdition} from "../../api/contentApiCall";

function EditionManager__chief() {
    const newTaskPopupRef = useRef()

    function newTaskAppear() {
        newTaskPopupRef.current.style.display = "flex"
    }

    const {id} = useParams()
    const [articles, setArticles] = useState({
        "title": "",
        "status": "",
        "articles": [
            {
                "id": 0,
                "title": "",
                "status": "",
                "label": "",
                "redactor_1": "",
                "redactor_2": "",
                "full_names": "",
                "corrector": "",
                "content": "",
                "edition": 0

            }
        ]
    });
    useEffect(() => {
        listArticles(id).then(resp => setArticles(resp))
    }, []);

    async function handlePublish() {
        const response = await publishEdition(id)
        if (response) {
            document.querySelector("#error-container").style.display = "none"
            const goodWrapper = document.querySelector("#good-container")
            goodWrapper.style.display = "block"
            goodWrapper.innerText = "Édition publiée."
            document.querySelector("#publish-button").style.display = "none"
        } else {
            document.querySelector("#good-container").style.display = "none"
            const errorWrapper = document.querySelector("#error-container")
            errorWrapper.style.display = "block"
            errorWrapper.innerText = "Erreur. Veuillez réessayer."
        }
    }

    return (
        <DashboardWrapper>
            <NewTaskPopup ref={newTaskPopupRef} edition={id} shown={false}/>
            <DashboardNavigation active={"home"}/>
            <DashboardContent>
                <AdminH1>{articles.title}</AdminH1>
                <AdminH2>Gestion</AdminH2>
                <ManagingEditionWrapper>
                    <AdminButton onClick={newTaskAppear}>Attribuer une nouvelle tâche</AdminButton>
                    {articles.status == "published" ? "" :
                        <AdminButton id={"publish-button"} onClick={handlePublish}>Publier</AdminButton>}
                </ManagingEditionWrapper>
                <ErrorContainer mrgd={true} id={"error-container"}/>
                <GoodContainer mrgd={true} id={"good-container"}/>
                <AdminH2>Avancement</AdminH2>
                <ManagingArticlesContainer>
                    {articles.articles.map(article => {
                        return (
                            <EditionDetails editor={true} key={article.id}>
                                <EditionTitle>{article.title}</EditionTitle>
                                <EditionStatus>
                                    {article.status == "done" && <i className="bi bi-check-circle-fill"> </i>}
                                    {article.status == "correction" && <i className="bi bi-clock-fill"> </i>}
                                    {article.status == "redaction" && <i className="bi bi-pencil-fill"> </i>}

                                    {article.status == "done" && "Complété"}
                                    {article.status == "correction" && "En cours de correction"}
                                    {article.status == "redaction" && "En cours de rédaction"}
                                </EditionStatus>
                                <EditionQueue>par {article.full_names[0]} {article.full_names[1] && "et " + article.full_names[1]}</EditionQueue>
                                <EditionMore href={"/admin/editor/" + article.id}>En voir +</EditionMore>
                            </EditionDetails>
                        )
                    })}
                </ManagingArticlesContainer>
            </DashboardContent>
        </DashboardWrapper>
    );
}

export default EditionManager__chief;