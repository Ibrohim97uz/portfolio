document.querySelector('.qoshish').addEventListener('click', function(){
    var oyna = document.querySelector('.oyna');
    oyna.value=parseInt(oyna.value)+1;
} )


document.querySelector('.nolga').addEventListener('click',function(){
    var oyna = document.querySelector('.oyna');
    oyna.value=0;
})
