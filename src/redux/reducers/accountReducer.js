import { ActionTypes } from "../constants/action-types";

const initialState = {
    accounts: [
        {
            id: 1,
            title: "Sumit Jain",
            limit: 20,
            limitUsed : 7,
        },
    ],
}

export const accountReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_ACCOUNTS:
            return state;
        default:
            return state;
    }
}