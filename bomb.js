var wire1 = document.getElementById('wire1');
var wire2 = document.getElementById('wire2');
var wire3 = document.getElementById('wire3');
var wire4 = document.getElementById('wire4');
var wire5 = document.getElementById('wire5');
var time = document.getElementById('seconds').value;
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var interval;
var wireArray=[0,0,0,0,0];
var userArray=[0,0,0,0,0];

wire1.addEventListener('click',function(){wire1.className="wire cut-blue"; checkCut(wire1.getAttribute("value"));});
wire2.addEventListener('click',function(){wire2.className="wire cut-red"; return checkCut(wire2.getAttribute("value"));});
wire3.addEventListener('click',function(){wire3.className="wire cut-yellow"; return checkCut(wire3.getAttribute("value"));});
wire4.addEventListener('click',function(){wire4.className="wire cut-white"; return checkCut(wire4.getAttribute("value"));});
wire5.addEventListener('click',function(){wire5.className="wire cut-green"; return checkCut(wire5.getAttribute("value"));});
//
// document.getElementById('container-timer').textContent = "Press Start";

var setWires = function(){
  for(i=0; i<5; i++){
    wireArray[i] = Math.round(Math.random());
    userArray=[0,0,0,0,0];
  }
};

var checkCut = function(num){
  if(wireArray.toString()==userArray.toString()){
    win();
  } else{
    if(wireArray[num]===0){
      blowup();
    } else{
      userArray[num] = 1;
      if(wireArray.toString()===userArray.toString()){
        win();
      }
    }
  }

};

var countDown = function(){
  document.getElementById('container-timer').textContent = time;
  time--;
  if(time<=0){
    document.getElementById('container-timer').textContent = time;
    clearInterval(interval);
    setTimeout(blowup,750);
  } else{
    document.getElementById('container-timer').textContent = time;
  }
};

var blowup = function(){
  clearInterval(interval);
  document.getElementById('container-timer').textContent = "You failed!";
  document.getElementsByTagName('body')[0].className = "exploded";
};

var win = function(){
  clearInterval(interval);
  document.getElementById('container-timer').textContent = "You win!";
};

var reset = function(){
  wire1.className="wire blue";
  wire2.className="wire red";
  wire3.className="wire yellow";
  wire4.className="wire white";
  wire5.className="wire green";
  setWires();
  checkCut();
  document.getElementById('body').className="unexploded";
  clearInterval(interval);
  time = document.getElementById('seconds').value;
  document.getElementById('container-timer').textContent = time;
  interval = setInterval(countDown,1000);
};

resetButton.addEventListener('click',function(){reset();});
startButton.addEventListener('click',function(){reset();});
