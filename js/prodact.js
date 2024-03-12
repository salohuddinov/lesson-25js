const AIP_URL = "https://fakestoreapi.com/products/"
const podactImage = document.querySelector(".podact-image")


async function fetchSingleUser(api) {
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")

    let data = await fetch(`${api}/${id}`)
    data
        .json()
        .then(res => SingleUser(res))
        .catch(err => console.log(err))
}

fetchSingleUser(AIP_URL)

function SingleUser({ image }) {
    podactImage.src = image
}
