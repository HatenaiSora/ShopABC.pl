

//hamburger
let hamburgerButton = document.getElementById("hamburger");
let mainMenu = document.getElementById("main-menu");
let nav = document.getElementById("nav");

hamburgerButton.addEventListener("click",function(){
let menuButton = hamburgerButton.querySelector("i");

    if (menuButton.classList == "fas fa-bars") {
        mainMenu.style.display = "flex";
        hamburgerButton.querySelector("i").classList.remove("fa-bars");
        hamburgerButton.querySelector("i").classList.add("fa-times");
    }else if (menuButton.classList == "fas fa-times") {
        mainMenu.style.display = "none";
        hamburgerButton.querySelector("i").classList.remove("fa-times");
        hamburgerButton.querySelector("i").classList.add("fa-bars");
    }

});

// prices scroll

let pricesScroll = document.getElementById("prices_scroll");
pricesScroll.scrollLeft = (pricesScroll.scrollWidth - pricesScroll.clientWidth) / 2

// Calculator
let productsInput = document.getElementById("products-number");
let ordersInput = document.getElementById("orders-number");
let productsPrice = document.querySelector(".calculator-prices").firstElementChild;
let ordersPrice = document.querySelector(".calculator-prices").children[1];

let productsSum = 0;
let ordersSum = 0;
let accountantSum = 35;
let creditCardSum = 5;
let selectSum = 0;

let updateSum = function() {
    sum = (+productsSum) + (+ordersSum) + (+selectSum) + (+(accountantSum*accountantIsChecked)) + (+(creditCardSum*creditCardIsChecked));
    document.getElementById("total-sum").innerText = "$" + sum;
};

productsInput.addEventListener("input",function(){
    productsInput.style.color = "black";

    productsPrice.children[1].innerText = (+productsInput.value).toFixed() + " * $0.5";
    productsPrice.children[2].innerText = "$ " + (productsInput.value*0.5).toFixed(2);
    productsPrice.classList.remove("hidden");

    productsSum = (productsInput.value*0.5).toFixed(2);

    if(productsInput.value.length == 0) {
    productsPrice.classList.add("hidden");
    }
    updateSum();
});

ordersInput.addEventListener("input",function(){
    ordersInput.style.color = "black";
    
    ordersPrice.children[1].innerText = (+ordersInput.value).toFixed(2) + " * $0.25";
    ordersPrice.children[2].innerText = "$ " + (ordersInput.value*0.25).toFixed(2);
    ordersPrice.classList.remove("hidden");
    ordersSum = (ordersInput.value*0.25).toFixed(2);

    if(ordersInput.value.length == 0) {
    ordersPrice.classList.add("hidden");
    }
    updateSum();
});

let select = document.querySelector(".calculator_form--out");
let optionsList = document.querySelector(".calculator_form--in");

select.addEventListener("click",function(){
    optionsList.classList.toggle("hidden");
    if(select.style.backgroundImage == 'url("./images/icons/Arrow\ Up.svg")') {
        select.style.backgroundImage = 'url("./images/icons/Arrow\ Down.svg")';
    }else {
        select.style.backgroundImage = 'url("./images/icons/Arrow\ Up.svg")';
    }
});

let placeholder = document.getElementById("placeholder");
let basicOption = document.querySelector(".calculator_form--in").firstElementChild;
let proOption = document.querySelector(".calculator_form--in").children[1];
let premiumOption = document.querySelector(".calculator_form--in").children[2];
let optionPrice = document.querySelector(".calculator-prices").children[2];

basicOption.addEventListener("click",function(){
    placeholder.innerText = "Podstawowy";
    placeholder.style.color = "#000000";
    console.log("ya basic");
    optionPrice.children[1].innerText = "Podstawowy";
    optionPrice.children[2].innerText = "$0";
    optionPrice.classList.remove("hidden");
    selectSum = 0;
    updateSum();
});
proOption.addEventListener("click", function(){
    placeholder.innerText = "Profesjonalny";
    placeholder.style.color = "#000000";
    optionPrice.children[1].innerText = "Profesjonalny";
    optionPrice.children[2].innerText = "$25";
    optionPrice.classList.remove("hidden");  
    selectSum = 25;
    updateSum();
});
premiumOption.addEventListener("click",function(){
    placeholder.innerText = "Premium";
    placeholder.style.color = "#000000";
    optionPrice.children[1].innerText = "Premium";
    optionPrice.children[2].innerText = "$60";
    optionPrice.classList.remove("hidden"); 
    selectSum = 60; 
    updateSum();
});

let accountantCheck = document.querySelector(".calculator_form label:first-of-type").firstElementChild;
let creditCardCheck = document.querySelector(".calculator_form label:last-of-type").firstElementChild;

let accountantPrice = document.querySelector(".calculator-prices").children[3];
let creditCardPrice = document.querySelector(".calculator-prices").children[4];
let accountantIsChecked = false;
let creditCardIsChecked = false;

accountantCheck.addEventListener("click",function(){
    accountantPrice.classList.toggle("hidden");

    if(accountantIsChecked == false) {
        accountantIsChecked = true;
    }else {
        accountantIsChecked = false;
    }
    updateSum();
});

creditCardCheck.addEventListener("click",function(){
    creditCardPrice.classList.toggle("hidden");

    if(creditCardIsChecked == false) {
        creditCardIsChecked = true;
    }else {
        creditCardIsChecked = false;
    }
   updateSum();
});


