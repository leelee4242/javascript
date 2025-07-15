const first = window.prompt("한변의 길이 입력");
const square = number(first) * 2;
window.console.log(
  `한변의 길이:${first}인 정사각형의넓이:${square}*number(first)`
);

const line = window.prompt("밑변 입력");
const second = window.prompt("높이 입력");
const triangle = number(line) * number(second);

window.console.log(`삼각형의 넓이:${triangle}`);

const krw = window.prompt("원화를 입력하세요");
const jpy = number(won) * 9.33;
window.console.log(`${krw}원은 ${jpy}엔 입니다`);

const height1 = window.prompt("키 입력");
const weight = window.prompt("몸무게 입력");
const bmi = number(wetght) / (number(height1) * number(height1));
window.console.log(`키 : ${height1} 몸무게: ${weight} BMI : ${bmi}`);

const min = window.prompt("몇분?");
const sec = number(min) * 60;
window.console, log(`분:${min} 초:${sec}`);
