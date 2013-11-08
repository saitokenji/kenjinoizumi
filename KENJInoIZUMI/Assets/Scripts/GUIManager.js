var flag : int;
var metaioTracker : metaioTracker;
var counter : float = 0;
var time : float = 0; 
var counter2 :  float = 0;
var animManager : animManager;
var kenji : GameObject;
var textManager : TextManager;
var spriteManager : SpriteManager;
var tweetScript : TweetScript;
var skin : GUISkin;

function Update(){
	if(metaioTracker.isTracking == false){	
		flag = 0;
	}
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.skin = skin;
	
	if(flag == 1){
		counter += Time.deltaTime;
		GUI.color.a = Mathf.Lerp(0.0, 1.0, counter/5);
		//GUI.color = Color.white;
		if( GUI.Button( Rect(sw/3, sh/4 * 3.5, sw/3, sh/8) ,"本日のお告げ♥") ){
			animManager.crossMove();
			flag = 0;
		}
	}else{
		 counter = 0;	
	}
	
	if(flag == 2){
		counter2 += Time.deltaTime;
		GUI.color.a = Mathf.Lerp(0.0, 1.0, counter2/3);
		//GUI.contentColor = Color.white;
		//GUIStyle.fontSize = 1;
		if(GUI.Button( Rect(sw/2.5, sh/4 * 3.5, sw/5, sh/8), " おわる") ){	
			textManager.byebye();
			animManager.downMove();
			spriteManager.doSmile();
			kenji.BroadcastMessage("StartFade");
			
			flag = 0;
		}
		
		//GUI.contentColor = Color.cyan;
		if( GUI.Button( Rect(sw/1.5, sh/4 * 3.5, sw/3, sh/8) ,"お告げをTweetしてから終わる", "tweetSkin") ){
			textManager.thankyou();
			animManager.downMove();
			spriteManager.doSmile();
			kenji.BroadcastMessage("StartFade");
			tweetScript.doTweet();
			
			flag = 0;
		}
		
	}else{
		 counter2 = 0;
	}
	
}


function GUIflag1ON(){
	flag = 1;
}

function GUIflag2ON(){
	flag = 2;
}



