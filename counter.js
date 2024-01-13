var current = document.getElementById("counter");
let count = parseInt(current.innerHTML);
const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    count=0;
    current.innerHTML = count;
    
});

const decrease=document.getElementById("decrease");
decrease.addEventListener("click",function(){
    count--;
    current.innerHTML = count;
});

const increase=document.getElementById("increase");
increase.addEventListener("click",function(){
    count++;
    current.innerHTML = count;
});