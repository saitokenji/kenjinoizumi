#pragma strict
 
var mySprite : exSprite;
var fadeValue : float = 1;
var currentTime: float = 0;
var timeItTakesToFade = 10;
var isFading : boolean;
var _metaioTracker : metaioTracker;
 
function Start () {
    mySprite = GetComponent(exSprite);
}
 
function Update () {

	if(!_metaioTracker.isTracking){
		Init();
		return;
	}
	
	if(isFading){

	    currentTime += Time.deltaTime;
 		if(currentTime <= timeItTakesToFade){
    		fadeValue = 1 - (currentTime / timeItTakesToFade);
    		mySprite.color = Color(1,1,1, fadeValue);
    	}
	
	}
	
}
 
function Init(){
	currentTime = 0;
	fadeValue = 1;
	isFading = false;

}

 
function StartFade () {
	yield WaitForSeconds(1);

    currentTime = 0;
    isFading = true;
    
}

