const search=document.querySelector('.search input');
const filter= (term)=>{
console.log(term);
};
search.addEventListener('keyup',()=>{
    const term =search.value.trim();
    filter(term);
});
