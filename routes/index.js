var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:limit?', function(req, res, next) {
  try{
    const { limit } = req.params
    const { type } = req.query;
    let items = [];
    if(limit){
      for(let i = 0; i < 3; i++){
        if(limit-i !== 0){
          items.unshift(parseInt(limit)-i)
        }
      }
    }else{
      items = [1,2,3]
    }
    res.render('index', { title: 'EJS App', items, limit: limit ? limit: 3, type: type ? type :"A" });
  }catch(e){
    res.render('error', { message: e.message , error:e})
  }
});

module.exports = router;
