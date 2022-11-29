"use strict"
const offerCards = document.querySelectorAll(".offer_card");
const offerButtons = document.querySelectorAll(".offer_button");
let i = 0;


window.addEventListener("load", () => { 
    setInterval(() => {
        for (let a = 0; a < offerCards.length; a++) {
            offerCards[a].classList.add("offer_card_hid")
        }
        offerCards[i].classList.remove("offer_card_hid");

        for (let b = 0; b < offerButtons.length; b++) {
            offerButtons[b].classList.remove("offer_button_active");
        }
        offerButtons[i].classList.add("offer_button_active");

        i++;
        
        if (i === offerCards.length) {
            i = 0;
        };
    }, 4000);
})


for (let j = 0; j < offerButtons.length; j++) {
    offerButtons[j].addEventListener("click", () => { 
        for (let k = 0; k < offerCards.length; k++) {
            offerCards[k].classList.add("offer_card_hid");
        }
        offerCards[j].classList.remove("offer_card_hid");
        for (let f = 0; f < offerButtons.length; f++) {
            offerButtons[f].classList.remove("offer_button_active");
        }
        offerButtons[j].classList.add("offer_button_active");
    })
}