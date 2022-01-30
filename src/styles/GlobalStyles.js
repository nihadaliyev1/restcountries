import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html {
        font-size:62.5%;
    }

    body {
        background-color: ${({ theme, $darkmode }) =>
          $darkmode ? theme.colors.verydarkblue : theme.colors.verylightgray};
        color:${({ theme }) => theme.colors.verydarkblue2};
        line-height:1.7;
        box-sizing:border-box;
        font-family:${({ theme }) => theme.fonts.nunito};
        font-weight:400;
        transition:.4s background-color;
        overflow-x:hidden;
    }

   
    a:link,
    a:focus,
    a:visited{
        text-decoration:none;
    } 
    }



`;

export default GlobalStyles;
