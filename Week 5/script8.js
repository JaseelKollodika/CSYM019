function myInterval(){

    var element=document.getElementById('circle');
    var positionleft = element.offsetLeft;
    element.style.left = positionleft - 10 + 'px';
    
   // var circleOpacity=parseFloat(element.style.opacity);
   // element.style.opacity=circleOpacity-0.1;
};
function myIntervalright(){

    var element=document.getElementById('circle');
    var positionleft = element.offsetLeft;
    element.style.left = positionleft + 10 + 'px';
 
};
function myIntervalup(){

    var element=document.getElementById('circle');
    var positiontop = element.offsetTop;
    element.style.top = positiontop - 10 + 'px';
 
};
function myIntervaldown(){

    var element=document.getElementById('circle');
    var positiontop = element.offsetTop;
    element.style.top = positiontop + 10 + 'px';
 
};



function myKeyDown(event){
console.log(event.keyCode);
if(event.keyCode==37){
    
   //setInterval
   setTimeout(myInterval,1000);    
}
if(event.keyCode==39){
    
    setTimeout(myIntervalright,1000);     
 }
 if(event.keyCode==38){
    
    setTimeout(myIntervalup,1000);
     
 }
 if(event.keyCode==40){
    
    setTimeout(myIntervaldown,1000);
     
 }
     
 };
//else
//alert('not left arrow');


document.addEventListener('keydown',myKeyDown);
