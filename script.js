const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    const generateBtndisplay = document.getElementById("generateBtndisplay").value;
    const generateBtndisplayNum = Math.floor(1000 + Math.random(generateBtndisplay.value) * 9000);
    console.log(generateBtndisplayNum);
    document.getElementById("generateBtndisplay").value = generateBtndisplayNum ;
})




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


notyfyWrong.style.display = "none";
notyfySucsess.style.display = "none";

document.getElementById("submitBtn").addEventListener("click", function(){
   
         
    if (generateBtndisplay.value == submitBtndisplay.value ) {
       document.getElementById("notyfySucsess").style.display = "block";
       document.getElementById("notyfyWrong").style.display = "none";
        
    }
    else{     
        document.getElementById("notyfySucsess").style.display = "none";
        document.getElementById("notyfyWrong").style.display = "block";
    }

})
