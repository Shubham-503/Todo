import account from "./index"

export const createAccount = (email, password, name) => {
    return account.create('unique()', email, password, name);
}

export const getAccount = () => {
    return account.get();
}

export const createSession = (email, password) => {
    return account.createEmailSession(email, password);
}

export const deleteCurrentSession = () => {
    return account.deleteSession('current');
}