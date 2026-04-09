function verificar(){
    var x = document.getElementById("x").value;
    var numero = Math.floor(Math.random()*100);
    if (numero==x){
        window.alert("Acertou o numero!");
        window.alert("Numero digitado: "+x);
        window.alert("Numero gerado: "+numero);
    }else if (numero>x){
        window.alert("O numero digitador é menor!");
        window.alert("Numero digitado: "+x);
        window.alert("Numero gerado: "+numero);
        document.body.style.backgroundColor = "red";
    }else{
        window.alert("O numero digitador é maior!");
        window.alert("Numero digitado: "+x);
        window.alert("Numero gerado: "+numero);
        document.body.style.backgroundColor = "red";
    }
};
