let neg = false
let int = false

function gerarNum(){
    let num = document.getElementById("num")
    
    let min = parseFloat(document.getElementById("min").value);
    let max = parseFloat(document.getElementById("max").value);

    valor = Math.random() * (max - min) + min;
    console.log(valor)
    
    if (neg) {
        valor = -valor;
    }
    if(!int){
        num.innerHTML = valor.toFixed(2)
        
    }
    else{
        num.innerHTML = valor.toFixed(0)
        
    
    }
    console.log(document.getElementById('negativar').textContent)
}

function negativar(){
    neg = !neg;
    let btn = document.getElementById('negativar');

    if (neg) {
        btn.textContent = "Deixar valor positivo";
    } else {
        btn.textContent = "Deixar valor negativo";
    }

    //gerarNum();
}

function gerarInt(){
    int = !int
    let btn = document.getElementById('int');

    if (int) {
        btn.textContent = "Gerar float";
        console.log("gerar float")
    } else {
        btn.textContent = "Gerar inteiro";
        console.log('gerar int')
    }
}

function getPassword() {
    var chars = ""
    let props1 = document.getElementsByClassName('propriedade1')
    if (props1[0].checked ){
        chars += "abcdefghijklmnopqrstuvwxyz"
        
    }
    if (props1[1].checked ){
        chars += "ABCDEFGHIJLMNOPQRSTUVWXYZ"
        
    }
    if (props1[2].checked ){
        chars += "0123456789"
        
    }
    if (props1[3].checked ){
        chars += "!@#$%^&*()+?><:{}[]"
        
    }

    //var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    let value = document.getElementById('num_real').value
    var passwordLength = value;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    let senha = document.getElementById("senha_p")
    senha.innerHTML = password
  }


