document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    username: username,
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Sign Up Successful!");

  window.location.href = "/pages/products/products.html";
});
