
//generate random number

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    const generateBtndisplay = document.getElementById("generateBtndisplay");
    const generateBtndisplayNum =Math.round( Math.random()*9000)+1000;
   generateBtndisplay.value = generateBtndisplayNum ;
})

// input keypad number 

document.getElementById("btn9").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '9';
})
document.getElementById("btn8").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '8';
})
document.getElementById("btn7").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '7';
})
document.getElementById("btn6").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '6';
})
document.getElementById("btn5").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '5';
})
document.getElementById("btn4").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '4';
})
document.getElementById("btn3").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '3';
})
document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '2';
})
document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '1';
})
document.getElementById("btn0").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  += '0';
})
document.getElementById("btnC").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  = '';
})
document.getElementById("btnSlice").addEventListener("click", function(){
    document.getElementById("submitBtndisplay").value  = 
    document.getElementById("submitBtndisplay").value .slice(0, -1);
})

//  warning noty  && tryleft function

notyfyWrong.style.display = "none";
notyfySucsess.style.display = "none";
let tryLeft = document.getElementById('try-left');
let tryLeftCount = parseInt(tryLeft.innerText);
let submitInputValue = submitBtndisplay.value;

document.getElementById("submitBtn").addEventListener("click", function(){
    if(generateBtndisplay.value  == "" ){
        document.getElementById("notyfySucsess").style.display = "none";
       document.getElementById("notyfyWrong").style.display = "none";
    }else if (generateBtndisplay.value == submitBtndisplay.value) {
       document.getElementById("notyfySucsess").style.display = "block";
       document.getElementById("notyfyWrong").style.display = "none";
       if(tryLeftCount == 3){
        tryLeft.innerText = 3;
        }
    }
    else{     
        document.getElementById("notyfySucsess").style.display = "none";
        document.getElementById("notyfyWrong").style.display = "block";
        if(tryLeftCount == 3){
            tryLeft.innerText --;
        }
        
    }
    if( tryLeft.innerText== 0){
        submitBtn.disabled  = true;
        submitBtn.style.backgroundColor = "red";
        alert("Your Input Number Is Wrong");
    }   

    

})
