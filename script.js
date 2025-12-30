let count = 0;
let countDisplay = document.getElementById("count");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");

inc.addEventListener("click",() => {
    count++;
    countDisplay.innerText = count;
});

dec.addEventListener("click",() => {
    if(count > 0) {
        count --;
        countDisplay.innerText = count;
    }
});

reset.addEventListener("click",() => {
    count = 0;
    countDisplay.innerText = count ;
});