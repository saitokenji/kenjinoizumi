#pragma strict

var _metaioTracker : metaioTracker;
private var mySprite : exSprite;
var fadeValue : float = 0;
var currentTime: float = 0;
var timeItTakesToFade : float  = 1;
//var isFading : boolean = false;
var delayTimer : float;
private var initialDelayTime : float;
var _animManager : animManager;

function Start () {
	_animManager = transform.parent.GetComponent(animManager);
    mySprite = GetComponent(exSprite);
	initialDelayTime = delayTimer;
}
 
function Update () {

	if(!_metaioTracker.isTracking){
		Init();
		return;
	}
	
	delayTimer -= Time.deltaTime;
	if(delayTimer > 0) return; 
	
	currentTime += Time.deltaTime;
    if(currentTime  <= timeItTakesToFade){
    	fadeValue = currentTime / timeItTakesToFade;
    	mySprite.color = Color(1,1,1, fadeValue);
    }
    
    if(_animManager.animState == "default"){
    	if( fadeValue >= 0.9){
    		_animManager.upDown();
    		fadeValue = 0;
    	}
    }
    
    
}
 

function Init(){

	delayTimer = initialDelayTime; 
	
	currentTime = 0;
	fadeValue = 0;
	mySprite.color = Color(1,1,1,fadeValue);

}


 
//function StartFade () {
 //   currentTime = 0;
 //	timeItTakesToFade = howLong;
 //   isFading = true;
//}