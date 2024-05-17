function validate() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("name").style.borderColor = "red";
    return false;
  }

  var contact = document.getElementById("contact").value;

  var pattern = /^\d{10}$/;
  if (!contact.match(pattern)) {
    document.getElementById("contacterr").innerHTML = "invalid contact no";
    return false;
  }

  var pwd = document.getElementById("pwd").value;
  if (pwd.length < 6) {
    document.getElementById("pwderr").innerHTML = "password must be atleast 6";
    return false;
  }

  var cpwd = document.getElementById("cpwd").value;
  if (pwd != cpwd) {
    document.getElementById("cpwderr").innerHTML =
      "password and confirm password must be same";
    return false;
  }
}
