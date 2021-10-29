
let footerBtn = document.querySelector('.footer-block');
let footerblik = document.querySelector('.footer-back');

footerBtn.addEventListener('click',function(){
    if(footerBtn.classList.contains('show-text')){
        footerblik.setAttribute('style','display: block');
        footerBtn.classList.remove('show-text');
    } else {
        footerBtn.classList.add('show-text');
        footerblik.setAttribute('style','display: none');
    }
    
})

//test

let question = document.querySelectorAll('.question');
let pagBlock = document.querySelector('.question-pag-block');
let number = document.querySelector('.question-pag-number');
let i = 1;

for(let item of question){
    let button = item.querySelectorAll('.btn');
    for(let btn of button){
        btn.addEventListener('click',function(){
            if(btn.classList.contains('btn-next')){
                item.classList.remove('active');
                item.nextElementSibling.classList.add('active');
                i+=1;
                number.innerHTML = i;
            }
            if(item.classList.contains('birth')){
                let theForm = document.birthForm;
                if(checkInputs(theForm)) {
                    item.classList.remove('active');
                    item.nextElementSibling.classList.add('active');
                    i+=1;
                    number.innerHTML = i;
                } else {
                    item.classList.add('active');
                }
            }

            if(item.classList.contains('last-question')){
                let theForm = document.birthForm;
                let age = checkInputs(theForm);
                if(age >= 18 && age <= 35){
                    item.classList.remove('active');
                    let block = document.querySelector('.first');
                    block.classList.add('active');
                } else if (age > 35 && age <= 45 ) {
                    item.classList.remove('active');
                    let block = document.querySelector('.second');
                    block.classList.add('active');
                } else {
                    item.classList.remove('active');
                    let block = document.querySelector('.third');
                    block.classList.add('active');
                }
                i+=1;
                number.innerHTML = i;
            }

            if(item.classList.contains('first') || item.classList.contains('second') || item.classList.contains('third')){
                item.classList.remove('active');
                let block = document.querySelector('.final');
                block.classList.add('active');
                pagBlock.setAttribute('style','display:none');
            }
        })
    }
}

function checkInputs(form){
    let age = 0;
    if (form[0].value == "0") {
        return false
    } else if (form[1].value == "0") {
        return false
    } else if (form[2].value == "0") {
        return false
    } else {
        let day = Number.parseInt(form[0].value);
        let month = Number.parseInt(form[1].value)-1;
        let year = Number.parseInt(form[2].value);
        let date = new Date(year,month,day);
        age = getAge(date);
        return age;
    }
}

function getAge (birthDate) {
    let age = ((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0;
    return age;
}

