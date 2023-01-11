import styled from "styled-components";

export const AdminH1 = styled.h1`
  font-family: Raleway;
  font-weight: bold;
  font-size: 2.54em;
  margin: 0;
  margin-top: ${props => props.popup ? "4rem" : "0"};
  margin-bottom: ${props => props.popup ? "3.3rem" : "0"};
  padding: 0;
  text-align: ${props => props.centered ? "center" : "left"};
`

export const AdminH2 = styled.h2`
  font-family: Raleway;
  font-weight: bold;
  font-size: 1.95em;
  margin: 1.25rem 0;
  padding: 0;
  text-align: ${props => props.centered ? "center" : "left"};
`

export const AdminP = styled.p` 
  font-family: Raleway;
  font-weight: normal;
  font-size: 1em;
  text-align: justify;
  margin: 2.5rem 0;
`

export const AdminTextInputWrapper = styled.div`
  display: flex;
  background: #F4F5F5;
  border: 1px solid #707070;
  border-radius: 20px;
  height: 3.5rem;
  margin-top: 1.2rem;
`

export const AdminTextInput = styled.input`
  box-sizing: border-box;
  padding: 1.66rem 1.37rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: Raleway;
  font-weight: normal;
  color: #707070;
  font-size: 1.10em;
  width: calc(100% - 3rem);
`

export const AdminListInput = styled.select`
  box-sizing: border-box;
  padding: 0 1.37rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: Raleway;
  font-weight: normal;
  color: #707070;
  font-size: 1.10em;
  width: calc(100% - 3rem);
  height: 100%;
`

export const AdminInputIcon = styled.i`
  font-size: 2em;
  align-self: center;
`

export const AdminButton = styled.button`
  width: ${props => props.popup ? "calc(100% - 7.75rem)" : "100%"};
  border: none;
  border-radius: 20px;
  height: 3.5rem;
  margin-top: 1.2rem;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1.10em;
  color: white;
  background: #365DB6;
  transition: all .5s;
  position: ${props => props.popup ? "absolute" : "static"};
  bottom: ${props => props.popup ? "3.75rem" : "auto"};
  &:hover {
    background: #5f80ce;
  }
`

export const ScrollButton = styled.a`
  margin-left: 10px;
  transition: all .5s;

  &:hover {
    color: #333131;
  }
`

export const ErrorContainer = styled.div`
  width: 100%;
  background: #fc6262;
  border-radius: 20px;
  border: 1.5px solid #831a1a;
  display: none;
  padding: 1rem .8rem;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1em;
  color: #831a1a;
  box-sizing: border-box;
  text-align: center;
  ${props => props.mrgd ? "margin-top: 1rem;" : ""}
`

export const GoodContainer = styled.div`
  width: 100%;
  background: #83fc62;
  border-radius: 20px;
  border: 1.5px solid #1a832b;
  display: none;
  padding: 1rem .8rem;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1em;
  color: #1a832b;
  box-sizing: border-box;
  text-align: center;
  ${props => props.mrgd ? "margin-top: 1rem;" : ""}
`