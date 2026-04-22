let display = document.querySelector(".display");
let pre = document.querySelector(".pre");
let equal = document.querySelector(".equal");
let btn = document.querySelectorAll("button");
let clear = document.querySelector(".c");
let del = document.querySelector(".d");

let btnValues = "";

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.classList.contains("equal") ||
      element.classList.contains("c") ||
      element.classList.contains("d")
    )
      return;
    btnValues = btnValues + element.value;
    display.innerText = btnValues;
  });
});

equal.addEventListener("click", () => {
  let operators = ["+", "-", "×", "÷", "%"];
  function findOperator(e) {
    return e.split("").filter((op) => operators.includes(op));
  }
  let operator = findOperator(btnValues);
  if (btnValues === "" || operator.length === 0) return;
  pre.innerText = btnValues;
  let parts = btnValues.split(/[+\-×÷%]/);
  if (parts.some((p) => p === "")) return;

  let result = parseFloat(parts[0]);

  for (let i = 0; i < operator.length; i++) {
    if (operator[i] === "+") result = result + parseFloat(parts[i + 1]);
    if (operator[i] === "-") result = result - parseFloat(parts[i + 1]);
    if (operator[i] === "×") result = result * parseFloat(parts[i + 1]);
    if (operator[i] === "÷") result = result / parseFloat(parts[i + 1]);
    if (operator[i] === "%") result = result % parseFloat(parts[i + 1]);
  }

  display.innerText = result;
  btnValues = display.innerText;
});

del.addEventListener("click", () => {
  btnValues = btnValues.slice(0, -1);
  display.innerText = btnValues;
  if (display.innerText === "") {
    display.innerText = 0;
    btnValues = "";
  }
});
clear.addEventListener("click", () => {
  display.innerText = 0;
  pre.innerText = 0;
  btnValues = "";
});


// light Function


function lightTheme() {

}

let theme = document.querySelector(".theme");
let swtc = document.querySelector(".switch");
let check = 0;
theme.addEventListener("click", () => {
  if(check === 0) {
    theme.style.justifyContent = "end";
    document.body.classList.add("light")
    check = 1;
  } else {
    theme.style.justifyContent = "start";
    document.body.classList.remove("light")
    check = 0;
  }
})