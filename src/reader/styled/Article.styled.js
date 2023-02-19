import styled from "styled-components";

export const ArticleWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`
export const ArticleLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ArticleLoadingText = styled.h1`
  margin: 0;
  color: white;
`