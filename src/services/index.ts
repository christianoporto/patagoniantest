import axios from "axios";

export const customFetch = {
    get: (url: string, onSuccess: (value: any) => void, onError: (value: any) => void) => {
        return axios
            .get(url)
            .then((res: any) => onSuccess(res))
            .catch((error: any) => {
                onError(error);
            });
    },
    put: (url: string, data: any, onSuccess: (value: any) => void, onError: (value: any) => void) => {
        return axios
            .put(url, data)
            .then((response: any) => onSuccess(response))
            .catch((error: any) => onError(error));
    },
    post: (url: string, data: any, onSuccess: (value: any) => void, onError: (value: any) => void) => {
        return axios
            .post(url, data)
            .then((response: any) => onSuccess(response))
            .catch((error: any) => onError(error));
    },
    delete: (url: string, onSuccess: (value: any) => void, onError: (value: any) => void) => {
        return axios
            .delete(url)
            .then((res: any) => onSuccess(res))
            .catch((error: any) => onError(error));
    },
};
