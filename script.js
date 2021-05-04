const app = new Vue ({

  el: '#app',
  data: {
    titolo: '',
    miaClass:'',
    titolo_temp: ''
  },
  methods: {
    cambioClasse(classe){
      this.miaClass = '';
      this.miaClass += classe;
      console.log(classe);
    },
    upTasto(event){
      this.titolo_temp += event.key;
      
    },
    upTastoEnter(event){ 
     
      console.log(this.titolo_temp);
      this.titolo_temp = "";
    }
  }

});
