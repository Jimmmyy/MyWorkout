  Vue.prototype.$http = axios



  const app = new Vue({
    el: '#app',
    data: {
      index3:'',
      lname:'',
      fname:'',
      currentPage: 'accueil',
      badpsd: '',
      username: '',
      passeword:'',
      username2: '',
      passeword2:'',
      verypasseword:'',
      msg:'The password is not the same with the verify passeword !',
      myList: [],
      name: '',
      price:'',
      name2: [],
      price2:[],
      nam:'',
      pric:'',
      imagee:'',
      info:'',
      infobasket:'',
      pricebasket:'',
      Admin: false
    },
// Récuperation de la liste
created () {
    console.log('BONJOUR')
    this.$http.get('/list')
    .then( list => {

      this.myList = list.data

    })
    .catch(err => {
      console.log('error', err)
    })
  },


  methods:{

//Ajouter element dans la liste du serveur
sendNewElement () {
  console.log("AJOUTER")
  this.$http.post('/list', {
    name: this.name,
    imagee: this.imagee,
    price: this.price,
    info: this.info
  })
  .then(() => {
    this.myList.push({
      name: this.name,
      imagee: this.imagee,
      price: this.price,
      info: this.info
    })
  })
},



//Supprime element dans la liste au serveur
deletechose(index){
  console.log("TEST")
  console.log("INDEX 1 :" + index)
  this.$http.delete('/list/' + index)
  .then( () => {

    console.log(this.myList[index])
    this.myList.splice(index, 1);
    console.log(index+ "-->");
  })






  
},
//Sign up dans le serveur
connectt(){

 console.log("DEMARRAGE DE LA FONCTION connect")

 if(this.passeword !== '' && this.verypasseword !== '' && this.username !== ''){
  if( this.passeword === this.verypasseword){
    this.$http.post('/connect', {
      username: this.username,
      passeword: this.passeword
    }).then( () => {
      alert('Thanks you ' + this.username + '!');
      this.currentPage = 'accueil';
    })
  } else {
    alert('Wrong password !');
    console.log("Le 2eme mdp n'est pas bon");
  }


} else {
  alert('Please fill out the form !');    
}
},

    //Sign In client ou Admin avec le mot de passe 123
    check(){
      if( this.username2 === 'Admin' && this.passeword2 === '123') {
        alert("Hi Admin, you have extra power :)");
        this.Admin = true;
      } else {
        if( this.username2 === this.username && this.passeword2 === this.passeword){
          this.currentPage = 'liste';
          alert('Welcome ' + this.username2 + ' !');
          console.log("CONNECTE");
        } else {
          alert('Wrong username or password !');
          console.log("NON CONNECTE");
        }
      }




    },

    send(){


      if( this.fname !== '' && this.lname !== ''){
        alert('Thanks you ' + this.fname + ' ' + this.lname + ' !');
      } else {
        alert('Please fill out the form !');

      }




    },
//Ajouter element dans le panier
basket(item){
  this.$http.post('/basket', {
    name2: item.name,
    price2: item.price
  }).then( () => {
    console.log(item.name);
    this.name2.push(
      item.name
      );
    console.log(this.name2);
    this.price2.push(
      item.price
      );
    console.log(this.price2);
    alert(this.name2 + " in your basket !");
  })

},
//Msg d'achat
pay(){
  alert("Thank you for your purchase !");
  this.currentPage = 'accueil';
}

}

})

