import CryptoModel from "./CryptoModel";
import React from "react";
import { render } from "react-dom";

import CryptoList from "../components/CryptoList"
import CryptoListModel from "./CryptoListModel"

class CryptoUtils {

    constructor() {
        this.crypto_all_fetch_url = "https://api.coinmarketcap.com/v1/ticker/?start=0&limit=100&convert=";
    }

    loadCryptos(model) {
        model.currentCrypto = null;
        fetch(this.crypto_all_fetch_url + model.currency)
        .then(result=>result.json())
        .then(
            function (json_data) {
                model.cryptos.clear();
                
                for(var i in json_data) {
                    var item = json_data[i];
                    model.cryptos.push(new CryptoModel(item.rank,item.symbol, item["price_" + model.currency.toLowerCase()], item.percent_change_24h, item.name,
                    item["24h_volume_" + model.currency.toLowerCase()], item["market_cap_" + model.currency.toLowerCase()], item.price_btc, item.percent_change_1h, item.percent_change_7d, 
                    item.total_supply, item.available_supply));
                }
                alert("Data loaded!");
            }
        );
    }
}

export default new CryptoUtils();