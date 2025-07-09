const firstCard = document.getElementById('main1');
const secondCard = document.getElementById('main2');
const thirdCard = document.getElementById('main3');
const fourthCard=document.getElementById('main4')

async function fetchDataAndDisplay() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const products = data.products;

        if (products.length >= 3) {
            firstCard.textContent = products[0].title;
            secondCard.textContent = products[1].title;
            thirdCard.textContent = products[2].title;
            fourthCard.textContent=products[3].title;
        } else {
            console.error("Not enough products to display.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchDataAndDisplay();