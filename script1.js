
function myClickEvent(){


   setInterval(myInterval,1000);
    // var element=document.getElementById('circle');
     //var circleOpacity=parseFloat(element.style.opacity);
 
   // element.style.opacity=circleOpacity+0.1;
    //element.style.opacity=circleOpacity-0.1;
   
   // element.style.opacity=1;
    //element.style.backgroundColor='blue';
    // alert('The button was pressed');

   // var circleOpacity=element.style.opacity;
   // console.log(circleOpacity);

  

//console.log(circleOpacity);
};
function myInterval(){

    var element=document.getElementById('circle');
    var positionleft=element.offsetLeft;
    element.style.left=positionleft-10+'px';
   // var circleOpacity=parseFloat(element.style.opacity);
   // element.style.opacity=circleOpacity-0.1;
};

function myLoadFunction(){
var element=document.getElementById('circle');
element.style.opacity=1;
document.addEventListener('keydown',myClickEvent);

//element.addEventListener('click',myClickEvent);


};


document.addEventListener('DOMContentLoaded',myLoadFunction);