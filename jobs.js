const search=document.querySelector('.search input');
const grid=document.querySelector('.row');
const login=document.querySelector('#Signin');
const signin=document.querySelector('#login')
const filter= (term)=>{
Array.from(grid.children)
.filter((container)=>!container.textContent.toLowerCase().includes(term))
.forEach((container)=>container.classList.add('filtered'));

Array.from(grid.children)
.filter((container)=>container.textContent.toLowerCase().includes(term))
.forEach((container)=>container.classList.remove('filtered'));  

};
search.addEventListener('keyup',()=>{
    const term =search.value.trim().toLowerCase();
    filter(term);
});
//filter by location
const pune= document.getElementById("Pune");
pune.onclick= function(){
    filter("pune")
};
//chennai
const chennai= document.getElementById("Chennai");
chennai.onclick= function(){
    filter("Chennai")
};
//hyderabad
const hyderabad= document.getElementById("Hyderabad");
hyderabad.onclick= function(){
    filter("hyderabad")
};
//new delhi
const delhi= document.getElementById("Delhi");
delhi.onclick= function(){
    filter("delhi")
};
//noida
const noida= document.getElementById("Noida");
noida.onclick= function(){
    filter("noida")
};
//signup
const close=document.getElementById('close');
login.onclick=function(){
signin.classList.remove('content');
grid.classList.add('opaque');
};
close.onclick=function(){
    signin.classList.add('content');
    grid.classList.remove('opaque');
};
