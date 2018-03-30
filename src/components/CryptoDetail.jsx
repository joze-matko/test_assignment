import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CryptoDetail extends React.Component {

    render(){
        return (
        <div>
        {this.props.crypto_detail != null &&
             <table>
                 <tbody>
                 <tr>
                     <td>
                         Rank  
                     </td>
                     <td>
                         {this.props.crypto_detail.c_rank}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Name  
                     </td>
                     <td>
                         {this.props.crypto_detail.c_name}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Symbol  
                     </td>
                     <td>
                         {this.props.crypto_detail.c_symbol}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Price in {this.props.currency}
                     </td>
                     <td>
                         {this.props.crypto_detail.c_price_in_fiat}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         24h volume in {this.props.currency}
                     </td>
                     <td>
                         {this.props.crypto_detail.c_volume_24_period_in_fiat}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         24h market cap in {this.props.currency}
                     </td>
                     <td>
                         {this.props.crypto_detail.c_marker_cap_24_period_in_fiat}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Price in bitcoin
                     </td>
                     <td>
                         {this.props.crypto_detail.c_price_in_bitcoin}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         1h change
                     </td>
                     <td>
                         {this.props.crypto_detail.c_change_1h_period}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         24h change
                     </td>
                     <td>
                         {this.props.crypto_detail.c_change_24h_period}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         7d change
                     </td>
                     <td>
                         {this.props.crypto_detail.c_change_7d_period}
                     </td>
                 </tr>

                 <tr>
                     <td>
                         Available supply
                     </td>
                     <td>
                         {this.props.crypto_detail.c_available_supply}
                     </td>
                 </tr>
                 <tr>
                     <td>
                         Total supply
                     </td>
                     <td>
                         {this.props.crypto_detail.c_total_supply}
                     </td>
                 </tr>
                 </tbody>
             </table>
        }
        </div>)
    };
}

export default CryptoDetail;