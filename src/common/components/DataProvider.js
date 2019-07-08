import  ApiLayer from './ApiLayer';

const siteConfig = require(`./../../siteConfig`);
const SimpleStorage = require(`./SimpleStorageLayer`);

const method = siteConfig.dataProvider.method;

const dataLayer = false;

const DataProvider = {
    initialDataLayer() {
        if(dataLayer === false) {
            switch (method) {
                case "api":
                    this.dataLayer = ApiLayer;
                    return this.dataLayer;
                default :
                    this.dataLayer = SimpleStorage;
                    return this.dataLayer;
            }
        }
    },

    getListHomeOrigin1(dispatch) {
        let dataLayer = this.initialDataLayer();
        return dataLayer.getHomeOrigin1(dispatch);
    },

    getListHomeOrigin2(dispatch) {
        let dataLayer = this.initialDataLayer();
        return dataLayer.getHomeOrigin2(dispatch);
    },

    getListHomeOrigin3(dispatch) {
        let dataLayer = this.initialDataLayer();
        return dataLayer.getHomeOrigin3(dispatch);
    },

    getListHomeOrigin4(dispatch) {
        let dataLayer = this.initialDataLayer();
        return dataLayer.getHomeOrigin4(dispatch);
    }
};

export default DataProvider;