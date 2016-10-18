

/* Number=random()* motiv; */
function motivation(){
	var a = Math.floor(Math.random()*5)+1;
$("#img").replaceWith("<img id=\"img\" src=IMG/"+a+".jpg>");
$("#img-id").replaceWith("<h1 id=\"img-id\">"+ a+"</h1>");
}