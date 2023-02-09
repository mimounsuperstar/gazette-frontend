import styled from "styled-components";
import FormBackground from "../assets/form.jpg";
import InputBackground from "../assets/form_txt.png";


export const CupideonFormWrapper = styled.div`
  background-image: url(${FormBackground});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const CupideonFormTitleCrown = styled.div`
  height: 15vh;
  @media (max-width: 835px) {
    height: 10vh;
  }
`

export const CupideonFormTitleCrownFlower = styled.img`
  height: 15vh;
  @media (max-width: 835px) {
    height: 10vh;
  }
`

export const CupideonFormTitle = styled.h1`
  font-family: Wankstaberg Battles;
  font-size: 3.5em;
  color: #2C1B14;
  text-align: center;
  @media (max-width: 835px) {
    font-size: 2.5em;
  }
`

export const CupideonFormInputContainer = styled.div`
  width: 100vw;
  height: 20vh;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 2fr 1fr;
`

export const CupideonFormHand = styled.img`
  width: 25vw;
`

export const CupideonFormTxtWrapper = styled.img`
  width: 30vw;
  text-align: center;
  @media (max-width: 835px) {
    width: 55vw;
  }
`

export const CupideonFormInputWrapperDesktop = styled.div`
  margin: 0;
  box-sizing: border-box;
  width: 50vw;
  text-align: center;
  position: relative;
  @media (max-width: 950px) {
    width: 30vw;
    transform: translateX(10vw);
  }
  @media (max-width: 835px) {
    display: none;
  }
`

export const CupideonFormInput = styled.select`
  margin: 0;
  font-family: 'Just Another Hand', cursive;
  font-size: 1.5em;
  box-sizing: border-box;
  position: absolute;
  left: 13vw;
  height: 90%;
  background: none;
  border: none;
  width: 25vw;
  text-align: center;
  &:focus{
    outline: none;
  }
  @media (max-width: 950px) {
    left: 2.5vw;
  }
  @media (max-width: 835px) {
    width: 55vw;
    height: 7rem;
    left: 22vw;
  }
`
export const CupideonFormAnswers = styled.h3`
  font-family: 'Just Another Hand', cursive;
  font-size: 1.75rem;
  color: #2C1B14;
  margin: 0;
`

export const CupideonLetterDecorationMobile = styled.img`
  display: none;
  @media (max-width: 835px) {
    display: block;
    width: 30vw;
    transform: translateX(3em);
  }
`

export const CupideonFormInputWrapperMobile = styled.div`
  display:none;
  @media (max-width: 835px) {
    display: block;
  }
`

export const Submit = styled.button`
  margin-top: 4rem;
  font-family: Wankstaberg Battles;
  font-size: 1.75em;
  color: #2C1B14;
`

