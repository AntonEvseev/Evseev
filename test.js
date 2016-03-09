function checkTest(){
		var s = document.forms.test.getElementsByTagName("input");
		var sum = 0;
		var sumPercent = 0;
		var t1 = 0;
		var t2 = 0;
	for (var i=0; i < s.length; i++){
		if (s[i].type == "radio"){
			if(s[i].checked) {
				if(i==0 || i==6 || i==11){
					sum = sum + 1;                 
				}                   
			}
		}
		if (s[i].type == "checkbox"){
			if(s[i].checked) {
				if (s[i].name == "table"){
					if(i==13 || i==15){
					t1 = t1+0.5;
					}else {
					t1 = t1-0.5;
					}
				}
				if (s[i].name == "form"){
					if(i==16 || i==17){
					t2 = t2+0.5;
					}else {
					t2 = t2-0.5;
					}
				}
			}
		}
	}
	sum = sum + Math.max(t1,0) + Math.max(t2,0);
     sumPercent = (sum / 5) * 100;
         switch (true){
            case sumPercent <= 100:
               alert("Ваш результат: " + sum + " балла(ов), " + "что составляет " + sumPercent + "% от правильных ответов");
            break;
            default:
               alert("Ты бог!");
		}
	}
document.getElementById("resbutton").onclick = checkTest;