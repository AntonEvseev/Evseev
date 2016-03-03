function run1() {
document.frm.result.value +="1";
}
function run2() {
document.frm.result.value +="2";
}
function run3() {
document.frm.result.value +="3";
}
function run4() {
document.frm.result.value +="4";
}
function run5() {
document.frm.result.value +="5";
}
function run6() {
document.frm.result.value +="6";
}
function run7() {
document.frm.result.value +="7";
}
function run8() {
document.frm.result.value +="8";
}
function run9() {
document.frm.result.value +="9";
}
function run0() {
document.frm.result.value +="0";
}
function runplus() {
document.frm.result.value +="+";
}
function rundevision() {
document.frm.result.value +="/";
}
function runmultiply() {
document.frm.result.value +="*";
}
function runminus() {
document.frm.result.value +="-";
}
function rundecimal() {
document.frm.result.value +=".";
}
function rundel() {
document.frm.result.value ="";
}
function runneg() {   
 document.frm.result.value ="-";
}
function calculate() {
   var eval1 = eval(document.frm.result.value);
   if(Math.abs(eval1) == Infinity) alert('Деление на ноль!');
   else document.frm.result.value = eval1;
}
function showResults()
        {
            
            var i = 0;
            if(document.getElementById('choice11').checked == true)
            {
                i++;
            }
            if(document.getElementById('choice23').checked == true)
            {
                i++;
            }
            if(document.getElementById('choice34').checked == true)
            {
                i++;
            }
            if(document.getElementById('choice41').checked == true)
            {
                i=i-0.5;
            }
            if(document.getElementById('choice43').checked == true)
            {
               i=i-0.5;
            }
            if(document.getElementById('choice42').checked == true)
            {
                i=i+0.5;
            }
            if(document.getElementById('choice44').checked == true)
            {
            i=i+0.5;
            }
            if(document.getElementById('choice51').checked == true)
            {
                i=i+0.5;
            } 
             if(document.getElementById('choice52').checked ==true)
             {
             i=i+0.5;
             }
             if(document.getElementById('choice53').checked == true)
            {
                i=i-0.5;
            } 
             if(document.getElementById('choice54').checked ==true)
             {
             i=i-0.5;
             }
                           
            alert("Вами набрано " + i + " баллов" + " из 5 возможных!");
         } 