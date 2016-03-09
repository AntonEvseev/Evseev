
var p = 0; 
var memory = 0;
var f = 0; 
var calcTablo = document.getElementById("result");
function clicButton(num){ 
	if (p == 0) {
	if(calcTablo.value == "0"){
		calcTablo.value = num;
			}else{
				calcTablo.value = calcTablo.value + num;
	}
	}else {
			calcTablo.value = "";
			calcTablo.value = num;
			p = 0;
		}
	}
function operations(fNum){ 
		if (f > 0){
			output();
		}
		f = fNum;
		p = 1;
		memory = parseFloat(calcTablo.value);
	}
function output() {	
	p = 1;
		if (f == 1){
			calcTablo.value = memory + parseFloat(calcTablo.value);
		}else if (f == 2) {
			calcTablo.value = memory - parseFloat(calcTablo.value);
		}else if (f == 3) {
			calcTablo.value = memory * parseFloat(calcTablo.value);
		}else if (f == 4){ 
			if (parseFloat(calcTablo.value) == 0){
				calcTablo.value="Ошибка!На ноль делить нельзя!";
			}else {
				calcTablo.value = memory / parseFloat(calcTablo.value);
			}
		}
	f = 0;
}
function decimal(){ 
	 if(p!== 0){   
         calcTablo.value = "0.";
			p = 0;
   }else {
			if (calcTablo.value.indexOf(".")==-1){
				calcTablo.value = calcTablo.value + ".";
			}
		}
   }        
function res(){ 
		calcTablo.value = "0";
		p = 0;  
		memory = 0;
		f = 0;
}
function invers() {
		calcTablo.value = parseFloat(calcTablo.value) * -1;
	}
document.getElementById("point").onclick = decimal;
document.getElementById("equal").onclick = output;
document.getElementById("inversion").onclick = invers;
document.getElementById("reset").onclick = res;
var number = document.getElementsByName("numberButton");
for (var i=0; i < number.length; i++){
	number[i].onclick = function(){
		clicButton(this.value);
	}
}
var numberFunc = document.getElementsByName("functionalButton");
for (var i=0; i < numberFunc.length; i++){
	numberFunc[i].onclick = function(){
		operations(Number(this.id)); 
	}
}
