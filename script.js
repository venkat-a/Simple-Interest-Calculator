
/*function compute(el)
//{

var compute = document.getElementsByClassName("compute");
  compute.addEventListener('click',function(){
    if(this.id=="clear"){
      printHistory("");
      printOutput("");
    }*/
function principal(get_principal) 
{
  var n = Number(get_principal);
  var p = n.toLocaleString("en");
  return p;
//}
}
function years(get_years) {
  var n = Number(get_years);
  var selected_years = n.toLocaleString("en");
  return selected_years ;
}
function rate(get_rate) {
  var n = Number(get_rate)
  var selected_rate = n.toLocaleString("en");
  return selected_rate
}

//var output=document.getElementById("output");
var compute = document.getElementsByClassName("compute");
      compute.addEventListener('click',function()
  {
    
    //function compute()

//    p = document.getElementById("principal").value;
     // var p = principal(get_principal);
     // var int_rate =rate(get_rate);
      //var year = years(get_years);
      var p = principal();
      var int_rate =rate();
      var year = years();
      var k =P*(1+int_rate)^year;
    //var elm = $(el);
    //$('#output').html(elm.attr('k'));
    //var output=document.getElementById("output");
    //document.getElementById("result").innerHTML= k;
      document.getElementById("result_value").innerText = getFormattedNumber(k);
  }
/*
function compute()
{
    p = document.getElementById("principal").value;
    year = document.getElementById("years").value;
    int_rate =document.getElementById("rate").value;
    k =P*(1+int_rate)^year
    document.getElementById("result").innerHTML= k;
}

function years(year) {
  select_year = year;
}
window.onload = function years()
{
        var v_years = document.getElementById("years");
        var array_num =["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];
        for(var i=0;i<array_num.length;i++)
        {
        v_years.options.add(new Option(array_num[i]));
        }
        v_years.onchange = function(){
        for(var i in array_num[this.value])}
}*/
