import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import CryptoList from "./components/CryptoList"
import CryptoListModel from "./models/CryptoListModel"
import CryptoModel from "./models/CryptoModel"
import CryptoUtils from "./models/CryptoUtils"

const utils = CryptoUtils;
const crypto_model = new CryptoListModel(utils);
utils.loadCryptos(crypto_model);

render(
  <div>
    <CryptoList crypto_model={crypto_model} />
  </div>,
  document.getElementById("root")
);