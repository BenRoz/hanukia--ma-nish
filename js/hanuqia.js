var hanukia = {
    candles:[
    {
    name: "candle1",
    color: 'yellow',
    isBurning:'true',
    },
    {
    name: "candle2",
    color: 'yellow',
    isBurning:'true',
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
    isBurning:'true',
    },
    {
    name: "candle6",
    color: 'yellow',
    isBurning:'false',
    },
    {
    name: "candle7",
    color: 'yellow',
    isBurning:'true',
    },
    {
    name: "candle8",
    color: 'yellow',
    isBurning:'true',
    },

    ],
};

 function light(){
    for(var i=0; i<hanukia.candles.length; i++){
      var currentCandle=hanukia.candles[i];
      console.log(currentCandle.isBurning);
      if (currentCandle['isBurning'] =='true'){
      console.log(currentCandle.name);
        document.getElementById("flame"+(i + 1)).style.backgroundColor="yellow";
      }
    }

}
light();

var start = document.getElementById('start');
start.addEventListener('click', startHanuka);


//function onPress(id){

    //if (document.getElementById(id).style.backgroundColor=="yellow"){
        //document.getElementById(id).style.backgroundColor="#FFFFFF";
    //}
    //else{
        //document.getElementById(id).style.backgroundColor="yellow";
    //}
    //console.log(id);
//}