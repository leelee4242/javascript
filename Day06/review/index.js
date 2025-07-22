//알파벳 대소문자 판별 함수
function quiz1(alphabet)

//문자 포함 여부 판별 함수
function quiz2(x,y){
    if(x.includes(y)){
        return `${x}에는 ${y}포함되어있지 않습니다`
    } else {
        return `${x}에는 ${y}가 포함되어 있지 않습니다`
    }
}

//이메일 형식 판별 함수
function quiz3(email){
    if(Email.includes("@")){
        return `${email}은 올바른 이메일 형식입니다`
    } else {
        return `${email}은 올바르지 않습니다`
    }
}