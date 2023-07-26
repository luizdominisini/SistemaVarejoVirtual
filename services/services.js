const axios = require('axios');

class Services {
    /////////////////////////USUARIO//////////////////////////////
    static async usuarioLogin(req, res) {
        let valores = req.body;

        const options = {
            url: 'http://192.168.100.6:3001/login',
            method: 'POST',
            data: valores
        };
        axios(options).then((usuario) => {
            if (usuario != undefined) {
                return res.render('logado');
            };
        });
    };

    static async usuarioCreate(req, res) {
        let valores = req.body;

        const options = {
            url: 'http://192.168.100.6:3001/usuarios/Cadastrar',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = 'Cadastro realizado com sucesso!';
        res.render('mensagem', { mensagem });
    };

    /////////////////////////PRODUTO//////////////////////////////
    //CREATE
    static async produtoCreate(req, res) {
        let valores = req.body;

        const options = {
            url: 'http://192.168.100.6:3001/add_produtos',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = 'Cadastro realizado com sucesse!';
        res.render('mensagem', { mensagem });
    };

    //LISTAR
    static async produtoListar(req, res) {
        const options = {
            url: 'http://192.168.100.6:3001/produtos',
            method: 'GET',
            data: {}
        };
        axios(options).then((response => {
            console.log(response.data);
            const produto = response.data;

            res.render('produtos/listar', { produto });
        }));
    };
}; //final

module.exports = Services;