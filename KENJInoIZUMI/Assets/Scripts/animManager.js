#pragma strict

var emitParticle : GameObject;
var fadeInScript : FadeInScript;
var defaultPosition : Vector3;
var guiManager : GUIManager;
var animState : String = "default";
var text : GameObject; 
var _metaioTracker : metaioTracker;

function Start () {
	defaultPosition = transform.position;
	fadeInScript = GetComponentInChildren(FadeInScript);
}

function Update(){

	if(_metaioTracker.isTracking) return;
	animation.Stop();
    transform.position = defaultPosition;
    animState = "default";
    
}


function upDown(){
	animState = "updown";
   	animation.Play("up_down");
}

function crossMove(){
	animState = "crossmove";
	animation["crossed_anim"].speed = 0.6;
	animation.Play("crossed_anim");
	yield WaitForSeconds(6.8);
	animation.Stop();
}

function downMove(){
	yield WaitForSeconds(2);
	animation.Play("down_anim");
}




function GUION_1(){
	guiManager.GUIflag1ON();
}

function SendMessageToText(){
	text.GetComponent(TextManager).textOn();
}

function emitParticleOn(){
	yield WaitForSeconds(0.5);
	Instantiate(emitParticle, gameObject.transform.position + Vector3(0,15,0), gameObject.transform.rotation);
	yield WaitForSeconds(1);
	Instantiate(emitParticle, gameObject.transform.position + Vector3(0,15,0), gameObject.transform.rotation);
}

