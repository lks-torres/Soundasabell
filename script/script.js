/*LANDING*/
/*newsletter form*/

function formSubmission(){
	document.getElementById("formNewsletter").style.display = "none";
    alert("Thank you! Enjoy our weekly Newsletter");
}

/*LISTEN*/
let currentlyPlayingAudio = null;

function play(song) {
    if (currentlyPlayingAudio && !currentlyPlayingAudio.paused) {
        currentlyPlayingAudio.pause();
    }

    const audio = new Audio(`../sounds/${song}`);
    audio.play();
    console.log(audio);

    currentlyPlayingAudio = audio;
}


//Learn
function book(){
	var name;
	var email;
	name=prompt("Please enter your name");
	email = prompt("Please enter your email");
	if(name!="" && email!="" ){
    alert("Hi " +  name + " , your request was sent to your instructor and he will be in contact with you for more information");
	}
	if(name===""){
    alert("Please enter your name");
	}
	if(email===""){
    alert("Please enter your email");
	}
}

function contactSubmit(){
	console.log("check");	
	var name = document.getElementById('username').value;
	var address = document.getElementById('address').value;
	var email = document.getElementById('email').value;
	var iSelection = document.getElementById('instrumentSelection').value;
	var lSelection = document.getElementById('levelSelection').value;
	
if(name ===""){
	alert("Please insert your name");
}
if(address ===""){
	alert("Please insert your address");
}
if(email ===""){
	alert("Please insert your email");
}
if(iSelection ==="--Select--"){
	alert("Please select an instrument");
}

if(lSelection ==="--Select--"){
	alert("Please select an Level of Experience");
}
else{
	alert("Query received and we will contact you within 24 hours");
}

}