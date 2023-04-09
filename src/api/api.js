import axios from "axios";

export const getCryptos = (page = 1) => {
    return axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        .then(res => res.data)
}

export const getCrypto = (id) => {
    return axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => res.data)
}