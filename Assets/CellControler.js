#pragma strict

var tileSelectionMarker : GameObject;
var baseSpeed : int = 5;

private var selected : boolean = false;
private var goalLocation : Vector2;
private var moving : boolean = false;
private var vel : Vector2;
private var halo : Behaviour;

function Start () {
	halo = GetComponent("Halo");
}

function Update () {
	if(Input.GetMouseButtonDown(1)){
		var mousePosition : Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var hitCollider : Collider2D = Physics2D.OverlapPoint(mousePosition);

		//Debug.Log("mouse pos "+mousePosition.x+" y "+mousePosition.y+" ");


		if(hitCollider) {
			//Debug.Log("Hit "+hitCollider.transform.name+" x"+hitCollider.transform.position.x+" y "+hitCollider.transform.position.y);
			halo.enabled = ! halo.enabled;
		}
	}
	
	if(Input.GetMouseButtonDown(0)){
		goalLocation = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		moving = true;
	}
	
	if(moving) {
		transform.position = Vector2.Lerp(goalLocation, transform.position, vel, 5);
		if((goalLocation-transform.position).magnitude < 5) moving = false;
	}
}