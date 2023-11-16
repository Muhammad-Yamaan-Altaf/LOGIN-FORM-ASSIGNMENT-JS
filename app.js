function myFunction() {
    var check = document.getElementById("myInput");
    if (check.  type === "password") {
      check.type = "text";
    } else {
      check.type = "password";
    }
  }