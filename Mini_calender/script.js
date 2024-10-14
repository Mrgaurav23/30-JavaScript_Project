let monthNameEl = document.querySelector(".month-name");
let dayNameEl = document.querySelector(".day-name");
let dayNumberEl = document.querySelector(".day-number");
let yearEl = document.querySelector(".year");

let dateElement = new Date();

monthNameEl.innerText = dateElement.toLocaleString("en",{
    month:"long"
});

dayNameEl.innerText = dateElement.toLocaleString("en",{
    weekday:"long"
});

dayNumberEl.innerText = dateElement.getDate();

yearEl.innerText = dateElement.getFullYear();