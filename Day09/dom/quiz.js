//프롬프트로 유저에게 만들고 싶은 태그 묻고
const tag = window.prompt("만들고 싶은 태그");
//태그의 배경 묻고
const bg = window.prompt("배경색");
//태그의 컨텐츠(안의 내용) 묻고 난 후에
const cotents = window.prompt("만들고 싶은 내용");
//HTML에 유저가 요구한 태그 만들기!
const u_tag = document.createElement(tag);
tag.style.backgroundcolor = bg;
tag.innerHTML = contents;

ducument.body.appendchild(tag);




//유저에게 좋아하는 음식들 입력 받고
//음식들을 각각 버튼 태그로 만들고
//버튼 태그 색상은 순서대로 빨주노초파남보

const colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
const foodList = prompt("좋아하는 음식").split(" ")

foodList.forEach((x,i) => {
    const btn = document.createElement("button")
    btn.innerHTML = x
    btn.style.color = color[i % 7]
    document.body.appendChild(btn)
})


