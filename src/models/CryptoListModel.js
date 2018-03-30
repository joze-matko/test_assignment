import React, { Component, ReactDOM } from "react";
import { observable, computed, action } from "mobx";
import CryptoModel from "./CryptoModel";

export default class CryptoListModel {
    @observable cryptos = [];
    @observable currentCrypto = null;
    @observable currency = "EUR";
    constructor(utils) {
        this.utilsC = utils;
    }

    @action
    refresh() {
        this.utilsC.loadCryptos(this);
    }

    selectCrypto(crypto) {
        this.currentCrypto = crypto;
    }

    deselectCrypto() {
        this.currentCrypto = null;
    }

    selectCurrency(currency) {
        this.currency = currency;
        this.utilsC.loadCryptos(this);
    }
}

