#pragma strict

var GrowRate: int = 10000; // 1 per x frames
var ClingDistance : float = 10;

private static var num : int = 0;
private var coll : Collider2D;

function Start () {
	coll = GetComponent(Collider2D);
}

function Update () {
	if(Time.frameCount % GrowRate == 0 && num < 10) {
		Instantiate(GetComponent("Transform"), Vector2(Random.Range(.1, .2), Random.Range(-.1, .1)) + transform.position, transform.rotation);
		num++;
	}
	
	var clingto : Collider2D[] = Physics2D.OverlapCircleAll(transform.position, ClingDistance);
	for(var near: Collider2D in clingto) {
		transform.position = Vector3.MoveTowards(transform.position, near.transform.position, Time.deltaTime);
	}
}