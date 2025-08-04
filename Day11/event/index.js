 const button = document.querySelector("button")



 button.addEventListener("click", () => {
    alert("ㅅㄱ")
 })


 //추가버튼을 클릭하면
 //새롭게 div태그로 아메리카노 라고 적힌 요소가 생성됨!

//  const button2 = document.querySelector("button")

//  button2.addEventListener("click", () => {
//     alert ("add")
//  })

 const addButton = document.querySelector(".add")
 addButton.addEventListener('click',() => {
    const div = document.createElement("div")
    div.innerHTML = "아메리카노"
    document.body.insertAdjacentHTML("beforeend", `<div>아메리카노<div>`)
 })