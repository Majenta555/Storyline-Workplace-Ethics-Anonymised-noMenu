window.InitUserScripts = function()
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
window.Script5 = function()
{
  // Get the current year
var currentYear = new Date().getFullYear();

// Determine whether the year is even or odd
var version = (currentYear % 2 === 0) ? "A" : "B";

// Pass this value back to the Storyline variable
var player = GetPlayer();
player.SetVar("ModuleVersion", version);

}

};
