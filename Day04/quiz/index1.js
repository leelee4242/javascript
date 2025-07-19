//버스 요금 계산 시뮬레이션
const bus_type =[{name : "시내버스" , price : 1200},
                {name : "광역버스", price : 2000},
                {name : "마을버스", price : 1000},
]

const bus = window.prompt("노선의 종류(1~3)") -1
const age = +window.prompt("승객의 나이")

if(isInfantyOrElader)
    window.console.log(`${bus_type[bus].name}요금 : 원`);
    else if(isYouth){
        window.console.log(
            `${bus_type[bus],name}요금 : ${bus_type[bus].price * 0.7}원`
        );
    }else {
            window.console.log(
                `${bus_type[bus].name} 요금 : ${bus_type[bus].price * 1}원`
            );
        }