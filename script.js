var enter = document.getElementById("Enter");
var input = document.getElementById("Input")
var ul = document.querySelector("ul");
var btn = document.querySelectorAll("btn");
var clear = document.getElementById("Clear");
//FUNCTIONS
function checkSpace(string)
{
	for (var i = 0 ; i < string.length; i++) {
		if( string[i] !== " ")
			return true;
	}
	return false;
}

function removeItem(){

    ul.removeChild(this.parentNode);
} 

function addElement( string )
{
		var li = document.createElement("li");
		var btn1 = document.createElement("button");
		btn1.appendChild(document.createTextNode("X"));
		btn1.classList.add("btn");
		li.classList.add('tasks');
		li.appendChild(btn1);
		li.appendChild(document.createTextNode(string));
		btn1.onclick= removeItem;
		ul.appendChild(li);
		input.value = "";
}


//ONCLICK ACTIONS
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}
//EVENTS

enter.addEventListener("click",function(){
	// console.log("CLICK!");
	if(input.value !== "" && checkSpace(input.value))
	{
		addElement(input.value);
	}
})

clear.addEventListener("click",function(){
	// console.log("CLICK!");
	var len = document.querySelectorAll(".container li").length;
	// alert(len);
	while (ul.firstChild) {
    	ul.removeChild(ul.firstChild);
	}
})
input.addEventListener("keypress",function(){
	if(event.which === 13 && input.value !== "" && checkSpace(input.value))
	{
		// console.log("ENTER!");
		addElement(input.value);
	}
})

