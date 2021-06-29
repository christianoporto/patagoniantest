import { getStoredData, StoreKey } from "../store";
import { AppSettingsTypes, CHANGE_THEME, THEME_LIGHT, THEME_DARK, SET_LANGUAGE } from "./types";

export interface IAppSettingsState {
    theme: string;
    language: string;
}

export const defaultState: IAppSettingsState = {
    theme: THEME_LIGHT,
    language: "en",
};

export const initState = getStoredData<IAppSettingsState>(defaultState, StoreKey.appSettings);

const loadNewTheme = (state: IAppSettingsState): IAppSettingsState => {
    const newTheme = state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    return { ...state, theme: newTheme };
};

export const appSettingsReducer = (state: IAppSettingsState, action: AppSettingsTypes): IAppSettingsState => {
    switch (action.type) {
        case CHANGE_THEME:
            return loadNewTheme(state);
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.value,
            };

        default:
            return state;
    }
};
