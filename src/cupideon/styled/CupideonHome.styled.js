import styled, {createGlobalStyle} from "styled-components";
import GardenDesktop from "../assets/garden_desktop.jpg"
import GardenMobile from "../assets/garden_mobile.jpg"

export const CupideonHomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${GardenDesktop});
  background-size: cover;
  background-position-x: right;
  position: relative;
  overflow-y: scroll;
  @media (max-width: 830px) {
    background-position-x: right -118px;
  }
  @media (max-width: 450px) {
    background: url(${GardenMobile});
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
  }
`

export const CupideonHomeText = styled.div`
  position: absolute;
  right: 14rem;
  top: calc(50% - 6rem);
  width: 30rem;
  @media (max-width: 830px) {
    right: 6.5rem;
  }
  @media (max-width: 450px) {
    right: 0;
    top: 150px;
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
  }
`


export const CupideonHomeTitle = styled.h1`
  font-family: Wankstaberg Battles;
  font-size: 5rem;
  color: #2C1B14;
`

export const CupideonHomeSubTitle = styled.h3`
  font-family: 'Just Another Hand', cursive;
  font-size: 2rem;
  color: #2C1B14;
`

export const CupideonStartButton = styled.button`
  height: 75px;
  background: none;
  border: none;
  align-self: center;
  transform: translateX(calc(50% + 85px));
  @media (max-width: 450px) {
    transform: translateX(calc(50vw - 100px));
  }
`

export const CupideonStartButtonImage = styled.img`
  height: 75px;
`

