import { AppSettingsTypes, CHANGE_THEME, SET_LANGUAGE } from "./types";
import { Dispatch } from "react";
import { IAppSettingsState } from "./reducer";

export const changeTheme = (dispatch: Dispatch<AppSettingsTypes>) => {
    return dispatch({ type: CHANGE_THEME });
};

export interface ISettingsActions {
    changeTheme: () => void;
    setLanguage: (value: string) => void;
}

export const useActions = (state: IAppSettingsState, dispatch: Dispatch<AppSettingsTypes>): ISettingsActions => ({
    changeTheme: () => {
        return dispatch({ type: CHANGE_THEME });
    },
    setLanguage: (value: string) => {
        return dispatch({ type: SET_LANGUAGE, value });
    },
});
