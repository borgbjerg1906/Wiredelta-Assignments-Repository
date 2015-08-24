$(document).ready(function(){

    $("#login-div").hide().slideDown('slow');

    
   
 

$("#login-button").click(function(){
	var username = $("#username-input").val();
	var password = $("#password-input").val();
	

//checking for black fields

if(username == '' || password == '')
{
	alert("Please fill out both fields before logging in!");
    $('#start-login').hide();

}
// username must be between and 12 characters long
else if(username.length < 5 || username.length > 12)
{
	alert("Username must be between 5 and 12 letters long!");
    $('#start-login').hide();
}
else if(password.length < 5 || username.length > 12)
{
	alert("Password must be between 5 and 12 letters long!");
    $('#start-login').hide();
}
else
{
	confirm("Congratulations! You have been succesfully logged in!" + "\n\nWelcome " + username + " and enjoy your stay here");
	confirm("You will now be redirected to the information page");
    window.open( "information.html");
}

});	

$('#submit-btn').click(function() {
    var name = $('#name-input').val();
    var email = $('#email-input').val();
    var number = $('#number-input').val();
    var inputboxName = '<input type="text" value="' + name + '" class="input-result">';
    var inputboxEmail = '<input type="text" value="' + email + '" class="input-result">';
    var inputboxNumber = '<input type="text" value="' + number + '" class="input-result">';
    var newrow = '<tr id="createdRow"><td>' + 'Name:</td>' + '<td>' + inputboxName + '</td>' + '<td>' + 'Email:</td>' + '<td>' + inputboxEmail + '</td><td>' + 'Phone Number:</td><td>'+ inputboxNumber + '</td></tr><hr>';
    
    $('.mytable tr:last').after(newrow);
    confirm("Row Created!\n\n" + "Information:\n" + "Name: " + name + "\nEmail: " + email + "\nPhone Number: " + number);
    
});


$("#createdRow").live("click", function(){
   
     if (confirm("Are you sure you want to delete this row?!")) {
        $(this).remove();
    }
    return false;
	
	
});





});	









		


	
