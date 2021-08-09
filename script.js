const no = document.querySelector(".number");
const btn =document.querySelector(".generate");

const randomNo = ()=>{
const randomno = Math.floor(Math.random()*5+10+3-4);
no.innerHTML = randomno;};


btn.addEventListener("click",randomNo);

randomNo();

