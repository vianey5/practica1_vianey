function get IMC(){
  var peso=parse Float (document.getElement ById('peso') value);
  var altura=parse Float (document.getElement ById ('altura') value);
  var ime =peso/(altura*altura);
  document.getElement ById("imc").innerHTML=imc;
}
