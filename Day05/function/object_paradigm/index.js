const car = {
    name: "페라리",
    price: 100000000,
    color: "빨간색",
    changeColor : function(x){
        this.color = x
    },
    priceUp: function (x){
        this.price = this.price + x
    },
    changeName: function (x){
        this.name = x
    }
}

car.changeColor("검은색")


// window.changeColor("검은색")
// // window.console.log(car)