#pragma strict

var baseSpeed : int = 5;
var selected : boolean = false;

private var goalLocation : Vector2;
private var moving : boolean = false;
private var vel : Vector2;
private var halo : Behaviour;
private var coll : Collider2D;

function Start () {
	halo = GetComponent("Halo");
	coll = GetComponent(Collider2D);
}

function awake() {
	
}

function Update () {
	halo.enabled = selected;
	
	if(Input.GetMouseButtonDown(0)){
		Debug.Log("cell!");
		if(coll.OverlapPoint(Camera.main.ScreenToWorldPoint(Input.mousePosition))) {
			selected = !selected;
			Debug.Log("on me!");
		} else {
			selected = false;
		}
	}
	
	if(Input.GetMouseButtonDown(1) && selected){
		goalLocation = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		moving = true;
	}
	
	if(Input.GetKeyDown("g")) {
    	Instantiate(GetComponent("Transform"));
	}
	
	if(moving) {
		transform.position = Vector3.MoveTowards(transform.position, goalLocation, baseSpeed  * Time.deltaTime);
		if((goalLocation - transform.position).magnitude < 5) moving = false;
	}
}