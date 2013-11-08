#pragma strict
//@script ExecuteInEditMode()

var btn1 : GUIStyle;
var btn2 : GUIStyle;
var xoffset : float;
var yoffset : float;
private var audioSource : AudioSource;
private var isPlayingSound : boolean = false;

function Start () {
	audioSource = gameObject.GetComponent(AudioSource);

}

function Update () {

}

function OnGUI() {

	if (GUI.Button(Rect(Screen.width/2 - 273/2, Screen.height/2 - 90 , 272, 76), "", btn1)){

		PlaySoundandLoadMain();
	}


	if (GUI.Button(Rect(Screen.width/2 - 273/2, Screen.height/2 + 40  , 272, 76), "", btn2)){
		Application.OpenURL ("http://www.geocities.jp/xwtbr990/kenjinoizumiAR/#howto");
	}

}

function PlaySoundandLoadMain(){
	if(!isPlayingSound){
		isPlayingSound = true;
		audioSource.Play();
		yield WaitForSeconds(1);
		Application.LoadLevel("Main");
	}
}