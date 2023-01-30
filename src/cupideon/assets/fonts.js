import {createGlobalStyle} from "styled-components";
import WankstabergBattles from "./WankstabergBattles.ttf";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Wankstaberg Battles';
        src: url(${WankstabergBattles});
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalFonts;