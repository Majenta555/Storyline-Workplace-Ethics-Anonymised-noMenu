function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yTFftrSV7I":
        Script1();
        break;
      case "5Y4rSjNkfoh":
        Script2();
        break;
      case "5h3BFi1lo1f":
        Script3();
        break;
      case "5oF3Oer2pos":
        Script4();
        break;
      case "5kGeTcvsjD8":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('6KbKICpRbw5');
const duration = 750;
const easing = 'ease-out';
const id = '6FofoUURjxt';
const pulseAmount = 0.07;
const delay = 1458;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6YLYwfXacba');
const duration = 750;
const easing = 'ease-out';
const id = '6FofoUURjxt';
const pulseAmount = 0.07;
const delay = 1458;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6bjMEVwWKWU');
const duration = 750;
const easing = 'ease-out';
const id = '6V0DOeauTBH';
const pulseAmount = 0.07;
const delay = 1396;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5t7OciAvmQN');
const duration = 750;
const easing = 'ease-out';
const id = '6V0DOeauTBH';
const pulseAmount = 0.07;
const delay = 1396;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
