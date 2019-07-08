import * as type from './../constants/ActionType'

var initialState = [
    {
        detail : null,
        quan_tam : null,
        list_cm: null
    }
];

const DetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.CONTENT_DETAIL:
            state[0].detail = action.data;
            return [...state];
        case type.BLOCK_QUAN_TAM:
            state[0].quan_tam = action.data;
            return [...state];
        case type.LIST_COMMENT:
            state[0].list_cm = action.data;
            return [...state];
        default:
            return state;
    }
};

export default DetailReducer;