import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #1A1A1A;
`

export const HomeHeader = styled.nav`
  width: 100%;
  height: 150px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeTitle = styled.h1`
  color: white;
  font-family: Broadway;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 4.5em;
  @media (max-width: 870px) {
    font-size: 3.5em;
  }
  @media (max-width: 683px) {
    font-size: 2.5em;
  }
  @media (max-width: 470px) {
    font-size: 1.75em;
  }
`

export const HomeGrid = styled.div`
  display: grid;
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 20px 40px;
  box-sizing: border-box;
  grid-gap: 10px;
  grid-template-columns: calc(50vw - 40px - 5px) calc(50vw - 40px - 5px);
  grid-template-rows: calc(20vw - 16px - 2px + 32px) 
                      calc(20vw - 16px - 2px + 32px) 
                      calc(20vw - 16px - 2px + 32px) 
                      calc(20vw - 16px - 2px + 32px) 
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px)
                      calc(20vw - 16px - 2px + 32px);
  @media (max-width: 450px) {
    padding: 10px 20px;
    grid-template-columns: calc(50vw - 20px - 5px) calc(50vw - 20px - 5px);
    grid-template-rows:   calc(20vw - 12px - 2px + 32px) 
                      calc(20vw - 12px - 2px + 32px) 
                      calc(20vw - 12px - 2px + 32px) 
                      calc(20vw - 12px - 2px + 32px) 
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px)
                      calc(20vw - 12px - 2px + 32px);
  }
`

export const HomeSection = styled.section`
  grid-column: ${props => props.xAxis};
  grid-row: ${props => props.yAxis};

  &:hover img {
    border: 1px solid white;
  }
`

export const HomeImage = styled.img`
  width: 100%;
  border: none;
  object-fit: cover;
  height: calc(100% - 30px);
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  transition: border 500ms;
`
export const TitleContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArticleTitle = styled.h3`
  margin: 0;
  font-family: Open Sans;
  font-weight: bold;
  color: white;
  font-size: .65em;
  text-align: center;
`