import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`

export const HeroLoginWrapper = styled.div`
  background: #365DB6;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroImageComp = styled.img`
  height: 60%;
`

export const LoginFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginForm = styled.form`

`

export const LogoLogin = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  width: 30vw;
`

export const LoginForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1em;
  color: #365DB6;
  margin-top: .5rem;
  margin-bottom: 1rem;
  transition: all .5s;
  &:hover
  {
    color: #5f80ce;
  }
`
