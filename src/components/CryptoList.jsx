import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import CryptoDetail from "./CryptoDetail";

const tStyle = {
    width: "100%", overflow: "hidden"
};

const c1Style = {
    width: "600px", float: "left"
};

const c2Style = {
    marginleft: "620px" 
}


@observer
class CryptoList extends React.Component { 

    render() {
        return (  
            <div>
                <div><input type="button" value="Refresh" onClick={this.refreshModel} />

                    <select defaultValue={this.props.crypto_model.currency} onChange={this.currencyChanged}>
                        <option value="USD">USD</option>
                        <option value="CNY">CNY</option>
                        <option value="EUR">EUR</option>
                    </select>
                
                </div>
                <div style={tStyle}>
                    <div style={c1Style}>
                        <table>
                            <thead>
                                <tr>
                                    <td>Rank</td>
                                    <td>Symbol</td>
                                    <td>Price​ ​in​ ​{this.props.crypto_model.currency}</td>
                                    <td>24​ ​hour​ ​change</td>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.crypto_model.cryptos.map(crypto => (
                                <tr id={"tr" + crypto.c_rank} key={crypto.c_rank} onClick={this.selectCrypto(crypto)}>
                                    <td id={"td1_" + crypto.c_rank}>{crypto.c_rank}</td>
                                    <td id={"td2_" + crypto.c_rank}>{crypto.c_symbol}</td>
                                    <td id={"td3_" + crypto.c_rank}>{crypto.c_price_in_fiat}</td>
                                    <td id={"td4_" + crypto.c_rank}>{crypto.c_change_24h_period}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={c2Style}> 
                           <div> Selected Crypto</div>
                           <CryptoDetail crypto_detail={this.props.crypto_model.currentCrypto} currency={this.props.crypto_model.currency}  />
                     </div>
                </div>
            </div>
        );
    };

    @action
    refreshModel = e => {
        this.props.crypto_model.refresh();
    };
    
    selectCrypto = param => e => {
        this.props.crypto_model.selectCrypto(param);
    }

    @action
    currencyChanged = e => {
        this.props.crypto_model.selectCurrency(e.target.value);
    }
}

export default CryptoList;
