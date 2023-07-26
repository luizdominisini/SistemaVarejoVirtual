const express = require('express');
const Services = require('../services/services');
const router = express.Router();

//USUARIO E LOGIN
// router.get('/', (req, res) => {
//     res.send('Seja Bem Vindo ao nosso sistema de varejo virtual.');
// });

router.get('/', Services.produtoListar);

router.post('/login', Services.usuarioLogin);
router.get('/login', (req, res) => {
    res.render('usuarios/login');
});

router.get('/usuarios/Cadastrar', (req, res) => {
    res.render('usuarios/Cadastrar');
});
router.post('/usuarios/Cadastrar', Services.usuarioCreate);

//PRODUTO
//CREATE E RENDER CADASTRAR
router.get('/produtos/Cadastrar', (req, res) => {
    res.render('produtos/Cadastrar');
});
router.post('/produtos/Cadastrar', Services.produtoCreate);

//LISTAR
router.get('/produtos/listar', Services.produtoListar);



module.exports = router;