/* importa para app as configurações do server */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(80, function(){
    console.log("**************************************");
    console.log("==> Iniciado o programa EasyBuy4.0 <==");
    console.log("**************************************");
})

