// const form = document.querySelector(".form")
// const inpUsername = document.querySelector(".inp-username")
// const inpPassword = document.querySelector(".inp-password")
// const API_URL = "https://dummyjson.com/auth/login"


// form.addEventListener("submit", async (event) => {
//     event.preventDefault()
//     let user = {
//         username: inpUsername.value,
//         password: inpPassword.value,
//     }
//     await fetch(API_URL, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(res => res.json())
//         .then(res => {
//             if (res.message === "Invalid credentials") {
//                 alert("username or password is incorrect")
//             } else {
//                 console.log(res);
//                 localStorage.setItem("token", res.token)
//                 window.open("/index.html", "_self")
//             }
//         })
//         .catch(err => console.log(err))
// })