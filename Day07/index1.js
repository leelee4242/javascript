const starbucks = [
    {name : "아메리카노",price:4500, shots:2, ingredients:["water","caffeine"]},
    {name : "라떼",price:5500, shots:2, ingredients:["water","milk","caffeine"]},
    {name : "돌체라떼",price:6500, shots:3, ingredients:["water","milk","caffeine","condensed milk"]},
    {name : "바닐라 크림",price:5500, shots:2, ingredients:["milk","caffeine","vanilla","water"]},
    {name : "카페 모카",price:6000, shots:2, ingredients:["milk","ckocolate","water","caffeine"]}
]

// 1. 라떼 메뉴만 나타내기

// 2. 가격이 6000원 이상 메뉴만 나타내기

// 3. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기 
const fn1 = (n) => {
    n.price = n.price * 0.8
    n.shots = n.shots -1
    return n 
}
const answer3 = starbucks.map(fn1)
//4. 이름에 라떼가 있으면, 재고없음 이름 바꾸고 아니면 그대로 나타내기 

//오답내답
// const nf2 = (n) => {
//     if(n) == 라떼 
//     return "재고없음" 
//     else(n) 
// }

const nf2 = (n) => {
    n.name = n.name.ingredients("라떼") ? "재고없음" : name
    return n
}

//5. caffeine -> decaffeine
const fn3 = (n) => {
    return n = "caffenine" ? "decaffeine" : y
}
const fn4 = (n) => {
    n.ingredients = x=n. ingredients.map(fn3)
}
