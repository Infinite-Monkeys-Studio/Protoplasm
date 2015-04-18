#pragma strict

var tileSelectionMarker : GameObject;

private var selectorSprite : GameObject;


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
		}
	}
}