//1. [3,6,9,12,15] 배열을 각각 요소를 두배하고 더하기 10해서
const two = (x){
    return x * 2 + 10
}
// 콘솔로 나타내기
const test = [3,6,9,12,15].map(two)
window.console.log(test)


//2. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
// 홀수면 두배, 짝수면 세배 결과를 콘솔로 나타내기
const fn2 = (x) => {
    return 
}


//3. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
// 5보다 작으면 1로 크면 2로해서 결과를 콘솔로 나타내기
const fn3 = (X) => {
    return x < 5 ? 1:2
}
const  quiz3 = [1,2,3,4,5,6,7,8,9,10].map(fn3)

//4. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서 
//3의 배수면 "💛"로 아니면 "😋"로해서 결과를 콘솔로 나타내기
const fn4 = (x) {
    return x % 3 == 0 ? "💛" : "😋"
}
const quiz4 

//5. ["apple" ,"mango", "juice", "kiwi", "straberry"]
//요소를 문자의 길이로 바꿔서 콘솔로 나타내기
//[5,5,5,4,10]

const fn5 = (X) => {
    return X.length
}
const quiz5 = ["apple" ,"mango", "juice", "kiwi", "straberry"].map(fn5)