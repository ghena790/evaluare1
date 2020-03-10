//1
document.getElementById('calculateBut').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
	const y = Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = x + y;
});
//3
document.querySelectorAll("ul.planets li").forEach(function(element){
	element.addEventListener("click", function(){
		element.style.backgroundColor = "green";
	});
});
//12
setTimeout(function(){
	const oldValue = +document.getElementById("counter").value;
	const newValue = oldValue + 1;
	document.getElementById("counter").value = newValue;
}, 1000);

//6
document.querySelectorAll("ul.number li.10").forEach(function(element){
	element.addEventListener("click", function(){
		element.style.backgroundColor = "purple";
	});
});

//10
function getRandomColor() {
	var color = [];
	while (color.length < 3) color.push(Math.floor(Math.random() * 255));
	return 'rgb('+color.join(', ')+')';
  }
   
  document.body.onmousemove = function() {
	document.body.style.backgroundColor = getRandomColor();
  }

//7.
var points = [40, 100, 1, 5, 25, 10, 89, 74, 21, 13];
document.getElementById("demo").innerHTML = points;    

function myFunction() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
}