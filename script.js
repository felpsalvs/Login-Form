let validator = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = validator.checkInput(input);
      if (check !== true) {
        send = false;
        validator.showError(input, check);
      }
    }

    if (send) {
      form.submit();
    }
  },
  checkInput: (input) => {
    let rules = input.getAttribute("data-rules");
    if (rules !== null) {
      rules = rules.split("|");
      for (let k in rules) {
        let rDetails = rules[k].split("=");
        switch (rDetails[0]) {
          case "required":
            if (input.value == "") {
              return "Campo necessário";
            }
            break;
          case "min":
            break;
        }
      }
    }
    return true;
  },
  showError: (input, error) => {
    input.style.borderColor = "red";
    let errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerHTML = error;

    input.parentElement.insetBefore(errorElement, input.ElementSibling);
  },
};

let form = document.querySelector("#email");
form.addEventListener("submit", validator.handleSubmit);
