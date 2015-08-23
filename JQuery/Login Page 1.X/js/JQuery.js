$(document).ready(function () {


//To make login-div fly off when login button is clicked

$("#login-button").click(function(){
	var username = $("#username-input").val();
	var password = $("#password-input").val();

//checking for black fields


if(username == '' || password == '')
{
	alert("Please fill out both fields before logging in!");

}
// username must be between and 12 characters long
else if(username.length < 5 || username.length > 12)
{
	alert("Username must be between 5 and 12 letters long!");
}
else if(password.length < 5 || username.length > 12)
{
	alert("Password must be between 5 and 12 letters long!");
}
else
{
	$('#login-div').flyOffPage({
    duration: 400, // 400 milliseconds (0.4 seconds)
    direction: top
});	
	
	
}

});
});
