const products= require('../products')

const getProduct= (req, res) => {
    const item= products.find(val => val.id === parseInt(req.params.id));

    if(!item){
        return res.status(500).send("Item does not exist in list")
    }
    res.status(200).send(item)
}





module.exports= getProduct;