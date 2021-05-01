document.querySelector('.form-validation__btn').addEventListener('click', function () {
    myText();
    myPassword();
})

function myText() {
    let errElementi, xabar, qiymat;
    errElementi = document.querySelector('.form-validation__login');
    xabar = document.querySelector('#err');
    qiymat = document.querySelector('.form-validation__login').value;

    try {
        if (qiymat == '') {
            throw 'bo\'sh'
        }
        
        if (qiymat.length > 0) {
            errElementi.classList.add('valid');
            errElementi.classList.remove('err');
            xabar.innerHTML = '';
        }
       
    } catch (e) {
        xabar.innerHTML = 'login ' + e;
        errElementi.classList.add('err')
        errElementi.classList.remove('valid')
    }

}
function myPassword(){
    let message,errElement,valuep;
message = document.querySelector('#err2');
errElement= document.querySelector('.form-validation__password');
valuep = document.querySelector('.form-validation__password').value;


try {
    if(valuep ==''){
        throw 'bo\'sh'
    }
    if(valuep.length>0){
        errElement.classList.remove('err');
        errElement.classList.add('valid');
        message.innerHTML='';
    }
}
catch(e){
    message.innerHTML='parol '+e;
    errElement.classList.remove('valid');
    errElement.classList.add('err');


}
}