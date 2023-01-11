import React, {useEffect, useRef, useState} from 'react';
import {
    DashboardContent,
    DashboardWrapper,
    EditionDetails,
    EditionMore,
    EditionStatus,
    EditionTitle,
    ManagingRedactorsContainer
} from "../../styled/Dashboard.styled";
import DashboardNavigation from "../../components/DashboardNavigation";
import {AdminButton, AdminH1, AdminH2} from "../../styled/Common.styled";
import {NewRedactorPopup} from "../../components/NewRedactorPopup";
import {deleteUserApi, getReportersList} from "../../api/userApiCalls";

function EditionManager() {
    const newRedactorPopupRef = useRef()

    async function deleteUser(id) {
        const response = await deleteUserApi(id)
        if (response) {
            document.getElementById(id).remove()
        }
    }

    function newRedactorAppear() {
        newRedactorPopupRef.current.style.display = "flex"
    }

    const [users, setUsers] = useState([
        {
            "id": 0,
            "username": "",
            "email": "",
            "first_name": "",
            "last_name": "",
            "groups": [0]
        }]);

    useEffect(() => {
        getReportersList().then(resp => {
            setUsers(resp)
        })
    }, []);

    return (
        <DashboardWrapper>
            <NewRedactorPopup ref={newRedactorPopupRef} shown={false}/>
            <DashboardNavigation active={"team"}/>
            <DashboardContent>
                <AdminH1>Bonjour, Mimoun.</AdminH1>
                <AdminH2>Gestion</AdminH2>
                <AdminButton onClick={newRedactorAppear}>Ajouter un nouveau rédacteur</AdminButton>
                <AdminH2>Équipe actuelle</AdminH2>
                <ManagingRedactorsContainer>
                    {users.map(user => {
                        return (
                            <EditionDetails redactor={true} key={user.id} id={user.id}>
                                <EditionTitle>{user.first_name} {user.last_name}</EditionTitle>
                                <EditionStatus><i className="bi bi-pencil-fill"> </i>
                                    {user.groups.includes(3) && "Rédacteur en chef"}
                                    {user.groups.includes(4) && "Rédacteur"}
                                    {user.groups.includes(5) && "Correcteur"}</EditionStatus>
                                <EditionMore onClick={(e) => {
                                    e.preventDefault()
                                    deleteUser(user.id)
                                }}>Supprimer</EditionMore>
                            </EditionDetails>
                        )
                    })}
                </ManagingRedactorsContainer>
            </DashboardContent>
        </DashboardWrapper>
    );
}

export default EditionManager;