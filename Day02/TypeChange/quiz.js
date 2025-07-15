const first = window.prompt("첫번째 숫자 입력");
const second = window.prompt("두번째 숫자 입력");

const b1 = Number(first) + Number(second);

window.alert(`${first} + ${second} = ${b1}`);

const age = window.prompt("몇살입니까?");
const numberAge = Number(age);
const year = 2026 - numberAge;

window.alert(`귀하의 태어난 년도는 ${year} 년도 입니다!`);
