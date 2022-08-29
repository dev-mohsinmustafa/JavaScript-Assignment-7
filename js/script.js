//Output / Result show karwany kay lay 
function showoutput(output){
    document.getElementById("output").innerHTML =output;

}

//Output / Result  ko clear kary kay lay
function clearOutput(){
    document.getElementById("output").innerHTML=" ";
    
    
}

//if else  waly button par ye function work ho ga 


//Get Name of today with if else statement
function ifElseStatement(){ 
   
    var now = new Date();
    var today = now.getDay();

    if(today === 0){                       //ye to abi humary pass 6 condition hai hum nay is ko easliy lak laya lakin agar yehi humary pass hundered ye is sy bi zayada ho to hum  itni condition dy gy to hum in saab sy bachny kay lay Switch Statement ko use karty hai.Jo kay nachy baty gy Switch waly button may
        alert("It's Sunday")
    }
    else if(today === 1){
        alert("It's Monday")
    }
    else if(today === 2){
        alert("It's Tuesday")
    }
    else if(today === 3){
        alert("It's Wednesday")
    }
    else if(today === 4){
        alert("It's Thursday")
    }
    else if(today === 5){
        alert("It's Firday")
    }
    else if(today === 6){
        alert("It's Saturday")
    }
    showNotification("Have a nice day","success"); //ye Function Hum nay nachy baya howa hai hum sairf is Function ma ye is may ( ) msg or type ko pass kar rahy hai nachy bany wovy function may 
    
}


//Switch waly button par ye function work ho ga

function switchStatement(){
    
    var now = new Date();
    var today = now.getDay();

    switch(today){
        case 0:
            showoutput("It's Sunday");
            break;
        case 1:
            showoutput("It's Monday")
            break;  
        case 2:
            showoutput("It's Tuesday")
            break;
        case 3:
            showoutput("It's Wednesday")
            break;
        case 4:
            showoutput("It's Thursday")
            break;
        default:
            showoutput("It's Some other day")                  
    }

}


//For loop waly button par ye function work ho ga.
//ye sarif samajny kay lay banya hai button for loop hum pachy kar koch hai. 

function forLoopStatement(){
    for(var i = 0; i <=3; i++){
        output.innerHTML += i + "<br>"
    }

}
 
//While Loop waly button par ye function work ho ga.
//is ki working same opar waly For loop ki tarha hai bus is kay lakny ka traqa change ho ga
function whileLoopStatement(){
    var i = 0;
    while(i <=3){
        output.innerHTML += i + "<br>"
        i++;
     
     
    }

}

// Keep Asking the Name waly button par ye function work ho ga.
//ye hum do while loop sy kar rhay hai

function askingName(){
    do{
        var name = prompt("Please enter your name?")
        console.log(name)
    }
    while(name === null || name === "");
    showoutput(name)
    showNotification("Thanks you","success")
}

//Don't Click waly button par ye function work ho ga.
function systemHack(){
    var i = 0;
    do{
        console.log(i)
        i++;           //ye agr hum i++ ko na laky to loop Infinite ho gy gi or kabi ni rokay gi.Is sy system full hack ho jy ga or working karna band kar dy ga 
    }while( i <= 50)    //ye ab tab tak chaly ga jab tak i ki vlaue 50 sy zayada na ho jy

}

//Fast Hacking Do not try 

// function systemHack(){
//     var i = 0;
//     do{
//         console.log(i)
                
//     }while( i <= 50)

// }
    
//

document.getElementById("clearOutputButton").onclick= function(){
    let outputBoxHTML = document.getElementById("output").innerHTML;
    audio.play();
    if(!outputBoxHTML.length){
        showNotification("It's already empty.","error") // is ("msg","type" ) may phaly hum massage baty hai or comma kay bad hum type baty hai
    }else{
        clearOutput(); //is kay matlab kay output agr to clear ho jati hai to ye show karway 
        showNotification("Output / Result box been cleared.","success") 
    }
}

//Toastify custom Function

function showNotification( msg ,type){

    let bgColor;
    if(type === "success"){
        bgColor = "linear-gradient(to right,#1D976C,#93F9B9)"
    }
    else if(type === "error"){
        bgColor ="linear-gradient(to right,#93291e,#ed213a)"
    }
    else{
        bgColor ="#000"
    }
                              //hum ye  Switch statement sy bi kar sakty hai
    // switch (type) {  
    //     case" success":
    //         bgColor = "linear-gradient(to right,#1D976C,#93F9B9)"
    //         break;
    //     case "error":
    //         bgColor ="linear-gradient(to right,#93291e,#ed213a)"
    //         break;
    
    //     default:
    //         bgColor= "#000";
    //         break;
    // }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
      }).showToast();
}

 
// Agar audio ko play ye pause karna hai function kat through taab ye use kary hai. 

// var audio = document.getElementById("audio");
// var playBtn =document.getElementById("playBtn")
// var count = 0;   

//function musicplay(){
    //if(count == 0){
        //count = 1;
       // audio.play();
    //}else{
      //  count = 0;
        //audio.pause();
    //}

//}

