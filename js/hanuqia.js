var hanukia = {
    candles:[
    {
    name: "candle1",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle2",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle3",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle4",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle5",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle6",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle7",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle8",
    color: 'yellow',
    isBurning:'false',
    },

    ],
};

//  function light(){
//     for(var i=0; i<hanukia.candles.length; i++){
//       var currentCandle=hanukia.candles[i];
//       console.log(currentCandle.isBurning);
//       if (currentCandle['isBurning'] =='true'){
//       console.log(currentCandle.name);
//         document.getElementById("flame"+(i + 1)).style.backgroundColor="yellow";
//       }
//     }

// }
// light();

var start = document.getElementById('start');
start.addEventListener('click', startHanuka);
//var candleHeight = document.getElementsByClassName("candleBody").style.height;
//console.log(candleHeight);
var candleNumber = 0;

function startHanuka(){

        setInterval(function lighting(){

            //console.log(currentCandle.isBurning);
           var currentCandle = hanukia.candles[candleNumber];
            if (currentCandle['isBurning'] !='true'){

            }
            console.log(currentCandle.name);
            document.getElementById("flame" + (candleNumber + 1)).style.backgroundColor="yellow";
            currentCandle['isBuring'] = true;
            if (candleNumber<9){
            candleNumber = candleNumber + 1;
            }

    }, 3000);
}

function shrink(){
    setInterval(function inshrink(){
    for (var x=0; x<9; x++){
      if(hanukia.candles[x]['isBurning']==true){
      console.log(hanukia.candles[x]['isBurning']);
//                 document.getElementById("body" + (candleNumber + 1)).style.height=
        }
    }

    },1000);
}
shrink();