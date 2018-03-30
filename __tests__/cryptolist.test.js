import CryptoList from "../src/components/CryptoList"
import CryptoListModel from "../src/models/CryptoListModel"
import CryptoModel from "../src/models/CryptoModel"
import CryptoUtils from "../src/models/CryptoUtils"

import React from 'react';
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-15';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
//Enzyme.configure({ adapter: new Adapter() })

class mock_utils {

    loadCryptos(model) {
        model.cryptos.push(new CryptoModel(1, 100, -2, "Name1",
                    100, 10000, 1, -2, -2, 
                    100000000, 100000000));
        model.cryptos.push(new CryptoModel(2, 100, -2, "Name2",
                    100, 10000, 1, -2, -2, 
                    100000000, 100000000));

    }
}

test("Check if first crypto has rank 1", () => {
    var mu = new mock_utils();
    var lm = new CryptoListModel(mu);
    lm.refresh();

    const wrapper = mount(
        <CryptoList  crypto_model={lm} />
    );

    const p = wrapper.find('#td1_1');
    expect(p.text()).toBe('1');
})