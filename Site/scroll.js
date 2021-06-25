let films = document.querySelector('.films');
let tv = document.querySelector('.tv');
let container = document.querySelector('.container');
let containerTV = document.querySelector(".containerTV");


films.addEventListener('click', ()=>{
    container.style.display="block";
    containerTV.style.display="none";
    films.style.color ='red';
    tv.style.color ='black';
    films.style.borderBottom='3px solid red';
    tv.style.borderBottom='none';
    
})


tv.addEventListener('click', ()=>{
    container.style.display='none';
    containerTV.style.display='block';
    tv.style.color ='red';
    films.style.color ='black';
    tv.style.borderBottom=' 3px solid red';
    films.style.borderBottom='none';
})
