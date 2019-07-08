import * as type from './../constants/ActionType'

var initialState = [
    {
        origin_1 : null,
        origin_2 : null,
        origin_3 : null,
        origin_4 : null,
    }
];

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ORIGIN_1_HOME:
            state[0].origin_1 = action.data;
            return [...state];
        case type.ORIGIN_2_HOME:
            state[0].origin_2 = action.data;
            return [...state];
        case type.ORIGIN_3_HOME:
            state[0].origin_3 = action.data;
            return [...state];
        case type.ORIGIN_4_HOME:
            state[0].origin_4 = action.data;
            return [...state];
        default:
            return state;
    }
};

export default HomeReducer;