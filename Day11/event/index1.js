const button = document.querySelector("button")

button.addEventListener("click", () => {
    alert("minus")
})

button.addEventListener("click", () => {
    alert("puls")
})

const addButton = document.querySelector(",add")
addButton.addEventListener("click", () => {
    const div = document.createElement("div")
    div.innerHTML = ""
    document.body.insertAdjacentHTML("beforeend", `<div> <div>`)
})

// 정답..
const minus = document.querySelector(".minus")
const num = document.querySelector("num")
const plus = document.querySelector(".puls")

//플러스 클릭하면  num의 숫자가 하나 오름
plus.addEventListener("click", () => {
    num.innerHTML = +num.innerHTML + 1
})

minus.addEventListener("click" , () => {
    const num = +num.innerHTML;
    if (num == 0) {
        num.innerHTML = 0;
    } else {
        num.innerHTML = num -1;
    }
    num.innerHTML = nowNumber -1
})

//0 미만으로 마이너스 안되도록 막아주고
//10 이상이면  num의 글씨 색상이 파란색으로 바뀌기
//1~9이면 num의 글씨 색상이 검은색으로 바뀌기






