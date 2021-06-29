import { DefaultTheme } from "styled-components";
import { IThemePalette } from "./themePalette";

declare module "styled-components" {
    export interface DefaultTheme {
        breakpoints: {
            [name in "xs" | "sm" | "md" | "lg" | "xl"]: number;
        };
        palette: IThemePalette;
    }
}

