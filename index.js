var objPeople = [
	{ // Object @ 0 index
		username: "abhishekdhadwal8@gmail.com",
		password: "lol"
	},
	{ // Object @ 1 index
		username: "whocum@gmail.com",
		password: "cum"
	},

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("Incorrect Email Address or Password")
}

function matchPassword() {
  var pw1 = document.getElementById("pswd1").value;
  var pw2 = document.getElementById("pswd2").value;

  if(pw1!=pw2)
  {
    alert("Passwords did not match");
	}
		else {
			alert("Passwords Matched")	
		}
}

document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}

);
