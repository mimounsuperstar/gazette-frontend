import React, {useEffect, useRef, useState} from 'react';
import {
    HeroImageComp,
    HeroLoginWrapper,
    LoginForgotPasswordLink,
    LoginForm,
    LoginFormWrapper,
    LoginWrapper,
    LogoLogin
} from "../styled/Login.styled";
import HeroImage from "../assets/press_login_hero.svg"
import PressLogo from "../assets/logo.svg"
import {
    AdminButton,
    AdminH1,
    AdminInputIcon,
    AdminTextInput,
    AdminTextInputWrapper,
    ErrorContainer
} from "../styled/Common.styled";
import {ForgotPasswordFormPopup} from "../components/ForgotPasswordFormPopup";
import {ForgotPasswordValidationPopup} from "../components/ForgotPasswordValidationPopup";
import {generateToken, userApiCalls} from "../api/userApiCalls";
import {getRedirectStatus} from "../helpers/redirection";
import {Navigate, useNavigate} from "react-router-dom";


function Login(props) {

    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        getRedirectStatus(false)
            .then(resp => {
                setRedirect(resp)
            })
    }, []);


    const passwordFromRef = useRef()
    const passwordValidationRef = useRef()

    function forgotAppear() {
        passwordFromRef.current.style.display = "flex"
    }


    const navigate = useNavigate()

    async function authenticate(e) {
        e.preventDefault()
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const login = await userApiCalls(username, password)
        if (login) {
            const token = await generateToken(username, password)
            sessionStorage.setItem('req_token', token.token)
            navigate("/admin/dashboard")
        } else {
            const errorWrapper = document.querySelector("#error-container")
            errorWrapper.innerText = "Votre identifiant et/ou mot de passe ne correspond pas."
            errorWrapper.style.display = "block"
        }
    }

    return (
        <LoginWrapper>
            {redirect && <Navigate to={"/admin/dashboard"}/>}
            <ForgotPasswordFormPopup ref={passwordFromRef} shown={false}/>
            <ForgotPasswordValidationPopup ref={passwordValidationRef} shown={props.password ? true : false}/>
            <HeroLoginWrapper>
                <HeroImageComp src={HeroImage}/>
            </HeroLoginWrapper>
            <LoginFormWrapper>
                <LoginForm>
                    <LogoLogin>
                        <img src={PressLogo} alt={"Logo"}/>
                    </LogoLogin>
                    <AdminH1 centered={true}>Espace rédacteur</AdminH1>
                    <AdminTextInputWrapper>
                        <AdminTextInput id="username" type={"text"} placeholder={"Identifiant rédacteur"}/>
                        <AdminInputIcon className="bi bi-person-fill"/>
                    </AdminTextInputWrapper>
                    <AdminTextInputWrapper>
                        <AdminTextInput id="password" type={"password"} placeholder={"Mot de passe"}/>
                        <AdminInputIcon className="bi bi-key-fill"/>
                    </AdminTextInputWrapper>
                    <LoginForgotPasswordLink onClick={forgotAppear}>Mot de passe oublié</LoginForgotPasswordLink>
                    <ErrorContainer id={"error-container"}></ErrorContainer>
                    <AdminButton onClick={authenticate}>
                        Identification
                    </AdminButton>
                </LoginForm>
            </LoginFormWrapper>
        </LoginWrapper>
    );
}

export default Login;