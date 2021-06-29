export const CHANGE_THEME = "appSettings/CHANGE_THEME";
export const SET_LANGUAGE = "appSettings/SET_LANGUAGE";

export const THEME_TITLE = "THEME";
export const THEME_LIGHT = "LIGHT";
export const THEME_DARK = "DARK";

export interface ChangeThemeType {
    type: typeof CHANGE_THEME;
}
export interface SetLanguageType {
    type: typeof SET_LANGUAGE;
    value: string;
}

export type AppSettingsTypes = ChangeThemeType | SetLanguageType;
