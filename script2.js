function myInterval(){

    var element=document.getElementById('circle');
    var positionleft=element.offsetLeft;
    element.style.left=positionleft-10+'px';
    
   // var circleOpacity=parseFloat(element.style.opacity);
   // element.style.opacity=circleOpacity-0.1;
};



function myKeyDown(event){
//console.log(event.keyCode);
if(event.keyCode==37){
    
   setInterval(myInterval,1000);
    
}else
alert('not left arrow');
};
document.addEventListener('keydown',myKeyDown);
