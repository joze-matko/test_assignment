import { observable } from "mobx";


export default class CryptoModel {
    @observable c_rank;
    @observable c_symbol;
    @observable c_price_in_fiat;
    @observable c_change_24h_period;

    @observable c_name;
    @observable c_volume_24_period_in_fiat;
    @observable c_marker_cap_24_period_in_fiat;
    @observable c_price_in_bitcoin;
    @observable c_change_1h_period;
    @observable c_change_7d_period;
    @observable c_total_supply;
    @observable c_available_supply;

    constructor(c_rank, c_symbol, c_price_in_fiat, c_change_24h_period,
        c_name,c_volume_24_period_in_fiat, c_marker_cap_24_period_in_fiat, c_price_in_bitcoin,
        c_change_1h_period, c_change_7d_period, c_total_supply, c_available_supply) {
        this.c_rank = c_rank;
        this.c_symbol = c_symbol;
        this.c_price_in_fiat = c_price_in_fiat;
        this.c_change_24h_period = c_change_24h_period;
        this.c_name = c_name;
        this.c_volume_24_period_in_fiat = c_volume_24_period_in_fiat;
        this.c_marker_cap_24_period_in_fiat = c_marker_cap_24_period_in_fiat;
        this.c_price_in_bitcoin = c_price_in_bitcoin;
        this.c_change_1h_period = c_change_1h_period;
        this.c_change_7d_period = c_change_7d_period;
        this.c_total_supply = c_total_supply;
        this.c_available_supply = c_available_supply;
      }
}