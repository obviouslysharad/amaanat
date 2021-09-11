import ActionTypes from "../constants/action-types"

export const setAccounts = (accounts) => {
    return {
        type: ActionTypes.SET_ACCOUNTS,
        payload: accounts,
    };
};

export const selectedAccount = (account) => {
    return {
        type: ActionTypes.SELECTED_ACCOUNT,
        payload: account,

    };
}