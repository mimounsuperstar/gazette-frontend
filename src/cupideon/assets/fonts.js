import {createGlobalStyle} from "styled-components";
import WankstabergBattles from "./WankstabergBattles.ttf";
import Broadway from "./BroadwayRegular.ttf";


const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Wankstaberg Battles';
        src: url(${WankstabergBattles});
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
      font-family: 'Broadway';
      src: url(${Broadway});
      font-weight: 300;
      font-style: normal;
    }
`;

export default GlobalFonts;