export const StoreKey = {
    appSettings: "appSettings",
    todo: "todos",
    post: "post",
    comment: "comment",
};

export const persistOptions = [StoreKey.appSettings, StoreKey.post, StoreKey.comment];

const checkKey = (key: string) => {
    return persistOptions.find((x) => x === key);
};

export function getStoredData<T>(defaultState: T, keyName: string): T {
    if (!checkKey(keyName)) return defaultState;
    const storeItem = localStorage.getItem(keyName) as string;
    if (storeItem) {
        try {
            const localData: T = JSON.parse(storeItem);
            return localData;
        } catch (e) {
            console.log(`Invalid storage value for ${keyName}`);
        }
    }
    return defaultState;
}

export function saveData<T>(keyName: string, obj: T) {
    if (checkKey(keyName)) localStorage.setItem(keyName, JSON.stringify(obj));
}
