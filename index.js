let homeCountEl = document.getElementById("home-el")
let hCount = 0

let guestCountEl = document.getElementById("guest-el")
let gCount = 0

function homeAdd1() {
    hCount += 1;
    homeCountEl.textContent = hCount;
}

function homeMin1() {
    hCount -= 1;
    homeCountEl.textContent = hCount;
}

function homeAdd2() {
    hCount += 2;
    homeCountEl.textContent = hCount;
}

function homeAdd3() {
    hCount += 3;
    homeCountEl.textContent = hCount;
}

function homeReset() {
    hCount = 0;
    homeCountEl.textContent = hCount;
}

//team B scoreboard

function guestAdd1() {
    gCount += 1;
    guestCountEl.textContent = gCount;
}

function guestMin1() {
    gCount -= 1;
    guestCountEl.textContent = gCount;
}

function guestAdd2() {
    gCount += 2;
    guestCountEl.textContent = gCount;
}

function guestAdd3() {
    gCount += 3;
    guestCountEl.textContent = gCount;
}

function guestReset() {
    gCount = 0;
    guestCountEl.textContent = gCount;
}