const AIP_URL = "https://fakestoreapi.com/products/"
const productsWrapper = document.querySelector(".products-wrapper")
const loading = document.querySelector(".loading")


async function fetchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = "none"
        })
}

fetchData(AIP_URL)

function createCard(data) {
    data.forEach(({ id, rating, description, price, image }) => {
        let card = document.createElement("div")
        card.className = "col-3"
        card.innerHTML = `
        <div class="card__cl">
            <img src=${image} class="card-img-top" alt="...">
            <div class="card-body bottem">
                <h6 class="prodact__h6">Snack</h6>
                <p class="card-text">${description}</p>
                <div class="starres">
                    <div class="rating">
                        <input value="5" name="rate" id="star5" type="radio">
                        <label title="text" for="star5"></label>
                        <input value="4" name="rate" id="star4" type="radio">
                        <label title="text" for="star4"></label>
                        <input value="3" name="rate" id="star3" type="radio" checked="">
                        <label title="text" for="star3"></label>
                        <input value="2" name="rate" id="star2" type="radio">
                        <label title="text" for="star2"></label>
                        <input value="1" name="rate" id="star1" type="radio">
                        <label title="text" for="star1"></label>
                    </div>
                    <h4 class="look">(${rating.rate})</h4>
                </div>
                <div class="bottem__tex">
                    <h3 class="text__f">By</h3>
                    <h3 class="text__s">NestFood</h3>
                </div>
                <div class="klon">
                    <h2 class="prodact__btn">$ ${price}</h2>
                    <h2 class="prodact__btm">$ ${rating.count}</h2>
                </div>
                <button class="card__btn">
                    <img class="cardbtn__img" src="./image/shop.svg" alt="dsggfd">
                    <h5 class="cardbtn__tex">Add</h5>
                   </button>
            </div>
        </div>
        `

        card.addEventListener("click", () => singleRoute(id))
        productsWrapper.appendChild(card)
    })
}


function singleRoute(id) {
    window.open(`/pages/prodact.html?id=${id}`, "_self")
}


// let isLogin = localStorage.getItem("token")

// function checkIsLogin() {
//     if (!isLogin) {
//         window.location.replace("/pages/login.html")
//     }
// }
// checkIsLogin()