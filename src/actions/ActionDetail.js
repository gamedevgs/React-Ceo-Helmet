import * as type from '../constants/ActionType';
import fetch from 'isomorphic-fetch';
import zyzHelper from "../../src/common/components/DataProvider";

export function content_detail(id) {
    return (dispatch, getState) => {
        return fetch(`http://api.tuoitre.vn/mobileapp/objectdetail?token=da039e81&id=${id}`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.CONTENT_DETAIL,
                data: json
            }))
    }
}

export function block_quan_tam() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=9&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.BLOCK_QUAN_TAM,
                data: json
            }))
    }
}
export function comment_post(size) {
    return (dispatch, getState) => {
        return fetch(`https://id.tuoitre.vn/api/getlist-comment.api?pageindex=1&pagesize=${size}&objId=20190619215808351&objType=1&sort=1&appKey=lHLShlUMAshjvNkHmBzNqERFZammKUXB1DjEuXKfWAwkunzW6fFbfrhP%2FIG0Xwp7aPwhwIuucLW1TVC9lzmUoA%3D%3D`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_COMMENT,
                data:json.Data

            }))
    }
}
