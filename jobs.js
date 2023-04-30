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
    c();
};
//chennai
const chennai= document.getElementById("Chennai");
chennai.onclick= function(){
    filter("chennai")
    c();
};
//hyderabad
const hyderabad= document.getElementById("Hyderabad");
hyderabad.onclick= function(){
    filter("hyderabad")
    c();
};
//new delhi
const delhi= document.getElementById("Delhi");
delhi.onclick= function(){
    filter("delhi")
    c();
};
//noida
const noida= document.getElementById("Noida");
noida.onclick= function(){
    filter("noida")
    c();
};
//signup
const close=document.getElementById('close');
login.onclick=function(){
signin.classList.remove('content');
grid.classList.add('opaque');
c();
};
close.onclick=function(){
    signin.classList.add('content');
    grid.classList.remove('opaque');

}
//close navbar
function c(){
    const z= document.getElementById('hello');
    const d=document.getElementById('navbarSupportedContent');
    z.classList.add('collapsed')
    z.setAttribute('aria-expanded','false')
    d.classList.remove('show')
};
//onclick
const h=document.getElementById('end');
document.addEventListener('click',(e)=>{
    if(!h.contains(e.target)){
        c();
    }
    });
   //onscroll 
document.onscroll=function(){
    c();
};
