function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var details = document.getElementById("details").value;
    var subject = document.getElementById("subject").value;
    var emailRange =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (fname == "" ) {
        alert ("Please enter your First Name");
        fname.style.borderColor="red";
        return false;
    }
    if (lname == "" ) {
        alert ("Please enter your Last Name");
        lname.style.borderColor="red";
        return false;
    }

    if (email == "" ) {
        alert ("Please enter your Email");
        email.style.borderColor="red";
        return false;
    }
   

    if(!emailRange.test(email)){
      alert ("Please enter valid Email");
      email.style.borderColor="red";
      return false;
   }
  

    if (subject == "") {
        alert ("Please select a subject");
        subject.style.borderColor="red";
        return false;
    }

    if(details == "" ) {
        alert ("Please enter details");
        details.style.borderColor="red";
        return false;
    }
    
    
   


//RESULT POPUP BOX
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("view");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("det").innerHTML="First Name : "+fname+"<br><br>"+"Last Name : "+lname+"<br><br>"+"Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: "+email+"<br><br>"+"Subject &nbsp;&nbsp;&nbsp;&nbsp;: "+subject+"<br><br>"+"Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: "+details;

document.getElementById("view").click();

}