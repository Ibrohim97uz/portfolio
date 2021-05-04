


    
function setDate(){


    let date = new Date();
    let hours = document.querySelector('.hours') ; 
    let  minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds'); 
   
    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
   
    

    if (hours.innerText.length < 2){
        hours.innerText = "0" + hours.innerText;
    } 
    if (minutes.innerText.length < 2){
        minutes.innerText = "0" + minutes.innerText;
    } 
    if (seconds.innerText.length <2){
        seconds.innerText = "0" + seconds.innerText;
    } 
   
  
}





setDate();
setInterval( 
    function(){
        setDate()

    },1000
); 