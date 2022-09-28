var Email = require('../model/model');
var mail = require('../configs/email');

exports.create=(req, res) => {
    if(!req.body){
        res.status(400).send({message: "Requisição Inválida"});
        return;
    }

    const produto = new Email({
        nomeProduto: req.body.nomeProduto,
        tipoProduto: req.body.tipoProduto,
        categoriaProduto: req.body.categoriaProduto,
        precoProduto: req.body.precoProduto
    })

    produto.save(produto).then(data => {
        //res.send(data)
        res.redirect(307, '/api/send-email');
        

    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Erro Interno"
        });
    });

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Email.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "Requisição Inválida"})
            } else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Erro Interno"})
        })

    } else{
        Email.find().then(produto =>{
            res.send(produto)
        }).catch(err =>{
            res.status(500).send({message: err || "Erro Interno"})
        })
    }    
}







