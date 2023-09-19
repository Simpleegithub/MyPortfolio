let btn=document.getElementsByClassName('btn');

btn[0].addEventListener('click',function(e){
e.preventDefault();
})



let listitems=document.getElementsByClassName('papa');

let hambarger=document.getElementsByClassName('hambarger');

console.log(listitems);
console.log(hambarger);


hambarger[0].addEventListener('click',function(){
    listitems[0].classList.toggle('toggleclass')
})