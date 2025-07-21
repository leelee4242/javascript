// 1. 어떠한 x를 넣으면 제곱을 돌려주는 함수 만든 후 
// 함수를 활용해서 콘솔로 결과 나타내기
function square(x){
    return  x**2;
}

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
function  delicious(food){
    return `${food}는 맛있따`
}


// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후 
// 함수를 활용해서 콘솔로 결과 나타내기
function isOddorEven(x){
    if(x%2==0){
        return "짝수"
    } else {

    }
}


// 4. 어떠한 x를 넣으면 배열로 [x*1,x*2, x*3]을 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
function threeList(x){
    return [x*1, x*2, x*3]
}


const a = square(20)
window.console.log(`첫번째 결과 : ${a}`)

const b = delicious("돈까스")
window.console.log(`두번째 결과:${b}`)

const c = isOddorEven(13)
window.console.log(`세번째 결과:${c}`)

const d = threeList(20)
window.console.log(`네 번째 결과:${d}`)