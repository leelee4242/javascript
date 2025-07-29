const list = [
    { src: "", brand: "" , name: "", price:""},
    { src: "", brand: "" , name: "", price:""},
    { src: "", brand: "" , name: "", price:""},
    { src: "", brand: "" , name: "", price:""},
    { src: "", brand: "" , name: "", price:""},
    { src: "", brand: "" , name: "", price:""},
];

const box = document.querySelector(".box")

const nakeItem = (item) => `
            <div class="item">
            <img src="img.jpg" alt="">
            <div class="info">
            <span class="brand">무신사 스탠다드</span>
            <span class="name">플렉스 포스</span>
            <span class="price">93.420원</span>
            </div>
        </div>
    `;        

list.forEach((X) => {
    box.insertAdjacentHTML("beforeend", makeItem(x));
});

