let popup=document.querySelector('.popup');
let popupToogle = document.querySelector('.but');
let popupClose =document.querySelector('.popup__close');


console.log(popupToogle);
console.log(popup);

 popupToogle.addEventListener('click',()=>
{
    popup.style.opacity=1;
    popup.style.visibility='visible';
} );

popupClose.addEventListener('click',()=>{
    popup.style.opacity=0;
    popup.style.visibility='hidden';
})

popup.onclick=function(e){
    if(e.target==popup){
        popup.style.opacity=0;
        popup.style.visibility='hidden';
    }
}


