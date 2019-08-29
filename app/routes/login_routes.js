/* rotas para tela de login */

module.exports = function(application){
    const {check, validationResult} = require('express-validator');

    application.post('/validar_usuario', [
        check('inputEmail', 'Your email is not valid').not().isEmpty(),
        check('inputPassword', 'Your password must be at least 5 characters').not().isEmpty(),
      ],
      function (req, res) {
            const dadosForm = req.body;
            const errors = validationResult(req);
            
            if (!errors.isEmpty()) {
                console.log(errors.array());
                return res.status(422).render('login',{inputEmail : dadosForm.inputEmail, errors : errors});
            } else {
                res.render('view_produtos');
            }
      });
    
}
