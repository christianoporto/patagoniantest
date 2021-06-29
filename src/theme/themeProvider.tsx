import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themePalette";
import { AppSettingsContext } from "../appSettings/AppSettingsContext";
import { createBreakpoint } from "styled-components-breakpoint";
import { THEME_LIGHT } from "../appSettings/types";

export const breakpoints = {
    xs: 420,
    sm: 568,
    md: 768,
    lg: 991,
    xl: 1200,
};

export const breakpoint = createBreakpoint(breakpoints);

function StyledThemeProvider(props: any) {
    const { appSettingsState: themeState } = useContext(AppSettingsContext);
    const { children } = props;

    return (
        <ThemeProvider
            theme={{
                breakpoints,
                palette: themeState.theme === THEME_LIGHT ? lightTheme : darkTheme,
            }}
        >
            {children}
        </ThemeProvider>
    );
}

export default StyledThemeProvider;
