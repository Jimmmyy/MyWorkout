var express = require('express');
var router = express.Router();



//liste serv
const list = [{
  name: 'First Program triceps:',
  price: '10',
  info: '2',
  imagee: 'https://i1.wp.com/frenchtouchbym.com/wp-content/uploads/2017/11/tricep-dips.gif?w=476&h=476&crop=1&ssl=1'
}, {
  name: 'Second program biceps',
  price: '20',
  info: '1 ',
  imagee: 'https://cdn.shopify.com/s/files/1/1501/0558/files/Australian-Pull-Ups_a1cc8e8b-2587-4116-be41-8939f26f71fb.gif?v=1507281598'
},{
  name: 'Mega obliques',
  price: '310',
  info: '3',
  imagee: 'https://gif-free.com/uploads/posts/2017-04/1493021447_totoro-fitness.gif'
}]

const name2 = []

const price2 = []




console.log(list)

router.get('/list', (req, res) => {
	console.log('Get list activate')
  res.json(list)
})

//add element
router.post('/list', (req, res) => {
  list.push({
    name: req.body.name,
    price: req.body.price,
    imagee: req.body.imagee,
    info: req.body.info
  })
  res.send('OK')
})
//del element
router.delete('/list/:id', (req, res) => {
	console.log("console launched, ID = " + req.params.data)
  const id = parseInt(req.params.id)
  console.log(id)

  var index = -1;
  for(var i in list){
    console.log(i)
    if (i === req.params.id) {
      index = i ;
      console.log("id =" + i)
      console.log("index =" + index)
    }
  }
  if(index !== 1){
    list.splice(index,1)
    console.log("DELETE")
    res.send('OK')
  }
  
  else {
   res.status(404)
   res.send('error: not found')
   return
 }
})

//Sign in
router.post('/connect', (req, res) => {
	console.log("req.body.username =" + req.body.username)
  const username = req.body.username
  const passeword = req.body.passeword
  console.log("Le username serveur est :"+ username )
  console.log("Le password serveur est :"+ passeword )
  if (username !== '' && passeword !== '') {
    res.send('OK')
    console.log("slt")
  } else {
    res.send('OK')
  }
})
//Panier
router.post('/basket', (req, res) => {
  
  
  
  name2.push(req.body.name2);
  
  price2.push(req.body.price2);
  console.log("Mon prix est :" +req.body.price2)
  console.log("Mon Nom est :" +req.body.name2)
  
  
  res.send('OK')
})


module.exports = router;
