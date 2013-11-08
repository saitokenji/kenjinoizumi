#pragma strict

var _metaioTracker : metaioTracker;
private var particleEmitters : Component[];

private var counter : float = 0;
var particleDuration : float = 5; 

function Start(){
	particleEmitters = transform.GetComponentsInChildren(ParticleEmitter);
}

function Update(){
	
	if(!_metaioTracker.isTracking){
		counter = 0;
		for( var particleEmitter : ParticleEmitter in particleEmitters){
			 particleEmitter.emit = false;}
		return;
	}
	
	counter += Time .deltaTime;
		
	if(counter <= particleDuration){
		for( var particleEmitter : ParticleEmitter in particleEmitters){
			particleEmitter.emit = true;}		
	}else{
		for( var particleEmitter : ParticleEmitter in particleEmitters){
			particleEmitter.emit = false;}
	}
		 
}

