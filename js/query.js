function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var details = document.getElementById("details").value;
    var subject = document.getElementById("subject").value;
    var emailRangeCheck =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (fname == "" ) {
        alert ("Please enter your First Name");
        return false;
    }
    if (lname == "" ) {
        alert ("Please enter your Last Name");
        return false;
    }

    if (email == "" ) {
        alert ("Please enter your Email");
        return false;
    }
   

    if(!emailRangeCheck.test(email)){
      alert ("Please enter a valid Email");
      return false;
   }
  

    if (subject == "") {
        alert ("Please select a subject");
        return false;
    }

    if(details == "" ) {
        alert ("Please enter details");
        return false;
    }
    
    

var detail_box = document.getElementById("getdetail"); //Detail Box
var btn = document.getElementById("view"); // Get the button that opens the detail box
var span = document.getElementsByClassName("edit")[0]; // Get the <span> element that closes the detail box

//user clicks the view query button, open the detail box 
btn.onclick = function() {
  detail_box.style.display = "block";
}

//user clicks on <span> (edit), close the detail box
span.onclick = function() {
    detail_box.style.display = "none";
}

//When the user clicks anywhere outside of the detail box, close it
window.onclick = function(event) {
  if (event.target == detail_box) {
    detail_box.style.display = "none";
  }
}

document.getElementById("deta").innerHTML="First Name : "+fname+"<br><br>"+"Last Name : "+lname+"<br><br>"+"Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: "+email+"<br><br>"+"Subject &nbsp;&nbsp;&nbsp;&nbsp;: "+subject+"<br><br>"+"Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: "+details;

document.getElementById("view").click();

}

