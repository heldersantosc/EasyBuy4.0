/* Página Inicial */
module.exports = function(application){
    application.get('/', function(req,res){
        res.render('index');
    });

    application.get('/login', function(req,res){
        res.render('login');
    });

    application.get('/cadastro', function(req,res){
        res.render('cadastro');
    });
}
