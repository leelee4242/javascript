//유저에게 영어점수를 입력 받고
//90점 이상이면 -> A
//80점 이상이면 -> B
//70점 이상이면 -> C
//60점 이상이면 -> D
// 그 외는 -> F

const num = +window.prompt("점수 입력")
if(num >= 90){
    window.console.log(`${num}은 A입니다`)}
    else if(num >= 80){
        window.console.log(`${num}은 B입니다`)
    }
    else if(num >= 70){
        window.console.log(`${num}은 C입니다`)
    }
    else if(num >= 60){
        window.console.log(`${num}은 D입니다`)
    }
    else{
        window.console.log(`${num}은 F입니다`)
    }
window.console.log("프로그램 끝")


// 정수를 하나 주시면, "양의 홀수", 양의 짝수, 음의 홀수, 음의 짝수 
// 또는 0을 콘솔로 출력

// const num = +window.prompt("정수입력")
// const isPostive = num > 0
// const isNegative = num < 0
// const isOdd = num  % 2 == 1 || num % 2 == -1
// const isEven = num % 2 == 0

const num2 = +window.prompt("정수 입력")
if(num2 > 0 && num2 % 2 == 1){
    window.console.log(`${num2}은 양의 홀수 입니다`)
}
else if(num2 > 0 && num2 % 2 == 0){
    window.console.log(`${num2}은 양의 짝수 입니다`)
}
else if(num2 > 0 && num2 % 2 == -1){
    window.console.log(`${num2}은 음의 홀수 입니다`)
}
else if(num2 > 0 && num2 % 2 ==0){
    window.console.log(`${num2}은 음의 짝수 입니다`)
}
else {
    window.console.log("0")
}
window.console.log("프로그램 끝")

