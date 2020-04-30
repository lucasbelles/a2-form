let txtNome = document.getElementById("txtNome");
let txtPreco = document.getElementById("txtPreco");
let txtQuantidade = document.getElementById("txtQuantidade");
let txtValidade = document.getElementById("txtValidade");
let select = document.getElementById('categoria');

let valueSelect = select.options[select.selectedIndex].value;
console.log(valueSelect);

function Salvar(){

  if(txtNome.value == "" && txtPreco.value == ""  && txtQuantidade.value == "" && valueSelect == 0){
    alert("Todos os campos devem ser preenchidos!");
  }else{
    alert("Informações salvas!");
  }
}

function Limpar(){
  txtNome.value = ""
  txtPreco.value = ""
  txtQuantidade.value = ""
  catText = 0;
}
