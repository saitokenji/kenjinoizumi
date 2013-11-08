var _metaioTracker : metaioTracker;
var guiManager : GUIManager;
var lotText : String = "";
var fukidashi : GameObject; 

var lot : String[] = new String[5];

function Update(){

	if(_metaioTracker.isTracking) return;
	fukidashi.SetActive(false);
	GetComponent(TextMesh).text = "";

}


function textOn(){
	
	var _lot : String ="";
	
	yield WaitForSeconds(3);
	fukidashi.SetActive(true);
	_lot = lot[Random.Range(0,42)];
	GetComponent(TextMesh).text =  _lot;
	lotText = _lot;
	
	guiManager.GUIflag2ON();

}

function byebye(){
	GetComponent(TextMesh).fontSize =  30;
	GetComponent(TextMesh).text =  "またね！";
	yield WaitForSeconds(2);
	fukidashi.SetActive(false);
	GetComponent(TextMesh).text =  "";
	GetComponent(TextMesh).fontSize =  20;

	
}

function thankyou(){
	GetComponent(TextMesh).fontSize =  30;
	GetComponent(TextMesh).text =  "ありがとね！";
	yield WaitForSeconds(2);
	fukidashi.SetActive(false);
	GetComponent(TextMesh).text =  "";
	GetComponent(TextMesh).fontSize =  20;

	
}
