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

function Update () {
	halo.enabled = selected;	
	if(Input.GetMouseButtonDown(0)){
		if(coll.OverlapPoint(Camera.main.ScreenToWorldPoint(Input.mousePosition))) {
			selected = !selected;
		} else if(!Input.GetKey(KeyCode.LeftShift)) {	 
			selected = false;
		}
	}
	
	if(Input.GetMouseButtonDown(1) && selected){
		goalLocation = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		moving = true;
	}
	
	if(Input.GetKeyDown("g") && selected) {
    	Instantiate(GetComponent("Transform"), Vector2(Random.Range(.2, 2), Random.Range(-2, 2)) + transform.position, transform.rotation);
	}
	
	if(moving) {
		transform.position = Vector3.MoveTowards(transform.position, goalLocation, baseSpeed  * Time.deltaTime);
		if((goalLocation - transform.position).magnitude < 5) moving = false;
	}
}

function OnGUI() {
	if(selected) {
		var pos : Vector2 = Camera.main.WorldToScreenPoint(transform.position);
		pos.y = Screen.height - pos.y;
		GUI.Box(Rect(pos.x, pos.y, 100, 25 ), "test");
	}
}