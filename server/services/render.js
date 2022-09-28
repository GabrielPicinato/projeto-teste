const axios = require('axios');

exports.homeRoutes = (req, res) => {

    axios.get('http://localhost:3000/api/products')
    .then(function(response){
        res.render('index', { products : response.data});
    })
    .catch(err =>{
        res.send(err);
    })
    
}

exports.add_product = (req, res) =>{
    res.render('add_product');
}

