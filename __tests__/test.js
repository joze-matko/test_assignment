import CryptoListModel from "../src/models/CryptoListModel"
import CryptoModel from "../src/models/CryptoModel"

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

describe('Cryptos length', () => {
    it('I know there are only 2 cryptos in list', () => {
        var mu = new mock_utils();
        var lm = new CryptoListModel(mu);
        lm.refresh();

        expect(lm.cryptos.length).toBe(2);
    });
  });