import { createGlobalStyle } from "styled-components";
import RobotoBold from "./fonts/Roboto-Bold.ttf";
import RobotoMedium from "./fonts/Roboto-Medium.ttf";
import RobotoRegular from "./fonts/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Bold';
    src: url('${RobotoBold}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Medium';
    src: url('${RobotoMedium}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Regular';
    src: url('${RobotoRegular}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 14px;
  }
  body, button, input, textarea {
    font-family: Roboto, 'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI',
    -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  }
  body {
    font-size: 15px;
  }
 html, body { 
  background: ${(props) => props.theme.palette.backgroundLight};
  color: ${(props) => props.theme.palette.text};
  margin: 0;
  padding: 0; 
 }
  #app {
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: 100%;
  }
  p,
  label {
    line-height: 1.5m;
  }
  a {
    color:  ${(props) => props.theme.palette.primary};
    text-decoration: none;
    &:visited {
      color: ${(props) => props.theme.palette.primary};
    }
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--bg-primary-2);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #84848457;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.backgroundDark};
}

ul li {
  list-style: none;
}
`;

export default GlobalStyle;
