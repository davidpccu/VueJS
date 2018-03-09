const url = "https://api.coinmarketcap.com/v1/ticker/";

const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted() {
        axios.get(url).then(response => {
            this.results = response.data
        })
    }
});