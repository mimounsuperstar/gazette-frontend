import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #70707040;
  display: ${props => props.shown ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`

export const PopupContent = styled.div`
  height: ${props => props.big ? "45rem" : "31.9rem"};
  ${props => props.medium && "height: 36rem;"};
  width: 35rem;
  border-radius: 78px;
  background: white;
  position: relative;
  padding: 0 3.875rem;
  box-sizing: border-box;
`

export const PopupExitButton = styled.a`
  position: absolute;
  top: 2.50rem;
  left: 2.50rem;
  font-size: 1.6em;
  transition: all .5s;

  &:hover {
    color: #363535;
  }
`