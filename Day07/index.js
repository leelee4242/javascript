//1. **숫자 배열 제곱 값 구하기**
//before : [1,2,3,4]
//After : [1,4,9,16]
const fn1 = (n) => {
    return n ** 2
}
const before1 = [1,2,3,4]
const answer1 =before1.map(fn1)


//2. **이름 배열 대문자로 변환하기
//before : ['hong', 'kim', 'lee']
//After : ['HONG', 'kIM', 'LEE']
const quiz2 = (n) => {
    return x.toUppperCase()
}
const before2 = ["hong","kim","lee"]
const after2 = before2.map(quiz2)


//3. ** 점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기
//before : [86,42,77] 60점 미만
//After : ['동해', '불합격', '합격']
const fn3 = (x) => {
    return x > 60 ? "합격" : "불합격"
}
const before3 = [86,42,77]
const after3 = before3.map(fn3)


//4. ** 상품 할인 가격 20% 배열 만들기
//before : [10000, 20000, 15000]
//After : [8000,160000,12000]
const fn4 = (x) =>{
    return x * 0.8
}

const before4 = [10000, 20000, 15000]
const after4 = before4.map(fn4)


//5. **학생 객체 배열에서 이름만 추출하기
//Bofore : [ {name: '홍길동', age: 16}, {name : '김철수', agea: 17}]
//After : ['홍길동' , '김철수']

//x:object
const fn5 = (x) => {
    return x.name
}
const before5 = [
    {name: "홍길동", age: 16},
    {name: "김철수", age: 17}
]
const after5 = before5.map(fn5)