

function enviar(){
    var nome = window.document.getElementById('nome').value;
    var email = window.document.getElementById('email').value;
    var numerotel = window.document.getElementById('numerotel').value;
    var cpf = window.document.getElementById('cpf').value;
    var datanasc = window.document.getElementById('datanasc').value;
    var cep = window.document.getElementById('cep').value;
    var uf = window.document.getElementById('uf').value;
    var cidade = window.document.getElementById('cidade').value;
    var bairro = window.document.getElementById('bairro').value;
    var numerores = window.document.getElementById('numerores').value;

    if(nome == false || email == false || numerotel == false || cpf == false || datanasc == false || cep == false || uf == false || cidade == false || bairro == false  || numerores == false){
        window.alert("Por Favor verifique se os dados digitados estão corretos!");
    }
    else {
        window.alert("Confira as informações na tabela abaixo:");
        window.document.getElementById('nomeres').innerHTML = nome;
        window.document.getElementById('emailres').innerHTML = email;
        window.document.getElementById('numerotelres').innerHTML = numerotel;
        window.document.getElementById('cpfres').innerHTML = cpf;
        window.document.getElementById('datanascres').innerHTML = datanasc;
        window.document.getElementById('cepres').innerHTML = cep;
        window.document.getElementById('ufres').innerHTML = uf;
        window.document.getElementById('cidaderes').innerHTML = cidade;
        window.document.getElementById('bairrores').innerHTML = bairro;
        window.document.getElementById('numeroresres').innerHTML = numerores;
    }

}
function confirmar(){
    var nome = window.document.getElementById('nome').value;
    var email = window.document.getElementById('email').value;
    var numerotel = window.document.getElementById('numerotel').value;
    var cpf = window.document.getElementById('cpf').value;
    var datanasc = window.document.getElementById('datanasc').value;
    var cep = window.document.getElementById('cep').value;
    var uf = window.document.getElementById('uf').value;
    var cidade = window.document.getElementById('cidade').value;
    var bairro = window.document.getElementById('bairro').value;
    var numerores = window.document.getElementById('numerores').value;


    if(nome == false || email == false || numerotel == false || cpf == false || datanasc == false || cep == false || uf == false || cidade == false || bairro == false  || numerores == false){
        window.alert("Por Favor, preencha todos os dados!");
    }
    else{
        window.alert("Dados enviados com sucesso!");
    }
}