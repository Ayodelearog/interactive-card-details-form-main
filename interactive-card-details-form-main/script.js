"use strict";
const cardNumberInputEl = document.querySelector("#cardNumber");
const cardNumberDisplayEl = document.querySelector(".cardNumbers");

const cardNameInputEl = document.querySelector("#cardholderName");
const cardNameDisplayEl = document.querySelector(".cardName");

const cardMonthInputEl = document.querySelector("#card-month");
const cardMonthDisplayEl = document.querySelector(".cardMonthDisplay");

const cardYearInputEl = document.querySelector("#card-year");
const cardYearDisplayEl = document.querySelector(".cardYearDisplay");

const cardCvcInputEl = document.querySelector("#cvc");
const cardCvcDisplayEl = document.querySelector(".cvc");

const inputContEl = document.querySelector(".input-conts");
const cardNumCont = document.querySelector("#cardNumberContainer");

let errorTextEl = document.createElement("p");

const submitBtnEl = document.querySelector(".submit-btn");
const allInputEl = document.querySelectorAll("input");
const formEl = document.querySelector("form");
const thankYouPageEl = document.querySelector(".thankYouContainer");


// console.log(cardNumberDisplayEl, cardNumberInputEl);

cardNumberInputEl.addEventListener("keyup", (e) => {
    // console.log(!isNaN(e.target.value));
    if (!isNaN(e.target.value)) {
        cardNumberDisplayEl.innerText = e.target.value;
    }
    else {
        errorTextEl.innerText = "wrong format, numbers only";
        errorTextEl.classList.add("errorText");
        cardNumCont.appendChild(errorTextEl);
        cardNumberInputEl.classList.add("errorBorder");

    }
})

cardNameInputEl.addEventListener("keyup", (e) => {
    cardNameDisplayEl.innerText = e.target.value;
})

cardMonthInputEl.addEventListener("keyup", (e) => {
    if (!isNaN(e.target.value)) {
        cardMonthDisplayEl.innerText = e.target.value;
    }
    else { 
        errorTextEl.innerText = "wrong format, numbers only";
        errorTextEl.classList.add("errorText");
        cardMonthInputEl.parentElement.parentElement.appendChild(errorTextEl);
        cardMonthInputEl.classList.add("errorBorder");

    }
})

cardYearInputEl.addEventListener("keyup", (e) => {
    if (!isNaN(e.target.value)) {
        cardYearDisplayEl.innerText = e.target.value;
    }
    else { 
        errorTextEl.innerText = "wrong format, numbers only";
        errorTextEl.classList.add("errorText");
        cardYearInputEl.parentElement.parentElement.appendChild(errorTextEl);
        cardYearInputEl.classList.add("errorBorder");

    }
})

cardCvcInputEl.addEventListener("keyup", (e) => {
    if (!isNaN(e.target.value)) {
        cardCvcDisplayEl.innerText = e.target.value;
    }
    else {
        if (e.target.value === "")
        errorTextEl.innerText = "can't be blank";
        errorTextEl.classList.add("errorText");
        cardCvcInputEl.parentElement.parentElement.appendChild(errorTextEl);
        cardCvcInputEl.classList.add("errorBorder");

    }
})

submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target);
    // if (allInputEl.values === " ") {
    //     errorTextEl.innerText = "can't be blank";
    //     errorTextEl.classList.add("errorText");
    //     inputContEl.appendChild(errorTextEl);
    // }
    if (cardNameInputEl.value === "" || cardNumberInputEl.value === "" || cardMonthInputEl.value === "" || cardYearInputEl.value === "" || cardMonthInputEl.value === "") {
        errorTextEl.innerText = "can't be blank";
        errorTextEl.classList.add("errorText");
        inputContEl.appendChild(errorTextEl);

        
        // let monthErrorTextEl = document.createElement("p");
        // cardMonthInputEl.parentElement.parentElement.appendChild(monthErrorTextEl);
        // cardMonthInputEl.classList.add("errorBorder");
        // monthErrorTextEl.classList.add("errorText");

        // cardCvcInputEl.parentElement.appendChild(errorTextEl);
        // cardCvcInputEl.classList.add("errorBorder");
    }




    setTimeout(() => {
        errorTextEl.style.display = "none"
    }, 2000);


    formEl.style.display = "none";
    thankYouPageEl.style.display = "flex";
    // formEl.classList.toggle("hidden");
    // thankYouPageEl.classList.toggle("visible")

    // [...allInputEl].map((inputEl) => {
    //     if (inputEl.value === "") {
    //         // console.log(inputEl);
    //         errorTextEl.innerText = "can't be blank";
    //         inputEl.parentNode.appendChild(errorTextEl);
    //         // inputEl.appendChild(errorTextEl);
    //     }
    // })
    // for ( in allInputEl) {
        
    //     if (inputEl.valueOf === "") {
    //         console.log(inputEl);
    //         errorTextEl.innerText = "can't be blank";
    //         inputEl.parentElement.appendChild(errorTextEl);
    //     }
    // }
    
})