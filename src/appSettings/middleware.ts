import { Dispatch } from "react";
import { AppSettingsTypes } from "./types";

export const applyMiddleware = (dispatch: Dispatch<AppSettingsTypes>) => (action: AppSettingsTypes) => {
    switch (action.type) {
        default:
            dispatch(action);
    }
};
