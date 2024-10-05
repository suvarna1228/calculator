const display = document.getElementById("display");

function appendToDIsplay(input){
   display.value += input;
}

function calculate(){
  try{
    display.value =eval(display.value);
 }
 catch(error){
    display.value = "Erorr!";
 }
  
}

function clearDisplay(){
    display.value = "";
}