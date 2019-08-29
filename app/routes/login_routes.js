/* rotas para tela de login */
module.exports = function(application){
    application.post('/validar_usuario', function(req,res){
        res.render('view_produtos');
    });
};