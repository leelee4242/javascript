//베스킨라빈스 변수를 만들고,
//아이스크림 3개 종류를 넣고,
//매출은 0부터 시작하고
//판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는 
//오브젝트 타입 만들기

const baskinrabbins = {
    icecreams : [{name : "딸기", price:1500}, {name:"초코", price: 2000},{name:"메론", price: 3000}],
    sales: 0,
    sellIceream : function(X){
        this.sales = this.sales + this.icecreams[X].price
    },
}

baskinrabbins.sellIceream(1)
baskinrabbins.sellIceream(2)
baskinrabbins.sellIceream(3)

window.console.log(baskinrabbins.sales)