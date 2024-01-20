let pageWidth;
const classes = ["card services__card row__first column__first",
                 "card services__card row__first column__second",
                 "card services__card row__first column__third",
                 "card services__card row__second column__first",
                 "card services__card row__second column__second",
                 "card services__card row__second column__third",
                 "card services__card row__third column__middle--first",
                 "card services__card row__third column__middle--second"];

function getPageWidth() {
    pageWidth = window.innerWidth;
}

// Get elemetns in a node list
const cards = document.querySelectorAll(".services__card");

// Initial log and change on page load
getPageWidth();
// If it is small then remove the classes
if (pageWidth <= 97*16 && cards[0].classList != "card services__card") {
    for (const item of cards) {
        item.classList = "card services__card"
    }
}


// Get elemetns in a node list
const elements = document.querySelectorAll(".services__card");

// Get all classes before smaller page


// Event listener so it tracks the changes on every resize
window.addEventListener('resize', (e) => {
    // Prevent reloading the page
    e.preventDefault();

    // Get the current page width
    getPageWidth();

    // If it is small then remove the classes
    if (pageWidth <= 97*16 && cards[0].classList != "card services__card") {
        for (const item of cards) {
            item.classList = "card services__card"
        }
    }

    // If it is back to normal then give back the original classes
    if (pageWidth > 97*16 && cards[0].classList == "card services__card") {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList = classes[i];
        }
    }
});
