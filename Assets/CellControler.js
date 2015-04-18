#pragma strict

var tileSelectionMarker : GameObject;
var baseSpeed : int = 5;

private var selectorSprite : GameObject;
private var selected : boolean = false;
private var goalLocation : Vector2;

function Start () {
	selectorSprite = Instantiate (tileSelectionMarker, Vector3(0,0, 0), Quaternion.identity);
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		var mousePosition : Vector2 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var hitCollider : Collider2D = Physics2D.OverlapPoint(mousePosition);

		Debug.Log("mouse pos "+mousePosition.x+" y "+mousePosition.y+" ");    


		if(hitCollider) {
			selectorSprite.transform.position.x = hitCollider.transform.position.x;
			selectorSprite.transform.position.y = hitCollider.transform.position.y;
			Debug.Log("Hit "+hitCollider.transform.name+" x"+hitCollider.transform.position.x+" y "+hitCollider.transform.position.y);
			//selected = !selected; 
		}
	}
	
	if(Input.GetMouseButtonDown(3)){
		goalLocation = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	}
	
	//if(goalLocation != void) {
	//	transform.LookAt(goalLocation);
	//	transform.position = transform.forward * baseSpeed;
	//}
}