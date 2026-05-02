/* -------- QUIZ -------- */
function checkAnswer(ans) {
    let result = document.getElementById("result");
    result.innerHTML = (ans === 4) ? "✅ Correct" : "❌ Wrong";
}

/* -------- CAROUSEL -------- */
let images = [
    "https://picsum.photos/id/1015/200/150",
    "https://picsum.photos/id/1016/200/150",
    "https://picsum.photos/id/1018/200/150"
];

let i = 0;

function next() {
    i = (i + 1) % images.length;
    document.getElementById("img").src = images[i];
}

function prev() {
    i = (i - 1 + images.length) % images.length;
    document.getElementById("img").src = images[i];
}

/* -------- API PRODUCTS -------- */
function loadProducts() {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(p => {
            output += `
                <div class="product">
                    <img src="${p.image}">
                    <h4>${p.title.substring(0,15)}...</h4>
                    <p>₹ ${p.price}</p>
                </div>
            `;
        });

        document.getElementById("products").innerHTML = output;
    })
    .catch(err => console.log(err));
}
