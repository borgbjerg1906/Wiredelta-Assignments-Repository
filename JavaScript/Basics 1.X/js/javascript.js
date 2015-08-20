

function promptUserForName()
{    	
	var person = prompt("Please enter your name", "Type your name here!");

    if (person != null) {
    	alert("Welcome to this awesome website " + person + "\nHope you have a great day!");
        document.getElementById("demo").innerHTML =  "Enjoy your stay here, " + person;
        
       
    }
}

function displayCurrentDate() {
	
    var currentDate =  new Date().toDateString();
	
	document.getElementById("displayCurrentDate").innerHTML = "The current date is: " + currentDate;
    
}

function documentLastModified(){

	var lastModified = document.lastModified;

	document.getElementById("displayLastModifiedDate").innerHTML = "The document was last modified: " + lastModified;
}





