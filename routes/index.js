var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:limit?', function(req, res, next) {
  try{
    const { limit } = req.params
    const { type, quantity } = req.query;
    let items = [];
    let result = [];
    if(quantity){
      for(let i = 0; i < parseInt(quantity); i++){
        items.push(i+1);
      }
    }else{
      items = [1,2,3,4,5,6]
    }

    if(limit){
      for(let j = 1; j < 4; j++){
        if(items[limit-j]){
          result.unshift(items[limit-j])
        }
      }
    }else{
      for(let i = 0; i < 3 && i < quantity; i++){
        result.push(i+1)
      }
    }

    res.render('index', { 
      title: 'EJS App', 
      items: result, 
      limit: limit ? limit: 3, 
      type: type ? type :"A",
      quantity: quantity ? parseInt(quantity) : 6 
    });
  }catch(e){
    res.render('error', { message: e.message , error:e})
  }
});

module.exports = router;
