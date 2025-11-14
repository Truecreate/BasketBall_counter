let HomeScore = 0;
let GuestScore = 0;

let home = document.getElementById("Home_score")
let guest = document.getElementById("Guest_score")


function HomeScMan1 () {
    HomeScore += 1;
    home.textContent = HomeScore;
}
function HomeScMan2 () {
    HomeScore += 2;
    home.textContent = HomeScore;
}
function HomeScMan3 () {
    HomeScore += 3;
    home.textContent = HomeScore;
}


function GuestScMan1 () {
    GuestScore += 1;
    guest.textContent = GuestScore;
}

function GuestScMan2 () {
    GuestScore += 2;
    guest.textContent = GuestScore;
}
function GuestScMan3 () {
    GuestScore += 3;
    guest.textContent = GuestScore;
}