import zyzHelper from "../common/components/DataProvider";


export function list_origin_1() {
    return (dispatch, getState) => {
        return zyzHelper.getListHomeOrigin1(dispatch);
    }
}

export function list_origin_2() {
    return (dispatch, getState) => {
        return zyzHelper.getListHomeOrigin2(dispatch);
    }
}

export function list_origin_3() {
    return (dispatch, getState) => {
        return zyzHelper.getListHomeOrigin3(dispatch);
    }
}

export function list_origin_4() {
    return (dispatch, getState) => {
        return zyzHelper.getListHomeOrigin4(dispatch);
    }
}
