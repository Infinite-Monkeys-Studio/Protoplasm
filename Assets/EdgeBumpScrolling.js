#pragma strict

public var Boundary : int = 50; // distance from edge scrolling starts
public var speed : int = 5;
public var smallestOrtho : int = 10;
public var largestOrtho : int = 60;

private var theScreenWidth : int;
private var theScreenHeight : int;
//private var scale : int;

function Start() {
	theScreenWidth = Screen.width;
	theScreenHeight = Screen.height;
}

function Update() {
	if (Input.mousePosition.x > theScreenWidth - Boundary) {
		transform.position.x += speed * Time.deltaTime * Camera.main.orthographicSize; // move on +X axis
	}

	if (Input.mousePosition.x < 0 + Boundary) {
		transform.position.x -= speed * Time.deltaTime * Camera.main.orthographicSize; // move on -X axis
	}

	if (Input.mousePosition.y > theScreenHeight - Boundary)	{
		transform.position.y += speed * Time.deltaTime * Camera.main.orthographicSize; // move on +Y axis
	}

	if (Input.mousePosition.y < 0 + Boundary) {
		transform.position.y -= speed * Time.deltaTime * Camera.main.orthographicSize; // move on -Y axis
	}
	
	if(Input.GetAxis("Mouse ScrollWheel") > 0 && Camera.main.orthographicSize > smallestOrtho) {
		Camera.main.orthographicSize--;
	}
	
	if(Input.GetAxis("Mouse ScrollWheel") < 0 && Camera.main.orthographicSize < largestOrtho) {
		Camera.main.orthographicSize++;
	}
	
}   

function OnGUI() {
	GUI.Box( Rect( (Screen.width / 2) - 140, 5, 280, 25 ), "Mouse Position = " + Input.mousePosition );
	GUI.Box( Rect( (Screen.width / 2) - 70, Screen.height - 30, 140, 25 ), "Mouse X = " + Input.mousePosition.x );
	GUI.Box( Rect( 5, (Screen.height / 2) - 12, 140, 25 ), "Mouse Y = " + Input.mousePosition.y );
}