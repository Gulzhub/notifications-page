const markAll = document.querySelector(".mark-all");
const cards = document.querySelectorAll(".card");
const num = document.querySelector(".number")

cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        e.target.classList.remove("unread");
        getNumber();

    })
});

function getNumber() {
    let count = 0;
    cards.forEach(function (card) {
        if (card.classList.contains("unread")) {
            count++;
        }
    });
    num.textContent = `${count}`;
}

getNumber();

markAll.addEventListener('click', function () {
    cards.forEach(function (card) {
        card.classList.remove("unread");
        getNumber();
    })
})