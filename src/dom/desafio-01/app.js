new Vue({
    el: '#desafio',
    data: {
        nome: 'Joabe Ramone',
        idade: 23,
        VueLogo: 'https://br.vuejs.org/images/logo.png'
    },
    methods: {
        multiplicaIdade: function (multiplicador) {
            return this.idade * multiplicador
        },
        exibiNumeroAleatorioEntreDoisValores: function () {
            return Math.random()
        }
    }

});