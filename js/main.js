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
    data.forEach(({ id, title, description, price, image }) => {
        let card = document.createElement("div")
        card.className = "col-3"
        card.innerHTML = `
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"${title}></h5>
             <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">${price}</a>
        </div>
        `

        card.addEventListener("click", () => singleRoute(id))
        productsWrapper.appendChild(card)
    })
}

function singleRoute(id) {
    window.open(`/pages/prodact.html?id=${id}`, "_self")
}
