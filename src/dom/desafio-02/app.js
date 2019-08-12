new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert() {
            alert("Exibindo alert!!")
        },
        input(e) {
            console.log(e);
            this.valor = e;
        }
    }
});