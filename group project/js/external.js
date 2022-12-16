function validateForm() {
  // Get the values of the input fields
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var submit = document.querySelector('submit').value;

  // Validate the input fields
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email == "") {
    alert("Please enter your email address");
    return false;
  }
  if (age == "") {
    alert("Please enter your age");
    return false;
  }
  if (gender == undefined) {
    alert("Please select your gender");
    return false;
  }
}
