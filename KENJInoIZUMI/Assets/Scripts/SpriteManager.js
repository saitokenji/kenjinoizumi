#pragma strict
var mySprite : exSprite;
var _metaioTracker : metaioTracker;

function Start () {
	mySprite = GetComponent(exSprite);
	mySprite.spanim.Play("sp_blink");
}

function Update(){

	if(!_metaioTracker.isTracking){
		mySprite.spanim.Play("sp_blink");
	}

}

function doSmile() {
	mySprite.spanim.Play("sp_smile");
}

