const workButtons = document.querySelectorAll(".work_button");
const workCards = document.querySelectorAll(".work_card");

for (let i = 0; i < workButtons.length; i++) {
    workButtons[i].addEventListener("click", () => { 
        for (let j = 0; j < workButtons.length; j++) {
            workCards[j].classList.add("work_card_hid")
            workButtons[j].classList.remove("work_button_active")
        };
        workCards[i].classList.remove("work_card_hid");
        workButtons[i].classList.add("work_button_active");
    })
}