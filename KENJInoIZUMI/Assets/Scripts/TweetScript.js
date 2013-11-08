#pragma strict
var textManager : TextManager;

function Start () {
	textManager = GetComponent(TextManager);
}

function Update () {

}

function doTweet(){

	yield WaitForSeconds(5);
	
	var _lotText : String = textManager.lotText;
	 
	var twtext : String = WWW.EscapeURL( _lotText + "#kenjinoizumiAR https://itunes.apple.com/ja/app/kenjino-quanar/id657459517?l=ja&ls=1&mt=8");
	var twurl : String = "http://twitter.com/?status=" + twtext;
	Application.OpenURL(twurl);    

}