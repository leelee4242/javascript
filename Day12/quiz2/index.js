const span = document.querySelector("span")
const input = document.querySelector("input")
input.addEventListener("input", (x) => {
    const length = x.target.value.length
    span.innerHTML = length + "/6"
    span.style.color = length > 6 ? "green" : "gray"
})

