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


var start = document.getElementById('start');
start.addEventListener('click', startHanuka);
start.addEventListener('click', shrink);

var candleNumber = 0;

var timer;

function startHanuka(){

        timer = setInterval(function() {lighting()}, 3000);
}
  

function lighting() {
    var currentCandle = hanukia.candles[candleNumber];
    if (currentCandle['isBurning'] !='true'){
        document.getElementById("flame" + (candleNumber + 1)).style.backgroundColor="yellow";
        currentCandle['isBurning'] = true;
    }
    if (candleNumber == 7){
        stopLighting();
    }
    candleNumber = candleNumber + 1;
}

function stopLighting(){
    clearInterval(timer);
}

var shrinkTimer;

function shrink(){
    shrinkTimer = setInterval(function(){ inShrink()}, 6000);
}
var bodyNumber = 0;  
function inShrink(){
    var currentBody = hanukia.candles[bodyNumber];
    if(currentBody['isBurning'] == true){
        var bodyHeight = document.getElementById('body' + (bodyNumber + 1)); 
        bodyHeight.style.height = (parseInt(bodyHeight.clientHeight) - 15) + 'px';
        if (bodyHeight.style.height == '0px'){
            document.getElementById("flame" + (bodyNumber + 1)).style.backgroundColor="white";
            currentBody['isBurning'] == false;
        }
    } 
    if (bodyNumber < 7 ){
        bodyNumber = bodyNumber + 1;
    }  else {
        bodyNumber = 0;
    }
}

 
