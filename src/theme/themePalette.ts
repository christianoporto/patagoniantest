export interface IThemePalette {
    shadowDark: string;
    primary: string;
    primary2: string;
    primaryDark: string;
    primaryDark2: string;
    dangerColor: string;
    dangerColorDark: string;
    background: string;
    backgroundDark: string;
    backgroundDarker: string;
    backgroundLight: string;
    backgroundModal: string;
    text: string;
    textDark: string;
    textLight: string;
    textLighter: string;
    shadow: string;
}

export const lightTheme: IThemePalette = {
    shadowDark: "rgb(175 175 175 / 38%)",
    primary: "#2962ff",
    primary2: "#009688",
    primaryDark: "#2255e0",
    primaryDark2: "#007167",
    dangerColor: "#f44336",
    dangerColorDark: "#d23327",
    background: "white",
    backgroundDark: "#e6e6e6",
    backgroundDarker: "#c1c1c1",
    backgroundLight: "#dedede66",
    backgroundModal: "rgba(0, 0, 0, 0.521)",
    text: "#353535",
    textDark: "black",
    textLight: "grey",
    textLighter: "#80808094",
    shadow: "1px 1px 7px #8c8c8c4a",
};

export const darkTheme: IThemePalette = {
    shadowDark: "rgb(0 0 0 / 52%)",
    primary: "#0091ff",
    primary2: "#009688",
    primaryDark: "#0076d1",
    primaryDark2: "#007167",
    dangerColor: "#f44336",
    dangerColorDark: "#d23327",
    background: "#1d1d1d",
    backgroundDark: "#313131",
    backgroundDarker: "#5f5f5f",
    backgroundLight: "#313131",
    backgroundModal: "rgba(68, 68, 68, 0.65)",
    text: "white",
    textDark: "Grey",
    textLight: "grey",
    textLighter: "#80808080",
    shadow: "1px 1px 7px #000000a8",
};
