import React, {useEffect, useState} from 'react';
import {
    DashboardContent,
    DashboardWrapper,
    EditionDetails,
    EditionMore,
    EditionQueue,
    EditionStatus,
    EditionTitle,
    ManagingArticlesContainer
} from "../../styled/Dashboard.styled";
import DashboardNavigation from "../../components/DashboardNavigation";
import {AdminH1, AdminH2} from "../../styled/Common.styled";
import {useParams} from "react-router-dom";
import {listTasks} from "../../api/contentApiCall";

function EditionManager__chief() {

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
        listTasks(id).then(resp => {
            setArticles(resp)
        })
    }, []);

    return (
        <DashboardWrapper>
            <DashboardNavigation basic={true} active={"home"}/>
            <DashboardContent>
                <AdminH1>{articles.title}</AdminH1>
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