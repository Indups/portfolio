function checkFirstChar(event) {
  var nameInput = event.target;

  // Check if the first character is a space or tab
  if (nameInput.value.charCodeAt(0) === 32 || nameInput.value.charCodeAt(0) === 9) {
    nameInput.setCustomValidity("The first character cannot be a space or tab");
  } else {
    nameInput.setCustomValidity("");
  }
}

function blockSpace(event) {
  // Get the keyCode of the pressed key
  var keyCode = event.which || event.keyCode;

  // Allow letters, numbers, hyphens, and apostrophes
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || keyCode === 45 || keyCode === 39) {
    return true;
  }

  // Block space and tab characters
  if (keyCode === 32 || keyCode === 9) {
    event.preventDefault();
    return false;
  }
}
      
       function validateForm() {
        var name = document.getElementById("name").value;
        var mobilenumber = document.getElementById("mobilenumber").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var msg1 = document.getElementById("msg1")

        if (name == "") {
          msg1.innerHTML = "Name must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        if(name=="\s{1}")
        {
          msg1.innerHTML = "Name must be character"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (/\d/.test(name)){
          msg1.innerHTML = "Name must be character"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber == "") {
          msg1.innerHTML = "Mobile Number must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (isNaN(mobilenumber)){
          msg1.innerHTML = "Mobile Number must be Digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber.length<10){
          msg1.innerHTML = "Mobile Number must have 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber.length>10){
          msg1.innerHTML = "Mobile Number must have only 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
          msg1.innerHTML = "Email must be a valid email address"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (subject == "") {
          msg1.innerHTML = "Subject must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
  

        if (message == "") {
          msg1.innerHTML = "Message must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        
        return true;
      }
      