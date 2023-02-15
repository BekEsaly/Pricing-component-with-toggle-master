const checkBtn=document.querySelector('#check');
const checkBox=document.querySelector('.check-box');

const pricesMonthly=[19.99, 24.99, 39.99];
const pricesAnnually=[199.99, 249.99, 399.99];
const contentItems=document.querySelectorAll('#price');


mainPrice();
function mainPrice(){
for (var i = 0; i < pricesMonthly.length; i++) {
    contentItems[i].innerText=pricesMonthly[i];
}
}
  
checkBtn.addEventListener('click',()=>{
    checkBtn.classList.toggle('toggle');
    checkBox.classList.toggle('changed');
    
    if (checkBtn.classList.contains('toggle')){
    for (var i = 0; i < pricesAnnually.length; i++) {
        contentItems[i].innerHTML=pricesAnnually[i];
    }
    }else{
        mainPrice();
    }
    }
)