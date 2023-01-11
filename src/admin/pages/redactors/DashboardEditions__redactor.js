import React, {useEffect, useRef, useState} from 'react';
import {
    DashboardContent,
    DashboardWrapper,
    EditionDetails,
    EditionMore,
    EditionQueue,
    EditionsContainer,
    EditionStatus,
    EditionsWrapper,
    EditionTitle
} from "../../styled/Dashboard.styled";
import DashboardNavigation from "../../components/DashboardNavigation";
import {AdminH1, AdminH2} from "../../styled/Common.styled";
import {NewEditionPopup} from "../../components/NewEditionPopup";
import {getUserData} from "../../api/userApiCalls";
import {listEditions} from "../../api/contentApiCall";

function DashboardEditions__chief() {

    const [userdata, setUserdata] = useState(
        {
            "detail": "",
            "groups": [],
            "user": {
                "username": "",
                "email": "",
                "first_name": "",
                "last_name": "",
                "groups": []
            }
        }
    );
    const [editionsdata, setEditionsdata] = useState([]);

    useEffect(() => {
        getUserData().then(resp => setUserdata(resp))
        listEditions().then(resp => setEditionsdata(resp))
    }, []);


    const newEditionPopupRef = useRef()

    return (
        <DashboardWrapper>
            <NewEditionPopup ref={newEditionPopupRef} shown={false}/>
            <DashboardNavigation basic={true} active={"home"}/>
            <DashboardContent>
                <AdminH1>Bonjour, {userdata.user.first_name}.</AdminH1>
                <AdminH2>Dernières éditions du journal</AdminH2>
                <EditionsWrapper>
                    <EditionsContainer>
                        {
                            editionsdata.map(edition => {
                                return (
                                    <EditionDetails key={edition.id}>
                                        <EditionTitle>{edition.title}</EditionTitle>
                                        <EditionStatus>
                                            <i className={edition.status == "published" ? "bi bi-check-circle" : "bi bi-clock"}> </i>
                                            {edition.status == "published" ? "Publié" : "En cours de rédaction"}
                                        </EditionStatus>
                                        <EditionQueue>{edition.redaction} articles en attente, {edition.correction} en
                                            correction, {edition.done} terminé</EditionQueue>
                                        <EditionMore href={"/admin/editions/" + edition.id}>En voir +</EditionMore>
                                    </EditionDetails>
                                )
                            })
                        }
                    </EditionsContainer>
                </EditionsWrapper>
            </DashboardContent>
        </DashboardWrapper>
    );
}

export default DashboardEditions__chief;