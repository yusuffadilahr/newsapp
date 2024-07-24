import axios from "axios"

// Get Top Headline News
export const getNews = (callback) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8f60cf7e53064867a63bbad9c7f2a429')
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
}

// Get Indonesia News 
export const getIdnNews = (callback) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=8f60cf7e53064867a63bbad9c7f2a429')
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
}

// Get Apple News 
export const getAppleNews = (callback) => {
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-07-22&to=2024-07-22&sortBy=popularity&apiKey=8f60cf7e53064867a63bbad9c7f2a429')
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
}

// Get Crypto News
export const getCryptoNews = (callback) => {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8f60cf7e53064867a63bbad9c7f2a429')
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
}