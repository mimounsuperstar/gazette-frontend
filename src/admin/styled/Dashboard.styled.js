import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.9fr 7.9fr;
  min-height: 100vh;
  width: 100vw;
`

export const DashboardNavigationWrapper = styled.div`
  background: #365DB6;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
`

export const DashboardLogo = styled.img`
  max-width: 50%;
  margin: 10% 25%;
  filter: invert(1) ;
`

export const NavigationList = styled.ul`
  list-style-type: none;
`

export const NavigationListItem = styled.li`
  width: 95%;
  padding: 0 0 0 5%;
  margin: 1rem 0 0;
`

export const NavigationButton = styled.a`
  display: inline-block;
  width: 100%;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1em;
  border-radius: 20px 0 0 20px;
  border: none;
  padding: 0.82rem 0.82rem 0.82rem 1rem;
  box-sizing: border-box;
  background: ${props => props.active ? "white" : "#365DB6"};
  color: ${props => props.active ? "#365DB6" : "white"};
  transition: all .5s;
  text-decoration: none;

  &:hover {
    background: ${props => props.active ? "white" : "#4c7fef"};
  }
`

export const LogOutItem = styled.li`
  position: absolute;
  bottom: 2rem;
  right: 0;
  left: 2.5rem;

`

export const LogOutButton = styled.a`
  display: inline-block;
  width: 100%;
  font-family: Raleway;
  font-weight: bold;
  font-size: 1em;
  border-radius: 20px 0 0 20px;
  border: none;
  padding: 0.82rem 0.82rem 0.82rem 1rem;
  box-sizing: border-box;
  background: #AF0000;
  color: white;
  transition: all .5s;

  &:hover {
    background: #ce2626;
  }
`

export const DashboardContent = styled.div`
  margin: 5.8rem 4.25rem;
`

export const EditionsWrapper = styled.div`
  max-width: 70vw;
  height: 13rem;
  overflow-x: scroll;
`


export const EditionsContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
`

export const EditionDetails = styled.div`
  border-radius: 40px;
  border: 1px solid #365DB6;
  box-sizing: border-box;
  height: 100%;
  width: ${props => props.editor ? "31.5rem" : "24rem"};
  ${props => props.redactor ? "width: 14.5rem" : ""};
  margin-right: ${props => props.editor ? "0" : "1.5rem"};
  padding: 0 1rem;
`

export const EditionTitle = styled.h4`
  text-align: center;
  font-size: 1.2em;
  font-family: Raleway;
  font-weight: bold;
  color: #365DB6;
  margin: 1em 0 0;
`

export const EditionStatus = styled.h4`
  text-align: center;
  font-size: 1.1em;
  font-family: Raleway;
  font-weight: normal;
  color: #365DB6;
  margin: 1em 0 0;
`

export const EditionQueue = styled.h4`
  text-align: center;
  font-size: 1.1em;
  font-family: Raleway;
  font-weight: normal;
  color: #365DB6;
  margin: 1em 0 0;
`

export const EditionMore = styled.a`
  text-align: center;
  font-size: 1.1em;
  font-family: Raleway;
  font-weight: normal;
  color: #365DB6;
  margin: 1em 0 0;
  display: inherit;
  padding-bottom: 1rem;
`

export const EditionButton = styled.button`
  text-align: center;
  font-size: 1.1em;
  font-family: Raleway;
  font-weight: normal;
  color: #365DB6;
  margin: 1em 0 0;
  display: inherit;
  padding-bottom: 1rem;
  text-decoration: underline;
`

export const ManagingEditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`

export const ManagingArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
`

export const ManagingRedactorsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
`