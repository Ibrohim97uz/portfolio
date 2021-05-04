document.querySelector('.header__logo').addEventListener('click', function () {
    document.querySelector('.header__link-mobile-outside').classList.toggle('show');
});



    
 function setDate(){


    let date = new Date();
    let hours = document.querySelector('.hours') ; 
    let  minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds'); 
    let day = document.querySelector('.day');
    let month = document.querySelector('.month');
    let year = document.querySelector('.year'); 

    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
    day.innerText = date.getDate();
    month.innerText = date.getMonth();
    year.innerText = date.getFullYear();

    if (hours.innerText.length < 2){
        hours.innerText = "0" + hours.innerText;
    } 
    if (minutes.innerText.length < 2){
        minutes.innerText = "0" + minutes.innerText;
    } 
    if (seconds.innerText.length <2){
        seconds.innerText = "0" + seconds.innerText;
    } 
    if (day.innerText.length < 2){
        day.innerText = "0" + day.innerText;
    } 
    if (month.innerText.length <2){
        month.innerText = "0" + month.innerText;
    } 
  
}
setDate();
setInterval( 
    function(){
        setDate()

    },1000
); 


