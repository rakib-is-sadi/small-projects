let lock = document.querySelectorAll(".lock");
let password = document.querySelectorAll(".pass");

function toggolPass(eye, pass) {
  if (eye.classList.contains("fa-eye-slash") && pass.type === "password") {
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    pass.type = "text";
  } else {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    pass.type = "password";
  }
}

lock.forEach((eye, index) => {
  eye.addEventListener("click", () => {
    toggolPass(eye, password[index]);
  });
});

let login = document.getElementById("login-div");
let register = document.getElementById("register-div");
let forgot = document.getElementById("forgot-div");

let regiLink = document.getElementById("register-link");
let forgotLink = document.getElementById("forgot-link");
let back = document.getElementById("back");
let update = document.getElementById("update");
let signUp = document.getElementById("sign-up");
let loginBtn = document.getElementById("login-btn");

register.style.display = "none";
forgot.style.display = "none";

function switchDiv(hideDiv, showDiv) {
  hideDiv.classList.add("fade-out");
  setTimeout(() => {
    hideDiv.style.display = "none";
    hideDiv.classList.remove("fade-out");
    showDiv.style.display = "flex";
    showDiv.classList.add("fade-in");
    setTimeout(() => {
      showDiv.classList.remove("fade-in");
    }, 400);
  }, 400);
}

// Login → Register
regiLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchDiv(login, register);
});

// Register → Login
back.addEventListener("click", (e) => {
  e.preventDefault();
  switchDiv(register, login);
});

// Login → Forgot
forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchDiv(login, forgot);
});

// Forgot → Login
update.addEventListener("click", (e) => {
  e.preventDefault();
  switchDiv(forgot, login);
});

// Registration
signUp.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length >= 3) {
    alert("Maximum 3 accounts allowed!");
    return;
  }

  users.push({ email: email, password: pass });
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "main.html";
});

// Login
loginBtn.addEventListener("click", () => {
  let email = document.getElementById("login-email").value;
  let pass = document.getElementById("login-pass").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(
    (user) => user.email === email && user.password === pass,
  );

  if (found) {
    window.location.href = "main.html";
  } else {
    alert("Invalid email or password!");
  }
});

update.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("forgot-email").value;
  let newPass = document.getElementById("new-pass").value;
  let confirmPass = document.getElementById("confirm-pass").value;

  if (email === "" || newPass === "" || confirmPass === "") {
    alert("All fields are required!");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    alert("Email not found!");
    return;
  }

  users[userIndex].password = newPass;
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "main.html";
});
