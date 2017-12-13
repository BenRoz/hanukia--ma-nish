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

var candleNumber = 0;
function startHanuka(){
        setInterval(function lighting(){
            var currentCandle = hanukia.candles[candleNumber];
            //console.log(currentCandle.isBurning);
            if (currentCandle['isBurning'] !='true'){
            console.log(currentCandle.name);
            document.getElementById("flame" + (candleNumber + 1)).style.backgroundColor="yellow";
            }
            candleNumber = candleNumber + 1;
    }, 3000);
}