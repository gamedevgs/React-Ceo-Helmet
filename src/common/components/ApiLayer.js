import fetch from "isomorphic-fetch";
import * as type from "../../constants/ActionType";
import axios from "axios";

var config = {
    headers: {
        'Authorization' : 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
        'Req-From' : 'frontend'
    }
};

const ApiLayer = {
    getHomeOrigin1(dispatch) {
        return  axios.get('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=1', config)
            .then(function (response) {
                dispatch({
                    type: type.ORIGIN_1_HOME,
                    data: response.data.data
                })
            });
    },

    getHomeOrigin2(dispatch) {
        return  axios.get('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=2', config)
            .then(function (response) {
                dispatch({
                    type: type.ORIGIN_2_HOME,
                    data: response.data.data
                })
            });
    },

    getHomeOrigin3(dispatch) {
        return  axios.get('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=3', config)
            .then(function (response) {
                dispatch({
                    type: type.ORIGIN_3_HOME,
                    data: response.data.data
                })
            });
    },

    getHomeOrigin4(dispatch) {
        return  axios.get('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=4', config)
            .then(function (response) {
                dispatch({
                    type: type.ORIGIN_4_HOME,
                    data: response.data.data
                })
            });
    }
};

export default ApiLayer;