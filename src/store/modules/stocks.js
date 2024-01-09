import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            // essa action esta chamando uma mutation do modulo do portfolio
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            console.log('initStocks', stocks)
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}