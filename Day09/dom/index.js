// document [html 타입]
// element - innerHTML [tag 타입]

//1. queryselector/querySelectorAll : 찾아주세요
const a = document.body.querySelector(".hi")
console.log(a)

const b = document.body.querySelector(".monday")
console.log(b)

const c = document.body.querySelector(".feeling")
console.log(c)

// const a = document.body.querySelector(.hi)
// a.innerHTML = "수고하세용"


const d = document.body.querySelector(".text")
d.innerHTML = "내일 화요일"

//time 현재시간 나오도록
const f = document.body.querySelector(".time")
f.innerHTML = new Date().toLocaleTimeString()

const month = document.body.querySelector(".month")
month.innerHTML = new Date().getMonth() +1  + "월"

const date = document.body.querySelector(".date")
date.innerHTML = new Date().getDate() + "일"

const day = document.body.querySelector(".day")
const dayList = ["일" , "월", "화", "수", "목", "금", "토"]
day.innerHTML = dayList[new Date().getDay()] + "요일"

const hour = document.body.querySelector(".hour")
hour.innerHTML = new Date().getHours() + "시"

const minute = document.body.querySelector(".minute")
minute.innerHTML = new Date().getMinutes() + "분"

const second = document.body.querySelector(".second")
second.innerHTML = new Date().getSeconds() + "초"

