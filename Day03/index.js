//정수 판별
const num = +window.prompt("정수를 입력하세요")
const result = num > 0 ? "양의 정수" : "0 또는 음의 정수"
window.console.log(result)

//놀이기구
const height = +window.prompt("키를 입력하세요(cm)")
const result1 = height >= 140 ? "해당 놀이기구를 탈 수 있습니다." : "해당 놀이기구를 탈 수 없습니다."
window.console.log(result1)

//나이 입력 후 성인 판별
const age = +window.prompt("나이를 입력하세요")
const result2 = age > 19 ? "성인입니다." : "미성년자입니다"
window.console.log(result2)

//이름 입력 후 인사말 출력
const user_name = window.prompt("이름을 입력해 주세요")
const result3 = !!user_name ? `안녕하세요. ${user_name}님` : "이름을 입력해주세요." 
window.console.log(result3)

//홀수/짝수 판별 프로그램
const num2 = +window.prompt("정수를 입력해주세요")
const result4 = !!(num2 & 2) ? "홀수 입니다" : "짝수입니다"
winddow.console.log(result4)

